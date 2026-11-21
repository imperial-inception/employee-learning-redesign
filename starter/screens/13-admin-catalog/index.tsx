// GENERATED from design/html/13-admin-catalog.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Button, Icon, Kbd, StatusIcon, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Admin catalog";

export default function View_13_admin_catalog() {
  return (
    <div className={s.v}>
      <AppShell workspace="admin" active="catalog">
        <main id="page">
          <header className="ph" style={{ marginBottom: "18px" }}>
            <div>
              <h1>
                {"Catalog "}
                <span className={s.hc}>
                  · 536 items
                </span>
              </h1>
              <p className="sub">
                {"Academy catalog "}
                <span className="mono">
                  103
                </span>
                {" · Library catalog "}
                <span className="mono">
                  341
                </span>
                {" · LMS "}
                <span className="mono">
                  84
                </span>
                {" · Intranet "}
                <span className="mono">
                  8
                </span>
              </p>
            </div>
            <div className="acts">
              <Button>
                <Icon name="upload" size="sm" />
                {" Import"}
              </Button>
              <Button variant="primary">
                <Icon name="plus" size="sm" />
                {" Add item"}
              </Button>
            </div>
          </header>
          <div className={s.fbar}>
            <div className="input">
              <Icon name="search" size="sm" />
              <span className="ellipsis">
                Search title or code
              </span>
              <Kbd>
                /
              </Kbd>
            </div>
            <Button size="sm" className={s.fl}>
              <span className={s.k}>
                Type
              </span>
              All
              <Icon name="cd" size="xs" />
            </Button>
            <Button size="sm" className={s.fl}>
              <span className={s.k}>
                Level
              </span>
              All
              <Icon name="cd" size="xs" />
            </Button>
            <Button size="sm" className={s.fl}>
              <span className={s.k}>
                Provider
              </span>
              All
              <Icon name="cd" size="xs" />
            </Button>
            <Button size="sm" className={s.fl}>
              <span className={s.k}>
                Source
              </span>
              All
              <Icon name="cd" size="xs" />
            </Button>
            <div className="seg">
              <span className="on">
                {"All "}
                <span className="n">
                  536
                </span>
              </span>
              <span>
                <span className={s.att} />
                {"Needs attention "}
                <span className="n">
                  22
                </span>
              </span>
            </div>
          </div>
          <div className={s.tw}>
            <div className={cx("panel", s.tbl)}>
              <table>
                <colgroup>
                  <col style={{ width: "34px" }} />
                  <col />
                  <col style={{ width: "104px" }} />
                  <col style={{ width: "46px" }} />
                  <col style={{ width: "82px" }} />
                  <col style={{ width: "64px" }} />
                  <col style={{ width: "124px" }} />
                  <col style={{ width: "130px" }} />
                  <col style={{ width: "84px" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>
                      <span className={cx("check", s.mid)} />
                    </th>
                    <th>
                      Title
                    </th>
                    <th>
                      Type
                    </th>
                    <th>
                      Level
                    </th>
                    <th>
                      Provider
                    </th>
                    <th>
                      Duration
                    </th>
                    <th>
                      Source
                    </th>
                    <th>
                      Health
                    </th>
                    <th className={s.srt}>
                      {"Updated "}
                      <Icon name="cd" size="xs" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={s.open}>
                    <td>
                      <span className="check" />
                    </td>
                    <td className={cx("ellipsis", s.ti)}>
                      Interface Management
                      <span className={s.cd}>
                        IM-201
                      </span>
                    </td>
                    <td>
                      <span className={s.ty}>
                        <span className={cx("d formal", s.dd)} />
                        Formal
                      </span>
                    </td>
                    <td className="num">
                      L2
                    </td>
                    <td>
                      Academy
                    </td>
                    <td className="num">
                      2 h
                    </td>
                    <td>
                      Academy catalog
                    </td>
                    <td>
                      <span className={cx(s.hl, s.cf)}>
                        <Icon name="swap" size="xs" />
                        Conflict
                      </span>
                    </td>
                    <td className="num muted">
                      20 Nov
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="check" />
                    </td>
                    <td className={cx("ellipsis", s.ti)}>
                      Functional Architecture
                      <span className={s.cd}>
                        FA-110
                      </span>
                    </td>
                    <td>
                      <span className={s.ty}>
                        <span className={cx("d formal", s.dd)} />
                        Formal
                      </span>
                    </td>
                    <td className="num">
                      L2
                    </td>
                    <td>
                      Academy
                    </td>
                    <td className="num">
                      4 h
                    </td>
                    <td>
                      Academy catalog
                    </td>
                    <td>
                      <span className={cx("ok", s.hl)}>
                        <StatusIcon status="approved" />
                        OK
                      </span>
                    </td>
                    <td className="num muted">
                      20 Nov
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="check" />
                    </td>
                    <td className={cx("ellipsis", s.ti)}>
                      {"V&V Planning Essentials"}
                      <span className={s.cd}>
                        VV-230
                      </span>
                    </td>
                    <td>
                      <span className={s.ty}>
                        <span className={cx("d formal", s.dd)} />
                        Formal
                      </span>
                    </td>
                    <td className="num">
                      L3
                    </td>
                    <td>
                      LMS
                    </td>
                    <td className="num">
                      3 h
                    </td>
                    <td>
                      LMS
                    </td>
                    <td>
                      <span className={cx("ok", s.hl)}>
                        <StatusIcon status="approved" />
                        OK
                      </span>
                    </td>
                    <td className="num muted">
                      19 Nov
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="check" />
                    </td>
                    <td className={cx("ellipsis", s.ti)}>
                      Configuration Control
                      <span className={s.cd}>
                        CM-140
                      </span>
                    </td>
                    <td>
                      <span className={s.ty}>
                        <span className={cx("d formal", s.dd)} />
                        Formal
                      </span>
                    </td>
                    <td className="num">
                      L1
                    </td>
                    <td>
                      LMS
                    </td>
                    <td className="num">
                      1.5 h
                    </td>
                    <td>
                      LMS
                    </td>
                    <td>
                      <span className={cx("ok", s.hl)}>
                        <StatusIcon status="approved" />
                        OK
                      </span>
                    </td>
                    <td className="num muted">
                      18 Nov
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="check" />
                    </td>
                    <td className={cx("ellipsis", s.ti)}>
                      Lead a design review
                      <span className={s.cd}>
                        EX-302
                      </span>
                    </td>
                    <td>
                      <span className={s.ty}>
                        <span className={cx("d exp", s.dd)} />
                        Experiential
                      </span>
                    </td>
                    <td className="num">
                      L3
                    </td>
                    <td>
                      On the job
                    </td>
                    <td className="num">
                      ~4 h
                    </td>
                    <td>
                      Academy catalog
                    </td>
                    <td>
                      <span className={cx("ok", s.hl)}>
                        <StatusIcon status="approved" />
                        OK
                      </span>
                    </td>
                    <td className="num muted">
                      14 Nov
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="check" />
                    </td>
                    <td className={cx("ellipsis", s.ti)}>
                      Shadow a review board
                      <span className={s.cd}>
                        RL-210
                      </span>
                    </td>
                    <td>
                      <span className={s.ty}>
                        <span className={cx("d rel", s.dd)} />
                        Relational
                      </span>
                    </td>
                    <td className="num">
                      L2
                    </td>
                    <td>
                      Mentor
                    </td>
                    <td className="num">
                      ~2 h
                    </td>
                    <td>
                      Academy catalog
                    </td>
                    <td>
                      <span className={cx("ok", s.hl)}>
                        <StatusIcon status="approved" />
                        OK
                      </span>
                    </td>
                    <td className="num muted">
                      14 Nov
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="check" />
                    </td>
                    <td className={cx("ellipsis", s.ti)} title="Systems Engineering Fundamentals">
                      Systems Engineering…
                      <span className={s.cd}>
                        SE-101
                      </span>
                    </td>
                    <td>
                      <span className={s.ty}>
                        <span className={cx("d formal", s.dd)} />
                        Formal
                      </span>
                    </td>
                    <td className="num">
                      L1
                    </td>
                    <td>
                      Academy
                    </td>
                    <td className="num">
                      6 h
                    </td>
                    <td>
                      Academy catalog
                    </td>
                    <td>
                      <span className={cx("ok", s.hl)}>
                        <StatusIcon status="approved" />
                        OK
                      </span>
                    </td>
                    <td className="num muted">
                      11 Nov
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="check" />
                    </td>
                    <td className={cx("ellipsis", s.ti)}>
                      RFLP in Practice
                      <span className={s.cd}>
                        MB-220
                      </span>
                    </td>
                    <td>
                      <span className={s.ty}>
                        <span className={cx("d formal", s.dd)} />
                        Formal
                      </span>
                    </td>
                    <td className="num">
                      L2
                    </td>
                    <td>
                      LMS
                    </td>
                    <td className="num">
                      2 h
                    </td>
                    <td>
                      LMS
                    </td>
                    <td>
                      <span className={cx("warn", s.hl)}>
                        <Icon name="link" size="xs" />
                        Missing link
                      </span>
                    </td>
                    <td className="num muted">
                      10 Nov
                    </td>
                  </tr>
                  <tr className={s.chk}>
                    <td>
                      <span className="check on">
                        <Icon name="check" size="xs" />
                      </span>
                    </td>
                    <td className={cx("ellipsis", s.ti, s.raw)}>
                      TRADE STUDIES 101
                      <span className={s.cd}>
                        LB-20417
                      </span>
                    </td>
                    <td>
                      <span className={s.ty}>
                        <span className={cx("d formal", s.dd)} />
                        Formal
                      </span>
                    </td>
                    <td className="num">
                      L2
                    </td>
                    <td>
                      Library
                    </td>
                    <td className="num">
                      1 h
                    </td>
                    <td>
                      Library catalog
                    </td>
                    <td>
                      <span className={cx(s.hl, s.fmt)}>
                        <Icon name="info" size="xs" />
                        Title formatting
                      </span>
                    </td>
                    <td className="num muted">
                      8 Nov
                    </td>
                  </tr>
                  <tr className={s.chk}>
                    <td>
                      <span className="check on">
                        <Icon name="check" size="xs" />
                      </span>
                    </td>
                    <td className={cx("ellipsis", s.ti, s.raw)}>
                      traceability_mbse_v2
                      <span className={s.cd}>
                        LB-20981
                      </span>
                    </td>
                    <td>
                      <span className={s.ty}>
                        <span className={cx("d formal", s.dd)} />
                        Formal
                      </span>
                    </td>
                    <td className="num">
                      L3
                    </td>
                    <td>
                      Library
                    </td>
                    <td className="num">
                      1.5 h
                    </td>
                    <td>
                      Library catalog
                    </td>
                    <td>
                      <span className={cx(s.hl, s.fmt)}>
                        <Icon name="info" size="xs" />
                        Title formatting
                      </span>
                    </td>
                    <td className="num muted">
                      8 Nov
                    </td>
                  </tr>
                  <tr className={s.chk}>
                    <td>
                      <span className="check on">
                        <Icon name="check" size="xs" />
                      </span>
                    </td>
                    <td className={cx("ellipsis", s.ti, s.raw)}>
                      Requirements 101 (copy)
                      <span className={s.cd}>
                        LB-19022
                      </span>
                    </td>
                    <td>
                      <span className={s.ty}>
                        <span className={cx("d formal", s.dd)} />
                        Formal
                      </span>
                    </td>
                    <td className="num">
                      L1
                    </td>
                    <td>
                      Library
                    </td>
                    <td className="num">
                      45 min
                    </td>
                    <td>
                      Library catalog
                    </td>
                    <td>
                      <span className={cx(s.hl, s.fmt)}>
                        <Icon name="info" size="xs" />
                        Title formatting
                      </span>
                    </td>
                    <td className="num muted">
                      8 Nov
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="check" />
                    </td>
                    <td className={cx("ellipsis", s.ti)}>
                      Digital Thread Basics
                      <span className={s.cd}>
                        DT-120
                      </span>
                    </td>
                    <td>
                      <span className={s.ty}>
                        <span className={cx("d formal", s.dd)} />
                        Formal
                      </span>
                    </td>
                    <td className="num">
                      L2
                    </td>
                    <td>
                      Library
                    </td>
                    <td className="num">
                      1 h
                    </td>
                    <td>
                      Library catalog
                    </td>
                    <td>
                      <span className={cx(s.hl, s.cf)}>
                        <Icon name="swap" size="xs" />
                        Conflict
                      </span>
                    </td>
                    <td className="num muted">
                      8 Nov
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="check" />
                    </td>
                    <td className={cx("ellipsis", s.ti)}>
                      SysML v2 Notation
                      <span className={s.cd}>
                        LB-21304
                      </span>
                    </td>
                    <td>
                      <span className={s.ty}>
                        <span className={cx("d formal", s.dd)} />
                        Formal
                      </span>
                    </td>
                    <td className="num">
                      L3
                    </td>
                    <td>
                      Library
                    </td>
                    <td className="num">
                      2.5 h
                    </td>
                    <td>
                      Library catalog
                    </td>
                    <td>
                      <span className={cx("ok", s.hl)}>
                        <StatusIcon status="approved" />
                        OK
                      </span>
                    </td>
                    <td className="num muted">
                      8 Nov
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="check" />
                    </td>
                    <td className={cx("ellipsis", s.ti)}>
                      MBSE community call
                      <span className={s.cd}>
                        IN-004
                      </span>
                    </td>
                    <td>
                      <span className={s.ty}>
                        <span className={cx("d rel", s.dd)} />
                        Relational
                      </span>
                    </td>
                    <td className="num">
                      L1
                    </td>
                    <td>
                      Intranet
                    </td>
                    <td className="num">
                      1 h
                    </td>
                    <td>
                      Intranet
                    </td>
                    <td>
                      <span className={cx("ok", s.hl)}>
                        <StatusIcon status="approved" />
                        OK
                      </span>
                    </td>
                    <td className="num muted">
                      4 Nov
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="check" />
                    </td>
                    <td className={cx("ellipsis", s.ti)}>
                      Model Governance
                      <span className={s.cd}>
                        MB-305
                      </span>
                    </td>
                    <td>
                      <span className={s.ty}>
                        <span className={cx("d formal", s.dd)} />
                        Formal
                      </span>
                    </td>
                    <td className="num">
                      L4
                    </td>
                    <td>
                      Academy
                    </td>
                    <td className="num">
                      3 h
                    </td>
                    <td>
                      Academy catalog
                    </td>
                    <td>
                      <span className={cx("ok", s.hl)}>
                        <StatusIcon status="approved" />
                        OK
                      </span>
                    </td>
                    <td className="num muted">
                      28 Oct
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="check" />
                    </td>
                    <td className={cx("ellipsis", s.ti)}>
                      Integration Testing
                      <span className={s.cd}>
                        VV-240
                      </span>
                    </td>
                    <td>
                      <span className={s.ty}>
                        <span className={cx("d formal", s.dd)} />
                        Formal
                      </span>
                    </td>
                    <td className="num">
                      L3
                    </td>
                    <td>
                      LMS
                    </td>
                    <td className="num">
                      2 h
                    </td>
                    <td>
                      LMS
                    </td>
                    <td>
                      <span className={cx("ok", s.hl)}>
                        <StatusIcon status="approved" />
                        OK
                      </span>
                    </td>
                    <td className="num muted">
                      21 Oct
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="check" />
                    </td>
                    <td className={cx("ellipsis", s.ti)}>
                      Trade Study Methods
                      <span className={s.cd}>
                        TS-215
                      </span>
                    </td>
                    <td>
                      <span className={s.ty}>
                        <span className={cx("d formal", s.dd)} />
                        Formal
                      </span>
                    </td>
                    <td className="num">
                      L3
                    </td>
                    <td>
                      Academy
                    </td>
                    <td className="num">
                      2 h
                    </td>
                    <td>
                      Academy catalog
                    </td>
                    <td>
                      <span className={cx("ok", s.hl)}>
                        <StatusIcon status="approved" />
                        OK
                      </span>
                    </td>
                    <td className="num muted">
                      14 Oct
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className={s.tf}>
                <span className="mono">
                  1–50 of 536
                </span>
                <span className={s.pg}>
                  <span>
                    <Icon name="cl" size="xs" />
                  </span>
                  <span>
                    <Icon name="cr" size="xs" />
                  </span>
                </span>
              </div>
            </div>
            <div className={s.bulk}>
              <b className="mono">
                3
              </b>
              <span className="muted">
                selected
              </span>
              <span className={s.sep} />
              <Button variant="ghost">
                <Icon name="spark" size="xs" />
                {" Fix title formatting"}
              </Button>
              <Button variant="ghost">
                Set level
              </Button>
              <Button variant="ghost">
                Add to population
              </Button>
              <Button variant="ghost">
                <Icon name="download" size="xs" />
                {" Export"}
              </Button>
              <span className={s.sep} />
              <Button variant="ghost" style={{ padding: "0 7px" }}>
                <Icon name="x" size="xs" />
              </Button>
            </div>
          </div>
          <aside className={s.drawer}>
            <div className={s.dh}>
              <span className={s.ic}>
                <Icon name="book" size="sm" />
              </span>
              <span className={s.nm}>
                Interface Management
              </span>
              <span className="mono faint" style={{ fontSize: "11.5px" }}>
                IM-201
              </span>
              <span className="sp" />
              <span className={s.ib}>
                <Icon name="ext" size="sm" />
              </span>
              <span className={s.ib}>
                <Icon name="more" size="sm" />
              </span>
              <span className={s.ib}>
                <Icon name="x" size="sm" />
              </span>
            </div>
            <div className={s.db}>
              <div className={s.conf}>
                <div className={s.hd}>
                  <Icon name="swap" size="sm" />
                  Duration conflict
                  <span className="sp mono faint" style={{ fontSize: "11px", fontWeight: "500" }}>
                    since 11 Nov
                  </span>
                </div>
                <div className={s.opts}>
                  <div className={cx("on", s.opt)}>
                    <span className="radio on" />
                    <div>
                      <div className={s.k}>
                        Master list
                      </div>
                      <div className={s.v}>
                        2 h
                      </div>
                    </div>
                  </div>
                  <div className={s.opt}>
                    <span className="radio" />
                    <div>
                      <div className={s.k}>
                        Course files
                      </div>
                      <div className={s.v}>
                        2.5 h
                      </div>
                    </div>
                  </div>
                </div>
                <div className="help">
                  Your choice is kept on every import and comes back here only if either source changes.
                </div>
              </div>
              <div>
                <span className="label">
                  Title
                </span>
                <div className="input">
                  Interface Management
                </div>
              </div>
              <div className={s.g2}>
                <div>
                  <span className="label">
                    Code
                  </span>
                  <div className="input mono" style={{ fontSize: "12.5px" }}>
                    IM-201
                  </div>
                </div>
                <div>
                  <span className="label">
                    Type
                  </span>
                  <div className="input">
                    <span className={s.ty}>
                      <span className={cx("d formal", s.dd)} />
                      Formal
                    </span>
                    <span className={s.cd2}>
                      <Icon name="cd" size="xs" />
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <span className="label">
                  Description
                </span>
                <div className="textarea">
                  Define, control and coordinate interfaces between system elements and the teams that own them.
                </div>
              </div>
              <div className={s.g3}>
                <div>
                  <span className="label">
                    Level
                  </span>
                  <div className="input">
                    <span className="mono" style={{ fontSize: "12.5px" }}>
                      L2
                    </span>
                    <span className={s.cd2}>
                      <Icon name="cd" size="xs" />
                    </span>
                  </div>
                </div>
                <div>
                  <span className="label">
                    {"Duration "}
                    <span className={s["mark-c"]} />
                  </span>
                  <div className="input">
                    <span className="mono" style={{ fontSize: "12.5px" }}>
                      2 h
                    </span>
                  </div>
                </div>
                <div>
                  <span className="label">
                    Provider
                  </span>
                  <div className="input">
                    Academy
                    <span className={s.cd2}>
                      <Icon name="cd" size="xs" />
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <span className="label">
                  {"Course link "}
                  <span className="faint" style={{ fontWeight: "400" }}>
                    · formal items only
                  </span>
                </span>
                <div className="input">
                  <Icon name="link" size="xs" />
                  <span className="mono ellipsis" style={{ fontSize: "12px" }}>
                    https://lms.example.com/course/IM-201
                  </span>
                </div>
                <div className={s.okl}>
                  <Icon name="check" size="xs" />
                  Link opens · checked today 06:00
                </div>
              </div>
              <div className={s.hr} />
              <div>
                <span className="label">
                  Applies to
                </span>
                <div className={s.chips}>
                  <span className={s.chip}>
                    <Icon name="users" size="xs" />
                    {"Systems Engineering & Integration"}
                    <span className="n">
                      214
                    </span>
                    <span className={s.x}>
                      <Icon name="x" size="xs" />
                    </span>
                  </span>
                  <span className={s.chip}>
                    <Icon name="users" size="xs" />
                    Digital Thread
                    <span className="n">
                      96
                    </span>
                    <span className={s.x}>
                      <Icon name="x" size="xs" />
                    </span>
                  </span>
                  <span className={cx(s.chip, s.add)}>
                    <Icon name="plus" size="xs" />
                    Population
                  </span>
                </div>
              </div>
              <div>
                <span className="label">
                  Required by
                </span>
                <div className={s.rq}>
                  <Icon name="flag" size="sm" />
                  <div className="grow">
                    <div className="t">
                      {"Systems Engineering & Integration"}
                    </div>
                    <div className="c">
                      Due 31 Mar 2027 · approved by Priya Nair
                    </div>
                  </div>
                  <span className="m">
                    214
                    <small>
                      employees
                    </small>
                  </span>
                </div>
              </div>
              <div className={s.hr} />
              <div>
                <span className="label">
                  History
                </span>
                <div className={s.hist}>
                  <div className={s.he}>
                    <span className={s.dt} />
                    <div className={s.tx}>
                      <b>
                        Sam Patel
                      </b>
                      {" changed level L1 → L2"}
                    </div>
                    <span className={s.tm}>
                      20 Nov 16:12
                    </span>
                  </div>
                  <div className={s.he}>
                    <span className={s.dt} style={{ background: "var(--orange)" }} />
                    <div className={s.tx}>
                      <b>
                        Academy import
                      </b>
                      {" flagged a conflict"}
                    </div>
                    <span className={s.tm}>
                      11 Nov 02:04
                    </span>
                  </div>
                  <div className={s.he}>
                    <span className={s.dt} />
                    <div className={s.tx}>
                      <b>
                        Priya Nair
                      </b>
                      {" made it required for SE&I"}
                    </div>
                    <span className={s.tm}>
                      2 Oct 10:30
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.df}>
              <Button variant="ghost" size="sm">
                Retire item…
              </Button>
              <span className="sp" />
              <Button>
                Cancel
              </Button>
              <Button>
                {"Save "}
                <Kbd>
                  Ctrl S
                </Kbd>
              </Button>
            </div>
          </aside>
        </main>
      </AppShell>
    </div>
  );
}
