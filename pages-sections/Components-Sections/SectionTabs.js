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

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          {/* <h3>Navigation Tabs</h3> */}
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
 <h3 >News & Events</h3>
 <div className="widget-title"></div>
      <div className="container cta-100 ">
        <div className="container">
          <div className="row blog">
            <div className="col-md-12">
              <div id="blogCarousel" className="carousel slide container-blog" data-ride="carousel">
              
               
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="row">
                      <div class="col-md-4" >
                        <div class="item-box-blog">
                          <div class="item-box-blog-image">
                           
                            
                         
                            <figure> <img alt="" src="https://cdn.pixabay.com/photo/2017/02/08/14/25/computer-2048983_960_720.jpg"/> </figure>
                          </div>
                          <div class="item-box-blog-body">
                          
                            <div class="item-box-blog-heading">
                              <a href="#" tabindex="0">
                                <h5>News Title</h5>
                              </a>
                            </div>
                           
                            
                            <div class="item-box-blog-text">
                              <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p>
                            </div>
                            <div class="mt"> <a href="#" tabindex="0" class="btn bg-blue-ui white read">read more</a> </div>
                           
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4" >
                        <div class="item-box-blog">
                          <div class="item-box-blog-image">
                        
                            
                          
                            <figure> <img alt="" src="https://cdn.pixabay.com/photo/2017/02/08/14/25/computer-2048983_960_720.jpg"/> </figure>
                          </div>
                          <div class="item-box-blog-body">
                           
                            <div class="item-box-blog-heading">
                              <a href="#" tabindex="0">
                                <h5>News Title</h5>
                              </a>
                            </div>
                         
                            <div class="item-box-blog-data" styleName="padding: px 15px;">
                             
                            </div>
                        
                            <div class="item-box-blog-text">
                              <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p>
                            </div>
                            <div class="mt"> <a href="#" tabindex="0" class="btn bg-blue-ui white read">read more</a> </div>
                          
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4" >
                        <div class="item-box-blog">
                          <div class="item-box-blog-image">
                           
                            
                          
                            <figure> <img alt="" src="https://cdn.pixabay.com/photo/2017/02/08/14/25/computer-2048983_960_720.jpg"/> </figure>
                          </div>
                          <div class="item-box-blog-body">
                        
                            <div class="item-box-blog-heading">
                              <a href="#" tabindex="0">
                                <h5>News Title</h5>
                              </a>
                            </div>
                           
                            <div class="item-box-blog-data" styleName="padding: px 15px;">
                             
                            </div>
                         
                            <div class="item-box-blog-text">
                              <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p>
                            </div>
                            <div class="mt"> <a href="#" tabindex="0" class="btn bg-blue-ui white read">read more</a> </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                 
                  <div class="carousel-item ">
                    <div class="row">
                      <div class="col-md-4" >
                        <div class="item-box-blog">
                          <div class="item-box-blog-image">
                            
                            
                           
                            <figure> <img alt="" src="https://cdn.pixabay.com/photo/2017/02/08/14/25/computer-2048983_960_720.jpg"/> </figure>
                          </div>
                          <div class="item-box-blog-body">
                       
                            <div class="item-box-blog-heading">
                              <a href="#" tabindex="0">
                                <h5>News Title</h5>
                              </a>
                            </div>
                           
                            
                            <div class="item-box-blog-text">
                              <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p>
                            </div>
                            <div class="mt"> <a href="#" tabindex="0" class="btn bg-blue-ui white read">read more</a> </div>
                            
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4" >
                        <div class="item-box-blog">
                          <div class="item-box-blog-image">
                            
                            
                            
                            <figure> <img alt="" src="https://cdn.pixabay.com/photo/2017/02/08/14/25/computer-2048983_960_720.jpg"/> </figure>
                          </div>
                          <div class="item-box-blog-body">
                            
                            <div class="item-box-blog-heading">
                              <a href="#" tabindex="0">
                                <h5>News Title</h5>
                              </a>
                            </div>
                          
                             
                            <div class="item-box-blog-text">
                              <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p>
                            </div>
                            <div class="mt"> <a href="#" tabindex="0" class="btn bg-blue-ui white read">read more</a> </div>
                            
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4" >
                        <div class="item-box-blog">
                          <div class="item-box-blog-image">
                           
                            
                           
                            <figure> <img alt="" src="https://cdn.pixabay.com/photo/2017/02/08/14/25/computer-2048983_960_720.jpg"/> </figure>
                          </div>
                          <div class="item-box-blog-body">
                          
                            <div class="item-box-blog-heading">
                              <a href="#" tabindex="0">
                                <h5>News Title</h5>
                              </a>
                            </div>
                           
                              
                            <div class="item-box-blog-text">
                              <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p>
                            </div>
                             <div class="mt"> <a href="#" tabindex="0" class="btn bg-blue-ui white read">read more</a> </div>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                   
                  </div>
               
                </div>
                <ol class="carousel-indicators">
                  <li data-target="#blogCarousel" data-slide-to="0" class="active fab fa-angle-right"></li>
                  <li data-target="#blogCarousel" data-slide-to="1"></li>
                </ol>
              </div>
              
            </div>
          </div>
        </div>
      </div>
            </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <h3>
                        Notice
              </h3>   <div className="widget-title"></div>
                      <div className="quicktabs-main" id="quicktabs-container-home_page_tabs"><div id="quicktabs-tabpage-home_page_tabs-0" className="quicktabs-tabpage">
                        <div className="quicktabs-block-title"></div>
                        <div><div className="views-element-container">
                          <div className="js-view-dom-id-b90a02cd170013f05730e526493cc7457ecb50baf953d879b1fc9b17df0a99e8">


                            <div className="notice-list">

                              <ul className="arrow_list">

                                <marquee direction="up" loop="true" onMouseOver="this.stop();" onMouseOut="this.start();" height="300px" className="mt-0 mb-0" >
                                  <li><div className="views-field views-field-title">
                                    <span className="field-content">
                                      <a href="#">Academic Calendar for I/II/III/IV Year (A. Y. 2019-20)</a></span>
                                  </div></li><li><div className="views-field views-field-title"><span className="field-content">
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
