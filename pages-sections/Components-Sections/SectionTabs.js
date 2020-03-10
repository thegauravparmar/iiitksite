import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Head from 'next/head';
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          {/* <h3>Navigation Tabs</h3> */}
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>News & Events</small>
              </h3>
              <Head>
              <link rel="stylesheet" href="https://www.iiitb.ac.in/includes/css/icons.min.css"/>
              <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
              <link rel="stylesheet" href="https://www.iiitb.ac.in/includes/css/color.css" title="color" />
                <script src="https://www.iiitb.ac.in/includes/js/jquery.min.js"></script>
              </Head>
              
              {/* <!---  ROW 2 Starts ---> */}
              <section>
                <div classNameName="gap theme-bg-layer opc9">
                  <div classNameName="container">
                     {/* <!-- Sec Title --> */}
                    <div classNameName="tem-sec remove-ext5 text-center">
                      <div classNameName="row">
                        <div classNameName="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel" data-interval="1000">
                          <div className="MultiCarousel-inner">
                            <div className="item newitems news-events">
                              <div className="tm-bx">
                                <div className="tm-thmb">
                                  <a href="news-events/call-for-applicationsresearch-programs"><img alt="Call for Applications-Resear" src="includefiles/newsevents/small/Admissions_MS_PhD.JPG" />

                                  </a>
                                  <div className="scl2">
                                    <a className="theme-bg" href="" title="Facebook" onclick="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="theme-bg" href="" title="Twitter" onclick="#"><i className="fab fa-twitter"></i></a>
                                    <a className="theme-bg" href="#" title="Google Plus" onclick="#"><i className="fab fa-linkedin"></i></a>
                                  </div>
                                </div>
                                <a href="news-events/call-for-applicationsresearch-programs"><div className="tm-inf">
                                  <h4>Call for Applications-R</h4>
                                  <span className="theme-clr">IIIT Bangalore invites applications for its research degree programs <div className="readmore">Read More...</div></span>
                                </div>
                                </a>
                              </div>
                            </div>
                            <div className="item newitems news-events">
                              <div className="tm-bx">
                                <div className="tm-thmb">
                                  <a href="news-events/workshop-on-cyber-crime-and-forensics-2"><img alt="workshop on Cyber Crime and " src="includefiles/newsevents/small/SRI_1976.JPG" /></a>
                                  <div className="scl2">
                                    <a className="theme-bg" href="" title="Facebook" onclick="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="theme-bg" href="" title="Twitter" onclick="#"><i className="fab fa-twitter"></i></a>
                                    <a className="theme-bg" href="#" title="Google Plus" onclick="#"><i className="fab fa-linkedin"></i></a>
                                  </div>
                                </div>
                                <a href="news-events/workshop-on-cyber-crime-and-forensics-2"><div className="tm-inf">
                                  <h4>workshop on "Cyber Crim</h4>
                                  <span className="theme-clr">IIIT Bangalore conducted a two-day workshop on "Cyber Crime and Forensics" on 14-15 F <div className="readmore">Read More...</div></span>
                                </div></a>
                              </div>
                            </div>
                            <div className="item newitems news-events">
                              <div className="tm-bx">
                                <div className="tm-thmb">
                                  <a href="news-events/celebration-of-republic-day"><img alt="Celebration of Republic Day" src="includefiles/newsevents/small/Untitled-11.jpg" /></a>
                                  <div className="scl2">
                                    <a className="theme-bg" href="" title="Facebook" onclick="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="theme-bg" href="" title="Twitter" onclick="#"><i className="fab fa-twitter"></i></a>
                                    <a className="theme-bg" href="#" title="Google Plus" onclick="#"><i className="fab fa-linkedin"></i></a>
                                  </div>
                                </div>
                                <a href="news-events/celebration-of-republic-day"><div className="tm-inf">
                                  <h4>Celebration of Republic</h4>
                                  <span className="theme-clr">We celebrated 71st Republic Day on January 26, 2020 <div className="readmore">Read More...</div></span>
                                </div></a>
                              </div>
                            </div>
                            <div className="item newitems news-events">
                              <div className="tm-bx">
                                <div className="tm-thmb">
                                  <a href="news-events/extension-of-mou-between-iiitb-and-nimhans"><img alt="Extension of MoU between III" src="includefiles/newsevents/small/MoU-1.jpg" /></a>
                                  <div className="scl2">
                                    <a className="theme-bg" href="" title="Facebook" onclick="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="theme-bg" href="" title="Twitter" onclick="#"><i className="fab fa-twitter"></i></a>
                                    <a className="theme-bg" href="#" title="Google Plus" onclick="#"><i className="fab fa-linkedin"></i></a>
                                  </div>
                                </div>
                                <a href="news-events/extension-of-mou-between-iiitb-and-nimhans"><div className="tm-inf">
                                  <h4>Extension of MoU betwee</h4>
                                  <span className="theme-clr">Extension of MoU between IIIT Bangalore and NIMHANS <div className="readmore">Read More...</div></span>
                                </div></a>
                              </div>
                            </div>
                            <div className="item newitems news-events">
                              <div className="tm-bx">
                                <div className="tm-thmb">
                                  <a href="news-events/inclusive-stem-confluence-2020"><img alt="Inclusive Stem Confluence 20" src="includefiles/newsevents/small/I_Stem_Confluence.jpg" /></a>
                                  <div className="scl2">
                                    <a className="theme-bg" href="" title="Facebook" onclick="#"><i className="fab fa-facebook"></i></a>
                                    <a className="theme-bg" href="" title="Twitter" onclick="#"><i className="fab fa-twitter"></i></a>
                                    <a className="theme-bg" href="#" title="Google Plus" onclick="#"><i className="fab fa-linkedin"></i></a>
                                  </div>
                                </div>
                                <a href="news-events/inclusive-stem-confluence-2020"><div className="tm-inf">
                                  <h4>Inclusive Stem Confluen</h4>
                                  <span className="theme-clr">The Inclusive STEM Confluence 2020 was conducted at IIIT Bangalore during 17-18 Janua <div className="readmore">Read More...</div></span>
                                </div></a>
                              </div>
                            </div>
                            <div className="item newitems news-events">
                              <div className="tm-bx">
                                <div className="tm-thmb">
                                  <a href="news-events/fairwork-foundation-report"><img alt="Fairwork Foundation Report" src="includefiles/newsevents/small/fairwork.jpg" /></a>
                                  <div className="scl2">
                                    <a className="theme-bg" href="" title="Facebook" onclick="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="theme-bg" href="" title="Twitter" onclick="#"><i className="fab fa-twitter"></i></a>
                                    <a className="theme-bg" href="#" title="Google Plus" onclick="#"><i className="fab fa-linkedin"></i></a>
                                  </div>
                                </div>
                                <a href="news-events/fairwork-foundation-report"><div className="tm-inf">
                                  <h4>Fairwork Foundation Rep</h4>
                                  <span className="theme-clr">As the lead India investigator for the Fairwork Foundation's effort to ensure fair la <div className="readmore">Read More...</div></span>
                                </div></a>
                              </div>
                            </div>
                            <div className="item newitems news-events">
                              <div className="tm-bx">
                                <div className="tm-thmb">
                                  <a href="news-events/meeting-with-bill-gates"><img alt="Meeting with Bill Gates" src="includefiles/newsevents/small/bill-gates-meet.jpg" /></a>
                                  <div className="scl2">
                                    <a className="theme-bg" href="" title="Facebook" onclick="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="theme-bg" href="" title="Twitter" onclick="#"><i className="fab fa-twitter"></i></a>
                                    <a className="theme-bg" href="#" title="Google Plus" onclick="#"><i className="fab fa-linkedin"></i></a>
                                  </div>
                                </div>
                                <a href="news-events/meeting-with-bill-gates"><div className="tm-inf">
                                  <h4>Meeting with Bill Gates</h4>
                                  <span className="theme-clr">The MOSIP team, on 30th October 2019, had the pleasure of providing Bill Gates  <div className="readmore">Read More...</div></span>
                                </div></a>
                              </div>
                            </div>
                            <div className="item newitems news-events">
                              <div className="tm-bx">
                                <div className="tm-thmb">
                                  <a href="news-events/congratulations-2"><img alt="Congratulations" src="includefiles/newsevents/small/congratulations.jpg" /></a>
                                  <div className="scl2">
                                    <a className="theme-bg" href="" title="Facebook" onclick="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="theme-bg" href="" title="Twitter" onclick="#"><i className="fab fa-twitter"></i></a>
                                    <a className="theme-bg" href="#" title="Google Plus" onclick="#"><i className="fab fa-linkedin"></i></a>
                                  </div>
                                </div>
                                <a href="news-events/congratulations-2"><div className="tm-inf">
                                  <h4>Congratulations</h4>
                                  <span className="theme-clr">Sridhar Varadharajan, Preeti Mudliar and Balaji Parthasarathy have been awarded INR 1 <div className="readmore">Read More...</div></span>
                                </div></a>
                              </div>
                            </div>
                          </div>
                          <button className="btn btn-primary leftLst arrow-keys"><i className="fa fa-angle-left"></i></button>
                          <button className="btn btn-primary rightLst arrow-keys"><i className="fa fa-angle-right"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <script src="https://www.iiitb.ac.in/includes/js/bootstrap.min.js"></script>
              <script src="https://www.iiitb.ac.in/includes/js/perfect-scrollbar.min.js"></script>
              <script src="https://www.iiitb.ac.in/includes/js/owl.carousel.min.js"></script>
              <script src="https://www.iiitb.ac.in/includes/js/jquery.validate.min.js"></script>
              <script src="https://www.iiitb.ac.in/includes/js/scroll-up.min.js"></script>
              <script src="https://www.iiitb.ac.in/includes/js/custom-scripts.js?v=546.21"></script>
              <script src="https://www.iiitb.ac.in/includes/js/jquery.liMarquee.js"></script>
              <script src="https://www.iiitb.ac.in/includes/javascripts/common.js?v=546.21"></script>
              <script src="https://cdn.userway.org/widget.js"></script>

              <script src="https://www.iiitb.ac.in/includes/javascripts/index.js?v=546.21"></script>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>Notice</small>
              </h3>
              <div class="quicktabs-main" id="quicktabs-container-home_page_tabs"><div id="quicktabs-tabpage-home_page_tabs-0" class="quicktabs-tabpage">
                <div class="quicktabs-block-title"></div>
                <div><div class="views-element-container">
                  <div class="js-view-dom-id-b90a02cd170013f05730e526493cc7457ecb50baf953d879b1fc9b17df0a99e8">


                    <div class="notice-list">

                      <ul class="arrow_list">

                        <marquee direction="up" loop="true" onmouseover="this.stop();" onmouseout="this.start();" height="300px" className="mt-0 mb-0" >
                          <li><div class="views-field views-field-title">
                            <span class="field-content">
                              <a href="#">Academic Calendar for I/II/III/IV Year (A. Y. 2019-20)</a></span>
                          </div></li><li><div class="views-field views-field-title"><span class="field-content">
                            <a href="#">Fee Structure for B. Tech. first year students (A. Y. 2019-20)</a></span></div></li></marquee>
                      </ul>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
