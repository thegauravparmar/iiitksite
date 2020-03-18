import React from "react";
import Head from "next/head";
import "./style.css";
export default function Footer(params) {
	return <div>
		<Head>
			<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
			<link rel="stylesheet" href="https://www.iiitb.ac.in/includes/css/basic-frame.css" rel="stylesheet" type="text/css" />
		</Head>
		<section className="gap whyjoin" id="home-area">
			<div className="container">
				{/* <div className="row"> */}
				<center>	<div className="col-lg-6">

					<h1 className="centerpart"><strong><span  >Why Join
IIIT Kota?</span></strong></h1>
				</div></center>

				<div className="col-lg-12 ">
					<img alt="" src="https://www.iiitb.ac.in/includefiles/userfiles/images/Broad-Academic-philosophy_Icon.png" />&nbsp;&nbsp;

					<img alt="" src="https://www.iiitb.ac.in/includefiles/userfiles/images/practice-oriented-learning.png" />&nbsp;&nbsp;

					<img alt="" src="https://www.iiitb.ac.in/includefiles/userfiles/images/Emphasis-on-research_Icon.png" />&nbsp;&nbsp;

					<img alt="" src="https://www.iiitb.ac.in/includefiles/userfiles/images/Entrepreneurial-support_icon.png" />&nbsp;&nbsp;

					<img alt="" src="https://www.iiitb.ac.in/includefiles/userfiles/images/Excellent-peer-group_Icon.png" />&nbsp;&nbsp;

					<img alt="" src="https://www.iiitb.ac.in/includefiles/userfiles/images/Global-exchange-student_Icon.png" />
					<br />Global exchange
					Broad academic philosophy &nbsp;&nbsp;
					Excellent peer group &nbsp;&nbsp;
					Entrepreneurial support &nbsp;&nbsp;
					Emphasis on research  &nbsp;&nbsp;
					Practice-oriented learning  &nbsp;&nbsp;
				</div>
			</div>
			{/* </div> */}
		</section>
	</div>

}