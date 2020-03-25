import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);
import "./style.css"
export default function ItInfraSection() {
    const classes = useStyles();
    return (
        // <div className={classes.section}>
        <GridContainer justify="left">
            <GridItem xs={122} sm={122} md={12}>
                <div className="topheading"><span>IT </span>INFRASTRUCTURE</div>
                <head>
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    {/* <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" /> */}
                    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet' />
                    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />

                </head>
                <h5 className={classes.description}>
                    MNIT data centre is housing MNIT Private Cloud using VMware V Cloud Suite installed on Blade Server and core network switches with 2 Gbps lease line for internet connectivity. MNIT Private Cloud is an IaaS service, which allows administrator to create Virtual data centres with virtual servers, machines and networks, expanding or reducing as their needs require, with this Private Cloud, MNIT users get both computational resources, and network License resources for their own exclusive use. MNIT private cloud running various applications/services used by student, faculty and Staff and hundreds of Virtual Machines (VMs) have been allotted to various researchers and faculty members.
<br />


                </h5>
            </GridItem>
            <GridItem xs={122} sm={122} md={12}>
                {/* <p className={classes.title}>Building Status at Permanent Campus</p> */}
                <h5 className={classes.description}>
                    <b> Computing Resources of Data Centre:</b> CISCO UCS:- Two UCS 5108 Chassis and 12 CISCO B200 M4 Servers with following Configuration
                 <br />    <br />
                    <ul>
                        <li>2 x 18 Core Intel® Xeon® Processor (E5-2699 v3)</li>
                        <li>Intel® C610 chipset</li>
                        <li>4 x10Gb Ethernet NIC ports</li>
                        <li>2 X CISCO UCS 6248UP Fabric Interconnect</li>
                    </ul>
                    EMC2 Storages and Backup Devices:
                    <br /><br />
                    <ul>
                        <li>      ✔ VNX-5200 SAN used for MNIT Private Cloud: - 20 TB</li>
                        <li>      ✔ VNX-5300 SAN used for MNIT Private Cloud: - 10 TB</li>
                        <li>      ✔ ISILON S200 NAS for data storages by the Deptts: - 22 TB</li>
                        <li>      ✔ AVAMAR M1200 Gen4S backup Appliance: - 3.9 TB</li>
                    </ul>
                    HP Storages Devices:-<br /><br />
                    ✔ HP Storage Works X1000 G2 (6TB) used for Auto CAD Licensing Sever & Auto CAD Data Storage.<br />
✔ 10 TB SAN Storage:- HP MSA P2000 Modular Smart Array Systems with RAID 5, and Smart Array P410i Controller.<br /><br />
                    <b>Highlights of Data Centre:</b>
                    <br /> <br />
                       » Centralized provisioning of IT resources <br />
                       » Work load elasticity<br />
                       » Single interface for administrator for entire IT infrastructure<br /> » Provide Data Storage to departments<br />
                       » Provide High End Computational Resources for Research purpose<br />
                       » Various Hosting and other Services like -<br /><br />
                    <ul>
                        <li>   - MNIT Website [mnit.ac.in]</li>
                        <li>   - IIIT KOTA Website [iiitkota.ac.in]</li>
                        <li>   - DNS Server for creating Sub domains </li>
                        <li>   - LDAP Authentication Server for 6000 users </li>
                        <li>   - Library Management software KOHA and RFID </li>
                        <li>   - Prowess Server (Database of the financial performance of Indian companies) </li>
                        <li>   - More than hundred Virtual Machines used for IT Services and allotted to Researchers and faculty members.</li>
                    </ul>
                </h5>
            </GridItem>
        </GridContainer>
        // </div>
    );
}
