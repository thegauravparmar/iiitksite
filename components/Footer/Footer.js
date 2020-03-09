import React from 'react';
import Head from 'next/head';

import './style.css';


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
									<h4 className="widget-contact__title">Institute’s address:</h4>
									<p className="widget-contact__text">26/C, Electronics City, Hosur Road<br /> Bengaluru - 560100</p>
								</li>
								<li>
									<h4 className="widget-contact__title">Office Hours:</h4>
									<p className="widget-contact__text">Monday – Friday (8:00 am to 5:00 pm)</p>
								</li>
								<li>
									<h4 className="widget-contact__title">Telephone:</h4>
									<p className="widget-contact__text">+91 80 4140 7777/ 2852 7627</p>
								</li>
							</ul>
						</div>
						<div className="col-12 col-sm-3">
							<div className="widget-link">
								
							</div>
						</div>
						<div className="col-12 col-sm-3">
							<div className="widget-link">
							<h3 className="widget-title mt2">Quick Links</h3>
								<ul className="widget-list">
									<li><a href="media">Media</a></li>
									<li><a href="blogs">Blogs</a></li>
									<li><a href="placements">Placements</a></li>
									<li><a href="careers">Careers</a></li>
									<li><a href="tenders">Tenders</a></li>
									<li><a href="donatecontribute">Donate/Contribute</a></li>
									<li><a href="my-iiitb">My IIITB</a></li>
									<li><a href="contact-us">Contact Us</a></li>
									<li><a href="sitemap">Sitemap</a></li>
								</ul>
							</div>
						</div>
						<div className="col-sm-3 col-md-3 col-lg-3">
							<div className="widget-link">
								<h3 className="widget-title">Newsletter Sign Up</h3>
								<form method="post" id="email_subscriber" novalidate="novalidate">
									<div className="form-group footer-subscribe">
										<input type="email" placeholder="Subscribe with Email" name="newsletter_email" id="newsletter_email" className="form-control" />
										<input type="hidden" id="curl" name="curl" value="https://www.iiitb.ac.in/" />
										<input type="hidden" name="csrf_test_name" value="1a644ca8c7f3233f2caff7a4120ea989" />
										<button className="butn theme newsletter"><span>Join</span></button>
									</div>
									<p className="spam-message display-none"></p>
								</form>


								<strong className="widget-title display-block pt-4 white">Alumni Sign Up</strong>
								<div method="post" id="alumni_signup" novalidate="novalidate">
									<div className="form-group footer-subscribe">
										<a className="butn theme" href="https://alumni.iiitb.ac.in/" target="_blank"><span>Click here</span></a>
									</div>
									<p className="spam-message display-none"></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="footer-box-02">
				<div className="container">
					<div className="row">
						<div className="col-sm-4 col-md-4 col-lg-4">
							<p className="copy-info">Copyright &copy; 2018 - All Rights Reserved - IIIT Kota</p>
						</div>
						<div className="col-sm-4 col-md-4 col-lg-4 text-center">
							<ul className="social-list-01">
								<li><a href="https://www.facebook.com/IIIT-Bangalore-152653471481338/"><i className="fab fa-facebook-square"></i></a></li>
								<li><a href="https://twitter.com/iiitb_official"><i className="fab fa-twitter-square"></i></a></li>
								<li className='display-none'><a href="#"><i className="fab fa-instagram"></i></a></li>
								<li><a href="https://www.linkedin.com/company/iiit-bangalore"><i className="fab fa-linkedin"></i></a></li>
								<li><a href="https://www.youtube.com/user/iiitbmedia"><i className="fab fa-youtube-square"></i></a></li>
							</ul>
						</div>
						<div className="col-sm-4 col-md-4 col-lg-4 display-none">
							<div className="footer-info">
								<a className="footer-info__01" href="#">Policy</a>
								<a className="footer-info__02" href="#">Terms Of use</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>

}
