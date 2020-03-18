import React from 'react';
import Head from 'next/head';

import "./style.css";


export default function Footer(params) {
	return <div>
		<Head>
			<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
		</Head>
		<footer className="wrapp-footer">
			<div className="footer-box-01">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-3">
							<a href="" className="footer-logo ">
								<img src="/apple-icon.png" alt="abcde" width="120" />
							</a>
							<ul className="widget-contact">
								<li>
									<h4 className="widget-contact__title">Address:</h4>
									<p className="widget-contact__text">Indian Institute of Information Technology, Kota,<br/>MNIT Campus<br />Jaipur - 302017</p>
								</li>
								<li>
								<h4 className="widget-contact__title">Telephone:</h4>
									<p className="widget-contact__text">0141-2715071</p>
								</li>
								<li>
									<h4 className="widget-contact__title">Office Hours:</h4>
									<p className="widget-contact__text">Monday – Friday (9:00 am to 5:00 pm)</p>
								</li>
							</ul>
						</div>
						<div className="col-12 col-sm-3">
							<div className="widget-link">
							
                            <h3 className="widget-title mt2">Location</h3>
                            <p className="widget-contact__text"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d444.90525107731656!2d75.81081539996529!3d26.86405112386001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xea3495775ef99a25!2sIndian%20Institute%20of%20Information%20Technology%2C%20Kota!5e0!3m2!1sen!2sin!4v1583758002596!5m2!1sen!2sin" width="250px" height="300px" frameBorder="0" allowFullScreen=""></iframe></p>
                        
							</div>
						</div>
						<div className="col-12 col-sm-3">
							<div className="widget-link">
							
							</div>
						</div>
						<div className="col-sm-3 col-md-3 col-lg-3">
							<div className="widget-link">
							<h3 className="widget-title mt2">Quick Links</h3>
								<ul className="widget-list">
									<li><a href="media">Recruitment</a></li>
									<li><a href="blogs">Tender Invitations</a></li>
									<li><a href="placements">Facilities</a></li>
									<li><a href="careers">Web Masters</a></li>
									<li><a href="tenders">Annual Reports</a></li>
									<li><a href="donatecontribute">Photo Gallery</a></li>
									<li><a href="my-iiitb">Holidays</a></li>
									<li><a href="contact-us">Contact Us</a></li>
									<li><a href="sitemap">Sitemap</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="footer-box-02  ">
				<div className="container">
					<div className="row ">
						<div className="col-12  text-center ">
							<p className="copy-info">Copyright &copy; 2018 - All Rights Reserved - IIIT Kota</p>
						</div>						
					</div>
				</div>
			</div>
		</footer>
	</div>

}