

import React from 'react';


const {useState, useEffect} = React;
const height = 300

const Maquree = ({title, text}) => {
    const [pos,setPos] = useState(400);   
    const [run, setRun] = useState(true);
    const scrollEff = () => {
        if(run) setPos(p=>p<height? p+1: -height);        
    }
    
    useEffect(() => {
        const tm = setTimeout(scrollEff, 10);
        return () => clearTimeout(tm);
    },[pos]);
    
    const onMouseEnter = (e) => {
        // console.log("mouse enter");
        setRun(false);
    }
    
    const onMouseLeave = (e) => {
        // console.log("mouse leave");
        setRun(true);
        setPos(pos+1); // to trigger useEffect 
    }
    
    const styles = {
        position: "relative", 
        fontSize: "14px",
        bottom: pos + "px",
        textDecoration: "none",
        listStyle: "none",
        
    };

    return (
        <div class="item-box-blog3 col-md-12" >
        <div style={styles}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
        <li><div>
            <a href="#">Academic Calendar (A. Y. 2019-20)</a>
        </div></li>
        <br />
        <li><div >
            <a href="#">Fee Structure for B. Tech. (A. Y. 2019-20)</a></div>  <br /></li>
        <li><div>

            <a href="#">Academic Calendar for I/II/III/IV Year (A. Y. 2019-20)</a>
        </div></li>  <br /><li><div >
            <a href="#">Fee Structure for B. Tech. first year students (A. Y. 2019-20)</a></div>  <br /></li>
        <li><div>

            <a href="#">Academic Calendar for I/II/III/IV Year (A. Y. 2019-20)</a>
        </div></li><br /><li><div >
            <a href="#">Fee Structure for B. Tech. first year students (A. Y. 2019-20)</a></div></li></div> </div>
    )
}

export default function SectionScroll(params) {
    return <div>
        <Maquree />
    </div>

}