import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import image1 from "assets/img/Admin-and-Academic-Block.png";
import image2 from "assets/img/Directors-Residence.png";
import Head from "next/head";
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js";
import image3 from "assets/img/Girls-Hostel.png";
import image4 from "assets/img/3.jpg";
import image5 from "assets/img/4.jpeg";
import image6 from "assets/img/8.jpg";
import image7 from "assets/img/children.jpeg";
import image8 from "assets/img/yoga.jpg";
// import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";
const useStyles = makeStyles(styles);
export default function SectionCarousel() {
	const classes = useStyles();

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true
	};
	return (
		<div>
			<Head>
				<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
			</Head>
			<div className={classes.section}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={12} md={5} className={classes.marginAuto}>
							<Card carousel>
								<Carousel {...settings}>
									<div>
										<img src={image4} alt="First slide" className="slick-image" />
										{/* <div className="slick-caption">
											{/* <h4>
												<LocationOn className="slick-icons" />
                      							Yellowstone National Park, United States
                    						</h4> 
											</div> */}
									</div>
									<div>
										<img
											src={image5}
											alt="Second slide"
											className="slick-image"
										/>
										{/* <div className="slick-caption">
											<h4>
												<LocationOn className="slick-icons" />
                      							Somewhere Beyond, United States
                    						</h4>
										</div> */}
									</div>
									<div>
										<img
											src={image6}
											alt="Second slide"
											className="slick-image"
										/>
										{/* <div className="slick-caption">
											<h4>
												<LocationOn className="slick-icons" />
                      							Somewhere Beyond, United States
                    						</h4>
										</div> */}
									</div>
									<div>
										<img
											src={image7}
											alt="Second slide"
											className="slick-image"
										/>
										{/* <div className="slick-caption">
											<h4>
												<LocationOn className="slick-icons" />
                      							Somewhere Beyond, United States
                    						</h4>
										</div> */}
									</div>
									<div>
										<img src={image8} alt="Third slide" className="slick-image" />
										{/* <div className="slick-caption">
											<h4>
												<LocationOn className="slick-icons" />
                      							Yellowstone National Park, United States
                    						</h4>
										</div> */}
									</div>
								</Carousel>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={7}>
							<p className="maindescrpt"><br/>
								To address the challenges faced by the Indian IT industry and growth of the domestic IT market, the Ministry of Human Resource Development (MHRD), Government of India intends to establish twenty Indian Institutes of Information Technology(IIIT), on a Not-for-profit Public Private Partnership (N-PPP) basis. The partners in setting up the IllTs would be the Ministry of Human Resource Development (MHRD), Governments of the respective States where each lllT will be established, and the industry.

								On the same line INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, PUNE (IIITP) is newly established Educational Institute by the Ministry of Human Resources Development, Government of India and few industry partners as Not-for-profit Public Private Partnership (N-PPP) Institution.
            				</p>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		</div>
	);
}
