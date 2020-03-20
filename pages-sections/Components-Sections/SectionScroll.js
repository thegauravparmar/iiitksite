//</script><script type="text/babel">
import React from 'react';
var ReactDOM = require('react-dom');
const {useState, useEffect} = React;
const height = 500

const Maquree = ({title, text}) => {
    const [pos,setPos] = useState(500);   
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
        fontSize: "1em",
        bottom: pos + "px"
    };
    
    return (
        <h1 style={styles} 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave} 
        ><mark>{title}</mark> {text}</h1>
    )
    
}

const App = () => {
    return (
        <div className="container">
            <Maquree title="" text=" <a>Learn to code for FREE! </a>" />     
             <Maquree title="" text=" <a>Learn to code for FREE! </a>" />   
              <Maquree title="" text=" <a>Learn to code for FREE! </a>" />   
               <Maquree title="" text=" <a>Learn to code for FREE! </a>" />   
        </div>
    );  
}
// export default ReactDOM.render (<App />, document.getElementById("app"));

