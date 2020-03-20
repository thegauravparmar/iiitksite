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
import "./style.css";
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);
import SectionScroll from "./SectionScroll.js";
// import SectionScroll from "./SectionScroll.js";


export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          {/* <h3>Navigation Tabs</h3> */}
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
              <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
              <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
              {/* <link href="./bootstrap.min.css" rel="stylesheet" type="text/css" /> */}
              <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

              <script src="./sectionscroll.js"></script>
              <link href="./bootstrap-theme.min.css" rel="stylesheet" type="text/css" />
              <link href="./site.css" rel="stylesheet" type="text/css" />
              <script src="http://code.jquery.com/jquery-1.10.2.min.js" type="text/javascript"></script>
              <script src="./jquery.bootstrap.newsbox.min.js" type="text/javascript"></script>
              <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
              <h3 >News & Events</h3>
             
              <div className="widget-title"></div>
              <div className="container  ">
                <div className="container">
                  <div className="row blog">
                    <div className="col-md-12">
                      <div id="blogCarousel" className="carousel slide container-blog" data-ride="carousel">
                      <ol class="carousel-indicators">
                          <li data-target="#blogCarousel" data-slide-to="0" class="active fab fa-angle-right"></li>
                          <li data-target="#blogCarousel" data-slide-to="1">
                         
                          </li>
                        </ol>

                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <div class="row">
                              <div class="col-md-6" >
                                <div class="item-box-blog">
                                  <div class="item-box-blog-image">
                                    <figure>  <a href="#" title=""><img  src="http://www.iiitkota.ac.in/uploads/file-1561439616864.jpeg" alt="" /></a></figure>
                                    <span><a href="#" title="" className="date">10 June 19</a></span>
                                    
                                    <div className="item-box-blog-heading">

                                      <h5><a href="#" title="" tabindex="0">ANTI TERRORISM OATH</a></h5></div><div className="item-box-blog-text">
                                      <p className="newsdata">IIIT Kota faculty and staff members took an Anti Terrorism oath on 10th June 2019.</p>
                                      <a className="post-btn" href="#" title="">View Detail<i className="fas fa-arrow-right"></i></a>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="col-md-6" >
                                <div class="item-box-blog">
                                  <div class="item-box-blog-image">
                                    <figure>  <a href="#" title=""><img  src="http://www.iiitkota.ac.in/uploads/file-1561439616864.jpeg" alt="" /></a></figure>
                                    <span ><a href="#" title="" className="date">10 June 19</a></span>
                                    
                                    <div className="item-box-blog-heading">

                                      <h5><a href="#" title="" tabindex="0">ANTI TERRORISM OATH</a></h5></div><div className="item-box-blog-text">
                                      <p className="newsdata">IIIT Kota faculty and staff members took an Anti Terrorism oath on 10th June 2019.</p>
                                      <a className="post-btn" href="#" title="">View Detail<i className="fas fa-arrow-right"></i></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                             
                            </div>

                          </div>

                          <div class="carousel-item ">
                          <div class="row">
                              <div class="col-md-6" >
                                <div class="item-box-blog">
                                  <div class="item-box-blog-image">
                                    <figure>  <a href="#" title=""><img src="http://www.iiitkota.ac.in/uploads/file-1561439616864.jpeg" alt="" /></a></figure>
                                    <span><a href="#" title="" className="date">10 June 19</a></span>
                                     
                                    <div className="item-box-blog-heading">

                                      <h5><a href="#" title="" tabindex="0">ANTI TERRORISM OATH</a></h5></div><div className="item-box-blog-text">
                                      <p className="newsdata">IIIT Kota faculty and staff members took an Anti Terrorism oath on 10th June 2019.</p>
                                      <a className="post-btn" href="#" title="" >View Detail<i className="fas fa-arrow-right"></i></a>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="col-md-6" >
                                <div class="item-box-blog">
                                  <div class="item-box-blog-image">
                                    <figure>  <a href="#" title=""><img  src="http://www.iiitkota.ac.in/uploads/file-1561439616864.jpeg" alt="" /></a></figure>
                                    <span><a href="#" title="" className="date">10 June 19</a></span>
                                     
                                    <div className="item-box-blog-heading">

                                      <h5><a href="#" title="" tabindex="0">ANTI TERRORISM OATH</a></h5></div><div className="item-box-blog-text">
                                      <p className="newsdata">IIIT Kota faculty and staff members took an Anti Terrorism oath on 10th June 2019.</p>
                                      <a className="post-btn" href="#" title="">View Detail <i className="fas fa-arrow-right"></i></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                             
                            </div>

                          </div>

                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <h3>
                Notice
                        </h3>

                       
              {/* <body class="bg-gray-500">
                <pre id="test"></pre>
                <div id="app"><div class="flex justify-center mt-4">Loading ....</div></div>
                <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
                <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
                <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
              </body> */}
               <div className="widget-title"></div>
               <SectionScroll/>
              {/*
             
                      <div className="quicktabs-main" id="quicktabs-container-home_page_tabs"><div id="quicktabs-tabpage-home_page_tabs-0" className="quicktabs-tabpage">
                        <div className="quicktabs-block-title"></div>
                        <div><div className="views-element-container">
                          <div className="js-view-dom-id-b90a02cd170013f05730e526493cc7457ecb50baf953d879b1fc9b17df0a99e8">


                            <div className="notice-list">

                              <ul className="arrow_list">

                                <Marquee behavior="scroll" direction="up"  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} height="300px"  >
                                  <li><div className="views-field views-field-title">
                                    <span className="field-content">
                                      <a href="#">Academic Calendar for I/II/III/IV Year (A. Y. 2019-20)</a></span>
                                  </div></li><li><div className="views-field views-field-title"><span className="field-content">
                                    <a href="#">Fee Structure for B. Tech. first year students (A. Y. 2019-20)</a></span></div></li></Marquee>
                              </ul>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                      </div> */}
              {/* <div class="container">
		<div class="row">
			<div class="col-md-4">
				<div class="panel panel-default">
					<div class="panel-heading">
						<span class="glyphicon glyphicon-list-alt"></span><b>News</b></div>
					<div class="panel-body">
						<div class="row">
							<div class="col-xs-12">
								<ul class="demo1">
									<li class="news-item">
										<table cellpadding="4">
											<tr>
												<td><img src="images/1.png" width="60" class="img-circle" /></td>
												<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim... <a href="#">Read more...</a></td>
											</tr>
										</table>
									</li>
									<li class="news-item">
										<table cellpadding="4">
											<tr>
												<td><img src="images/2.png" width="60" class="img-circle" /></td>
												<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim... <a href="#">Read more...</a></td>
											</tr>
										</table>
									</li>
									<li class="news-item">
										<table cellpadding="4">
											<tr>
												<td><img src="images/3.png" width="60" class="img-circle" /></td>
												<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim... <a href="#">Read more...</a></td>
											</tr>
										</table>
									</li>
									<li class="news-item">
										<table cellpadding="4">
											<tr>
												<td><img src="images/4.png" width="60" class="img-circle" /></td>
												<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim... <a href="#">Read more...</a></td>
											</tr>
										</table>
									</li>
									<li class="news-item">
										<table cellpadding="4">
											<tr>
												<td><img src="images/5.png" width="60" class="img-circle" /></td>
												<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim... <a href="#">Read more...</a></td>
											</tr>
										</table>
									</li>
									<li class="news-item">
										<table cellpadding="4">s
											<tr>
												<td><img src="images/6.png" width="60" class="img-circle" /></td>
												<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim... <a href="#">Read more...</a></td>
											</tr>
										</table>
									</li>
									<li class="news-item">
										<table cellpadding="4">
											<tr>
												<td><img src="images/7.png" width="60" class="img-circle" /></td>
												<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim... <a href="#">Read more...</a></td>
											</tr>
										</table>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="panel-footer">

					</div>
				</div>
			</div>
			<sectionscroll />
		
	

</div></div> */}
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}