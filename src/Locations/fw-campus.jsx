import React from 'react'
import InfoTile from '../Components/InfoTile'
import InfoBanner from '../Components/InfoBanner'

export default function FWCampus() {
    return (
        <div>
            <div class="heading">
            <img src='https://149357311.v2.pressablecdn.com/wp-content/uploads/2019/12/Hemisfair-SFS-058-101919-1442x618.jpg'></img>
            </div>
            <br />
            <br />
            <div class='grid-container'>
                <div>
                    <InfoBanner address="Harlan High School
14350 Old FM 471 W
San Antonio, TX 78253
(Enter from Tally Rd.)"
                        times="9:30AM"
                        phoneNumber="210.852.2081 (Central Office)"
                        campusPastor="Matthew Robertson" />
                </div>
                <div class="InfoTile">
                    <InfoTile title="GET CONNECTED"
                        paragraph="New to GFC? We'd love to hear your story and get to know you a little bit better. Fill out a connect card so one of our team members can connect with you this week."
                        imageLocation='https://static.wixstatic.com/media/d09b86_07bed8de04404fc397c8ba7220842d3f~mv2.jpg/v1/crop/x_366,y_286,w_2011,h_1253/fill/w_265,h_165,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Brannon%20Family.jpg' />

                    <InfoTile title="BELONG TO A SMALL GROUP"
                        paragraph="Small groups are the heartbeat of GFC. It's where we do life together. Check out all the amazing small groups near you and join a group today."
                        imageLocation="https://static.wixstatic.com/media/d09b86_f6b1c9c9511c4b02bfc1e5b5fe4e781b~mv2.jpeg/v1/crop/x_0,y_376,w_1200,h_748/fill/w_380,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/240731527_10159642480405288_2477086338512363760_n.jpeg" />

                    <InfoTile title="BECOME A VOLUNTEER"
                        paragraph="The Bible says that Jesus did not come to be served, but to serve and there are plenty of opportunities to serve our church family by becoming a volunteer."
                        imageLocation="https://static.wixstatic.com/media/d09b86_dd2176677dbe4398b570435f058468cb~mv2.jpeg/v1/fill/w_380,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/241341092_10159658237515288_794741618765299024_n.jpeg" />

                    <InfoTile title="GIVE ONLINE"
                        paragraph="Thank you to those who have been faithful in giving and allowing us to serve our community in creative ways. Set up your recurring gift online."
                        imageLocation="https://static.wixstatic.com/media/d09b86_ec3f72ad89a9475badaf70e8c39a5732~mv2.jpg/v1/fill/w_380,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GivingHero.jpg" />
                </div>
            </div>
        </div>
    )
};