# Builds review contact sheets: 4 screens per image (2x2), labelled, for quick visual QA.
#   .\tools\contact-sheet.ps1                 dark renders
#   .\tools\contact-sheet.ps1 -Light          light renders
param([switch]$Light, [int]$CellW = 1600, [int]$CellH = 1060)
Add-Type -AssemblyName System.Drawing
$root = Split-Path $PSScriptRoot -Parent
$src = Join-Path $root 'design\screens'
$out = Join-Path $root 'design\contact-sheets'
New-Item -ItemType Directory -Force $out | Out-Null
$files = Get-ChildItem $src -Filter '*.png' | Where-Object { if ($Light) { $_.BaseName -like '*-light' } else { $_.BaseName -notlike '*-light' } } | Sort-Object Name
$suffix = if ($Light) { 'light' } else { 'dark' }
$i = 0; $sheet = 1
while ($i -lt $files.Count) {
  $bmp = New-Object System.Drawing.Bitmap ($CellW * 2), ($CellH * 2 + 80)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = 'HighQualityBicubic'; $g.SmoothingMode = 'HighQuality'; $g.TextRenderingHint = 'AntiAliasGridFit'
  $g.Clear([System.Drawing.Color]::FromArgb(40, 40, 46))
  $font = New-Object System.Drawing.Font 'Segoe UI', 22, ([System.Drawing.FontStyle]::Bold)
  for ($k = 0; $k -lt 4 -and $i -lt $files.Count; $k++, $i++) {
    $img = [System.Drawing.Image]::FromFile($files[$i].FullName)
    $x = ($k % 2) * $CellW; $y = [math]::Floor($k / 2) * ($CellH + 40)
    $g.DrawString($files[$i].BaseName, $font, [System.Drawing.Brushes]::White, $x + 10, $y + 4)
    $g.DrawImage($img, $x, $y + 40, $CellW, $CellH)
    $img.Dispose()
  }
  $path = Join-Path $out ("sheet-{0}-{1:D2}.png" -f $suffix, $sheet)
  $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png); $g.Dispose(); $bmp.Dispose()
  "$path"; $sheet++
}
