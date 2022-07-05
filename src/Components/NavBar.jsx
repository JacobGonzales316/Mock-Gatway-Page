import React from "react";
import { BrowserRouter as Route } from 'react-router-dom'
// locations
import BanderaCampus from "../Locations/bandera-campus"

function NavBar() {
    return (
        <div class="topnav">
        <a href="home page link">
                <img src="https://static.wixstatic.com/media/d09b86_7e18dc8076e8463b83f6c90ad63bfe60~mv2.png/v1/fill/w_262,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2018_Gateway_FullLogo_TransBG_White_Oran.png" />
        </a>
        {/* WATCH */}
        <div class="dropdown">
            <button class="dropbtn">WATCH</button>
        </div>
        {/* LOCATIONS */}
            <div class="dropdown">
                <button class="dropbtn">LOCATIONS 
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                    <a href="#">NORTHWEST SAN ANTONIO</a>
                <Route path='../Locations/bandera-campus.jsx' component={BanderaCampus} />
                <a href="{BanderaCampus}">BANDERA, TX</a>
                <a href="#">BOERNE, TX</a>
                <a href="#">DOWNTOWN SAN ANTONIO</a>
                <a href="#">ESPAÑOL</a>
                <a href="#">FAR WEST SAN ANTONIO</a>
                <a href="#">GONZALES, TX</a>
                <a href="#">KERRVILLE, TX</a>
                <a href="#">MEDINA COUNTY</a>
                <a href="#">WESTSIDE SAN ANTONIO</a>
                <a href="#">GFC ONLINE</a>
            </div>
        </div>
            {/* ABOUT */}
            <div class="dropdown">
                <button class="dropbtn">ABOUT 
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="#">ABOUT</a>
                <a href="#">BELIEFS</a>
                <a href="#">OUR STORY</a>
            </div>
        </div>
        {/* MINISTRIES */}
            <div class="dropdown">
                <button class="dropbtn">MINISTRIES 
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="#">KINGDOM BUILDERS</a>
                <a href="#">PARENT RESOURCES</a>
                <a href="#">ADVENTURE KIDS</a>
                <a href="#">VELOCITY STUDENTS</a>
                <a href="#">BELONG TO A SMALL GROUP</a>
                <a href="#">BECOME A VOLUNTEER</a>
                <a href="https://www.sachialpha.com/" target='_blank'>COLLEGE</a>
                <a href="#">GATEWAY SCHOOL OF MINISTRY</a>
            </div>
        </div>
            <div class="dropdown">
                <button class="dropbtn">EVENTS 
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="#">EASTER AT GFC</a>
                <a href="#">BAPTISMS</a>
                <a href="#">EVENTS</a>
            </div>
        </div>
 
            <div class="dropdown">
                <button class="dropbtn">CONNECT
                <i class="fa fa-caret-down"></i>
            </button>
        </div>
 
            <div class="dropdown">
                <button class="dropbtn">GIVE 
                <i class="fa fa-caret-down"></i>
            </button>
        </div>
 
      </div> 
    )
        
};

export default NavBar;