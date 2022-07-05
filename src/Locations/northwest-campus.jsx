import React from "react";
import InfoBanner from "../Components/InfoBanner";
import InfoTile from "../Components/InfoTile";
import "./LocationStyling.css";

function NorthwestCampus() {
    return <div className="location-page">
          <div class="heading">
        <img src='https://joeris.com/wp-content/uploads/2020/02/DSC_6004-scaled.jpg'></img>
        {/* <div className="heading-message">
          <h1>NORTHWEST <br />
          SAN ANTONIO
          </h1>
        </div> */}
      </div>
      <div class='grid-container'>
        <div>
          <InfoBanner address="10907 W. Loop 1604 N.
  San Antonio, TX 78254" times="9AM  |  10:45AM  |  12:30PM" phoneNumber="210.852.2081" campusPastor="John Van Pay"/>
        </div>
        <div class="InfoTile">
          <InfoTile title="GET CONNECTED" paragraph="New to GFC? We'd love to hear your story and get to know you a little bit better. Fill out a connect card so one of our team members can connect with you this week." imageLocation='https://static.wixstatic.com/media/d09b86_ffe86974b853474c9b1bcb88dcc3191a~mv2.jpg/v1/crop/x_59,y_0,w_1082,h_675/fill/w_380,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/234349551_10159613641350288_554845830572.jpg' />

          <InfoTile title="BELONG TO A SMALL GROUP" paragraph="Small groups are the heartbeat of GFC. It's where we do life together. Check out all the amazing small groups near you and join a group today."
            imageLocation="https://static.wixstatic.com/media/d09b86_f6b1c9c9511c4b02bfc1e5b5fe4e781b~mv2.jpeg/v1/crop/x_0,y_376,w_1200,h_748/fill/w_380,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/240731527_10159642480405288_2477086338512363760_n.jpeg" />
          
          <InfoTile title="BECOME A VOLUNTEER" paragraph="The Bible says that Jesus did not come to be served, but to serve and there are plenty of opportunities to serve our church family by becoming a volunteer."
            imageLocation="https://static.wixstatic.com/media/d09b86_dd2176677dbe4398b570435f058468cb~mv2.jpeg/v1/fill/w_380,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/241341092_10159658237515288_794741618765299024_n.jpeg" />
          
          <InfoTile title="GIVE ONLINE" paragraph="Thank you to those who have been faithful in giving and allowing us to serve our community in creative ways. Set up your recurring gift online." imageLocation="https://static.wixstatic.com/media/d09b86_ec3f72ad89a9475badaf70e8c39a5732~mv2.jpg/v1/fill/w_380,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GivingHero.jpg" />
          </div>
      </div>
    </div>
};

export default NorthwestCampus;