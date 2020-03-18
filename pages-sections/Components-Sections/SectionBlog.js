import React from "react";
import Head from "next/head";
import "./style.css";
export default function Footer(params) {
    return <div>
        <Head>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
            <link rel="stylesheet" href="https://www.iiitb.ac.in/includes/css/basic-frame.css" rel="stylesheet" type="text/css" />
        </Head>
        <section>
            <div className="gap remove-gap mrg-05">
                <div className="container">
                    <div className="sec-tl text-center">
                        <h2 itemProp="headline">Blog Posts</h2>
                        <span>A reflection of the diverse mix of thinking minds on the campus</span>
                    </div>
                    <div className="blog-wrap3 remove-ext3 blogs-home">
                        <div className="row">
                            <div className="col-md-4 col-sm-12">
                                <div className="story-box3">
                                    <div className="story-img"/>
                                        <a href="blogs/how-to-improve-data-speeds" title=""><img src="includefiles/blogs/medium/speep-internet1.jpg" alt=""/></a>
                                            <span className="story-date"><a href="blogs/how-to-improve-data-speeds" title="">20<i>Dec</i></a></span>
                                    </div>
                                        <div className="story-info3">
                                            <ul className="pst-meta">
                                                <li>By: <a href="blogs/how-to-improve-data-speeds" title="">admin</a></li>
                                            </ul>
                                            <h4><a href="blogs/how-to-improve-data-speeds" title="">How to improve data speeds</a></h4>
                                            <p>Mobile broadband subscriptions in India are expected to surpass voice-only 2G services very soon—4G LTE subscriptions account for 50% of mobile subscriptions. As per the recent Ericsson Mobility Report, 4G LT</p>
                                            <a className="post-btn" href="blogs/how-to-improve-data-speeds" title="">View Detail<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="story-box3">
                                        <div className="story-img">
                                            <a href="blogs/your-chance-to-shape-the-worlds-digital-future-is-here" title=""><img src="includefiles/blogs/medium/Worlds-Digital-Future-is-Here!1.jpg" alt=""/></a>
                                                <span className="story-date"><a href="blogs/your-chance-to-shape-the-worlds-digital-future-is-here" title="">20<i>Aug</i></a></span>
                                    </div>
                                            <div className="story-info3">
                                                <ul className="pst-meta">
                                                    <li>By: <a href="blogs/your-chance-to-shape-the-worlds-digital-future-is-here" title="">admin</a></li>
                                                </ul>
                                                <h4><a href="blogs/your-chance-to-shape-the-worlds-digital-future-is-here" title="">Your Chance to Shape the World's Digital Future is Here!</a></h4>
                                                <p>Technology has pervaded every aspect of our daily lives and things that were once in the realm of science fiction books have now become a reality. Not only has technology changed the way we live but also the</p>
                                                <a className="post-btn" href="blogs/your-chance-to-shape-the-worlds-digital-future-is-here" title="">View Detail<i className="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12">
                                        <div className="story-box3">
                                            <div className="story-img">
                                                <a href="blogs/monitoring-net-neutrality-a-challenge" title=""><img src="includefiles/blogs/medium/Monitoring-Net-Neutrality.jpg" alt=""/></a>
                                                    <span className="story-date"><a href="blogs/monitoring-net-neutrality-a-challenge" title="">20<i>Aug</i></a></span>
                                    </div>
                                                <div className="story-info3">
                                                    <ul className="pst-meta">
                                                        <li>By: <a href="blogs/monitoring-net-neutrality-a-challenge" title="">admin</a></li>
                                                    </ul>
                                                    <h4><a href="blogs/monitoring-net-neutrality-a-challenge" title="">Monitoring Net Neutrality: A Challenge</a></h4>
                                                    <p>Author: V. Sridhar, Professor, IIIT Bangalore and Kartik Raja, CEO of Phimetrics...</p>
                                                    <a className="post-btn" href="blogs/monitoring-net-neutrality-a-challenge" title="">View Detail<i className="fas fa-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                       </section>   
        </div>
       

}