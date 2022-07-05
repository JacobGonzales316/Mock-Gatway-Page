import React from "react";
import InfoBanner from "../Components/InfoBanner"
import InfoTile from "../Components/InfoTile"

function BanderaCampus() {
    return <div>
    <div class="heading">
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Downtown_Bandera_1_Wiki_%281_of_1%29.jpg/1200px-Downtown_Bandera_1_Wiki_%281_of_1%29.jpg'></img>
      </div>
      <br />
      <br />
      <div class='grid-container'>
        <div>
          <InfoBanner address="151 Purple Sage Bandera, TX 78003" times="9AM  |  10:45AM  " phoneNumber="830.460.3366" campusPastor="Nick Manfred"/>
        </div>
        <div class="InfoTile">
          <InfoTile title="BELONG TO A SMALL GROUP" paragraph="Small groups are the heartbeat of GFC. It's where we do life together. Check out all the amazing small groups near you and join a group today."
            imageLocation="https://static.wixstatic.com/media/d09b86_a045c2e25bb844568dfb234bdcc49348~mv2.jpg/v1/crop/x_0,y_238,w_1200,h_725/fill/w_380,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/148407748_10159206217800288_520436406342.jpg" />
                    
          <InfoTile title="GIVE ONLINE" paragraph="Thank you to those who have been faithful in giving and allowing us to serve our community in creative ways. Set up your recurring gift online." imageLocation="https://static.wixstatic.com/media/d09b86_ec3f72ad89a9475badaf70e8c39a5732~mv2.jpg/v1/fill/w_380,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GivingHero.jpg" />
          </div>
        </div>
        </div>
};


export default BanderaCampus;
