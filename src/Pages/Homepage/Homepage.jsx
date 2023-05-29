
import React from "react";

import './homepage.css'
function increasehandler(){

}
function decreasehandler(){
    
}
function Homepage(){
    return(
        <div className="main-ctn">
            <h2 className="heading">0</h2>
                
            <div className="btn-ctn">
                <button className="increase" onClick={increasehandler}>Increase</button>
                <button className="decrease" onClick={decreasehandler}>Decrease</button>
                
            </div>

        </div>
    )
}

export default Homepage