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
     
        <div className={mobile ? "searchbox-mobile" : "searchbox-web"}>
          <div className="search-window">
            
              <div className="search-icon">
                <i className="fas fa-search fa-lg" id="icon"></i>
              </div>

              <input className="search-area" type="text"  />
            
          </div>
        </div>
      
    );
}
 
export default Searchbox;