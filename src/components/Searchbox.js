import './Searchbox.css'
import React, { useState } from "react";

const Searchbox = () => {
     const [mobile, setMobile] = useState(false);
     const showMobile = () => {
       if (window.innerWidth <= 800) {
         setMobile(false);
       } else {
         setMobile(false);
       }
     };
     window.addEventListener("resize", showMobile);
    return ( 
        <div className="container-Searchbox">
            <div className={mobile ? "searchbox-mobile" : "searchbox-web"}>
                <div className="search-window">
                    <div className="search-area">
                      {/* <input type="text" placeholder='Search....' /> */}
                      </div>
                    {/* <div className="search-icon"><i className="fab fa-typo3" id="icon"></i></div> */}
                </div>
            </div>
        </div>    
     );
}
 
export default Searchbox;