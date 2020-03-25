import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);
import "./style.css";
export default function LibrarySection() {
    const classes = useStyles();
    return (
        // <div className={classes.section}>
        <GridContainer justify="left">
            <GridItem xs={122} sm={122} md={12}>
            <head>
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                {/* <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" /> */}
                <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet' />
                <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />

            </head>
            <div className="topheading"> Library</div>
                <img className="imgtag3" src="http://www.iiitkota.ac.in/images/library.jpg"></img>
                <h5 className={classes.description}>
           <div className="blod">   <h3 > Library</h3></div> 
Institute has a reference section of the best titles relevant to various disciplines – CSE, ECE, Mathematics, Humanity and Social Sciences, etc.

<h3>Digital Library</h3>
For anytime anywhere access of IP-based subscribed online resources (databases, publications in journals and conferences), we are using <a href="http://mnitj.remotexs.in/">RemoteXs</a> solution. Note: Use your LDAP ID and password to login. Do not share your credentials. Access is being monitored.

                </h5>
            </GridItem>
            <GridItem xs={122} sm={122} md={6}>
                
                <h5 className={classes.description}>
               <h3> NPTEL</h3>
You are encouraged to leverage following NPTEL resources:<br/><br/>

<a href="nptel.ac.in" >CSE courses at NPTEL<br/>
ECE courses at NPTEL</a><br/><br/>


Alternatively, you may browse NPTEL website<br/><br/>


<a href="http://nptel.ac.in/course.php?disciplineId=106" >Computer Science and Engineering</a><br/>

<a href="http://nptel.ac.in/courses/117102059/" >Electronics and Communication Engineering</a><br/><br/>

<h3>SWAYAM</h3>
<a href="https://swayam.gov.in/About" >SWAYAM</a> is an initiative by GoI to make some of the best learning resources accessible to all.
<br/><br/>
<a href="https://swayam.gov.in/Undergraduate" >SWAYAM portal for undergraduates</a>
<br/><br/>
<h3>National Digital Library</h3><br/>
<a href="https://ndl.iitkgp.ac.in/">National Digital </a>
<br/><br/>
If you have any query, you may send an email to library@iiitkota.ac.in
                </h5>
            </GridItem>
            <GridItem xs={122} sm={122} md={6}>
                <p className={classes.title}>Librarian</p>
               <h5 className={classes.description}>
             <center>    <div className="card" >
                    <img className="imgtag2"alt="Librarian" src="http://www.iiitkota.ac.in/images/Office%20Staff/NT-10.jpg"/><br/>
                    <strong><a href="#" data-darkreader-inline-color="">Mr. Satya Narayan Sharma</a> </strong>

                        <p><strong>Library Information Officer</strong><br/>
                            Phone:+91-9549651643 <br/>
                        </p>
                    

                </div></center>
                </h5>
            </GridItem>
        </GridContainer>
        // </div>
    );
}
