// GENERATED from design/html/15f-rules-feedback-form.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Button, Icon, Pill, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Feedback form";

export default function View_15f_rules_feedback_form() {
  return (
    <div className={s.v}>
      <AppShell workspace="admin" active="rules">
        <main id="page">
          <header className="ph" style={{ marginBottom: "16px" }}>
            <div>
              <h1>
                {"Rules & populations"}
              </h1>
              <p className="sub">
                Who gets which framework, and which learning is required for whom.
              </p>
            </div>
            <div className="acts">
              <Button>
                <Icon name="file" size="sm" />
                {" Change history"}
              </Button>
            </div>
          </header>
          <div className="tabs">
            <span>
              {"Frameworks "}
              <span className="n">
                2
              </span>
            </span>
            <span>
              {"Populations "}
              <span className="n">
                6
              </span>
            </span>
            <span>
              {"Required learning "}
              <span className="n">
                4
              </span>
            </span>
            <span>
              {"Roles "}
              <span className="n">
                3
              </span>
            </span>
            <span>
              Reminders
            </span>
            <span className="on">
              Feedback form
            </span>
          </div>
          <div className={s.lay}>
            <section className={cx("panel", s["ff-main"])}>
              <div className="panel-h">
                <h2>
                  Quick feedback
                </h2>
                <Pill tone="ok" size="sm">
                  v3 published 2 Sep
                </Pill>
                <span className="lnk">
                  {"Earlier versions "}
                  <Icon name="cr" size="xs" />
                </span>
              </div>
              <div className={s["ff-lead"]}>
                <Icon name="record" size="sm" />
                <span>
                  {"Employees answer this in "}
                  <b>
                    Record learning, step 5 of 6
                  </b>
                  , for every activity they record. Two taps and an optional comment.
                </span>
              </div>
              <div className={s["ff-body"]}>
                <div>
                  <h3 className={s.k}>
                    {"QUESTIONS "}
                    <span className="lnk">
                      Drag to reorder
                    </span>
                  </h3>
                  <div className={s["ff-box"]}>
                    <div className={s["ff-q"]}>
                      <span className={s["ff-grip"]} />
                      <span className={s["ff-ix"]}>
                        1
                      </span>
                      <div className="grow">
                        <div className={s["ff-qt"]}>
                          Was this worth the time?
                        </div>
                        <div className={s["ff-opts"]}>
                          <span className={s["ff-o"]}>
                            Yes
                          </span>
                          <span className={s["ff-o"]}>
                            Partly
                          </span>
                          <span className={s["ff-o"]}>
                            No
                          </span>
                        </div>
                      </div>
                      <span className={s["ff-sel"]}>
                        Single choice
                        <Icon name="cd" size="xs" />
                      </span>
                      <span className={s["ff-rq"]}>
                        <span className="toggle on" />
                        Required
                      </span>
                      <span className={s["ff-mo"]}>
                        <Icon name="more" size="sm" />
                      </span>
                    </div>
                    <div className={s["ff-q"]}>
                      <span className={s["ff-grip"]} />
                      <span className={s["ff-ix"]}>
                        2
                      </span>
                      <div className="grow">
                        <div className={s["ff-qt"]}>
                          Would you suggest it to a colleague?
                        </div>
                        <div className={s["ff-opts"]}>
                          <span className={s["ff-o"]}>
                            Yes
                          </span>
                          <span className={s["ff-o"]}>
                            Maybe
                          </span>
                          <span className={s["ff-o"]}>
                            No
                          </span>
                        </div>
                      </div>
                      <span className={s["ff-sel"]}>
                        Single choice
                        <Icon name="cd" size="xs" />
                      </span>
                      <span className={s["ff-rq"]}>
                        <span className="toggle on" />
                        Required
                      </span>
                      <span className={s["ff-mo"]}>
                        <Icon name="more" size="sm" />
                      </span>
                    </div>
                    <div className={cx(s["ff-q"], s.ed)}>
                      <span className={s["ff-grip"]} />
                      <span className={s["ff-ix"]}>
                        3
                      </span>
                      <div className="grow">
                        <div className={s["ff-qt"]}>
                          Anything the people who run it should know?
                          <span className={s["ff-tg"]}>
                            UNSAVED
                          </span>
                        </div>
                        <div className={s["ff-was"]}>
                          {"Was: "}
                          <s>
                            Any comments?
                          </s>
                        </div>
                        <div className={cx("input", s["ff-tx"])}>
                          Free text, up to 300 characters
                        </div>
                      </div>
                      <span className={s["ff-sel"]}>
                        Comment
                        <Icon name="cd" size="xs" />
                      </span>
                      <span className={cx(s["ff-rq"], s.off)}>
                        <span className="toggle" />
                        Optional
                      </span>
                      <span className={s["ff-mo"]}>
                        <Icon name="more" size="sm" />
                      </span>
                    </div>
                    <div className={s["ff-add"]}>
                      <Icon name="plus" size="xs" />
                      Add question
                      <span className="sp">
                        3 of 3 used, so it stays quick
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className={s.k}>
                    WHO SEES THE ANSWERS
                  </h3>
                  <div className={s["ff-who"]}>
                    <div className={s["ff-wc"]}>
                      <span className={s["ff-wi"]}>
                        <Icon name="eye" size="sm" />
                      </span>
                      <div>
                        <b>
                          Activity owners
                        </b>
                        <p>
                          Combined results for their own items, once 5 or more people have answered. Comments without names.
                        </p>
                      </div>
                    </div>
                    <div className={cx(s["ff-wc"], s.no)}>
                      <span className={s["ff-wi"]}>
                        <Icon name="eyeoff" size="sm" />
                      </span>
                      <div>
                        <b>
                          Not managers
                        </b>
                        <p>
                          Not part of manager review. Managers never see the answers, and answers never affect approval.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.dirty}>
                <span className={s.dt} />
                <span className={s.tx}>
                  <b>
                    1 unsaved change
                  </b>
                  {" · reworded question 3 · employees see v3 until you publish"}
                </span>
                <span className="sp" />
                <Button>
                  Discard
                </Button>
                <Button variant="primary">
                  Publish form
                </Button>
              </div>
            </section>
            <section className={cx("panel", s["ff-pv"])}>
              <div className="panel-h">
                <Icon name="eye" size="sm" />
                <h2>
                  Live preview
                </h2>
                <span className="lnk">
                  what employees see
                </span>
              </div>
              <div className={s["ff-fr"]}>
                <div className={s["ff-steps"]}>
                  <span className={s.dn} />
                  <span className={s.dn} />
                  <span className={s.dn} />
                  <span className={s.dn} />
                  <span className={s.cu} />
                  <span />
                </div>
                <div className={s["ff-k"]}>
                  STEP 5 OF 6
                </div>
                <h4>
                  Quick feedback
                </h4>
                <p className={s["ff-sb"]}>
                  Helps the people who run this activity improve it.
                </p>
                <div className={s["ff-pq"]}>
                  <div className={s["ff-pl"]}>
                    Was this worth the time?
                  </div>
                  <div className={s["ff-pk"]}>
                    <span className="on">
                      Yes
                    </span>
                    <span>
                      Partly
                    </span>
                    <span>
                      No
                    </span>
                  </div>
                </div>
                <div className={s["ff-pq"]}>
                  <div className={s["ff-pl"]}>
                    Would you suggest it to a colleague?
                  </div>
                  <div className={s["ff-pk"]}>
                    <span>
                      Yes
                    </span>
                    <span>
                      Maybe
                    </span>
                    <span>
                      No
                    </span>
                  </div>
                </div>
                <div className={s["ff-pq"]}>
                  <div className={s["ff-pl"]}>
                    Anything the people who run it should know?
                    <small>
                      optional
                    </small>
                  </div>
                  <div className={cx("textarea", s["ff-pt"])}>
                    Type here…
                    <span className={s["ff-cnt"]}>
                      0 / 300
                    </span>
                  </div>
                </div>
                <div className={s["ff-pn"]}>
                  <Icon name="eyeoff" size="xs" />
                  <span>
                    {"Your manager won't see these answers. They don't affect approval."}
                  </span>
                </div>
                <div className={s["ff-pf"]}>
                  <Button size="sm">
                    <Icon name="cl" size="xs" />
                    {" Back"}
                  </Button>
                  <span className="sp" />
                  <Button size="sm">
                    Continue
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
