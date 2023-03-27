// Libraries
import React from "react";


// Styles
import "./Landing.css";
import NavBarLanding from "./NavBarLanding/NavBarLanding";

interface LandingLayoutInterface {
    children?: React.ReactNode;
}

const LandingLayout: React.FC<LandingLayoutInterface> = ({children}) => {
    return (
        <div className="wrapper">
             <div className="main-panel">
                 <div className="">
                    <NavBarLanding />
                 </div>
                 <div className="content">
                     {children}
                 </div>
                 {/* <Footer /> */}
             </div>
         </div> 
     )
}


export default LandingLayout;