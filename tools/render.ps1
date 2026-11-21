# Renders design/html/*.html to design/screens/*.png with headless Edge (Windows).
# Dark is the default theme; every screen is rendered in dark and light unless told otherwise.
#   .\tools\render.ps1                          all screens, dark + light
#   .\tools\render.ps1 -Names 04-goals          one screen, both themes
#   .\tools\render.ps1 -Names 04-goals -DarkOnly
param([string[]]$Names, [switch]$Light, [switch]$DarkOnly, [int]$Width = 1600, [int]$Height = 1060, [double]$Scale = 2, [int]$TimeoutSec = 45)
$ErrorActionPreference = 'Stop'
$edge = @("C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe", "C:\Program Files\Microsoft\Edge\Application\msedge.exe") |
  Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $edge) { throw 'Microsoft Edge not found' }
$root = Split-Path $PSScriptRoot -Parent
$html = Join-Path $root 'design\html'
$out = Join-Path $root 'design\screens'
$profileDir = Join-Path $env:TEMP ('sp-render-' + [guid]::NewGuid().ToString('N').Substring(0, 8))  # isolated, parallel-safe
New-Item -ItemType Directory -Force $out, $profileDir | Out-Null
if (-not $Names) { $Names = Get-ChildItem $html -Filter '*.html' | ForEach-Object { $_.BaseName } }
$themes = if ($Light) { @('light') } elseif ($DarkOnly) { @('dark') } else { @('dark', 'light') }
foreach ($n in $Names) {
  foreach ($t in $themes) {
    $src = Join-Path $html "$n.html"
    $url = 'file:///' + ($src -replace '\\', '/') + $(if ($t -eq 'light') { '?theme=light' } else { '' })
    $png = Join-Path $out ($(if ($t -eq 'light') { "$n-light" } else { $n }) + '.png')
    Remove-Item $png -ErrorAction SilentlyContinue
    # Don't use Start-Process -Wait: a lingering Edge crash-handler child can keep it blocked forever.
    # Instead wait until the PNG exists and its size is stable, then stop the browser we started.
    $p = Start-Process -FilePath $edge -PassThru -WindowStyle Hidden -ArgumentList @('--headless=new', '--disable-gpu', '--hide-scrollbars',
      '--no-first-run', '--no-default-browser-check', '--disable-breakpad', '--disable-crash-reporter', "--user-data-dir=$profileDir",
      "--force-device-scale-factor=$Scale", "--window-size=$Width,$Height", '--virtual-time-budget=4000', "--screenshot=$png", $url)
    $sw = [Diagnostics.Stopwatch]::StartNew(); $last = -1
    while ($sw.Elapsed.TotalSeconds -lt $TimeoutSec) {
      Start-Sleep -Milliseconds 400
      if (Test-Path $png) { $len = (Get-Item $png).Length; if ($len -gt 0 -and $len -eq $last) { break }; $last = $len }
    }
    if (-not $p.HasExited) { try { $p.Kill() } catch {} }
    if (Test-Path $png) { "{0}  {1:N0} KB" -f (Split-Path $png -Leaf), ((Get-Item $png).Length / 1KB) } else { "FAILED: $n ($t)" }
  }
}
Remove-Item $profileDir -Recurse -Force -ErrorAction SilentlyContinue
