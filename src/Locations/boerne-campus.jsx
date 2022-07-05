import React from 'react'
import InfoBanner from '../Components/InfoBanner';


export default function BoerneCampus() {
    return (
    <div>
        <div class="heading">
            <img src='https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_667,q_75,w_1000/v1/clients/austin/Hill_Country_Mile_Courtesy_of_Visit_Boerne_5__86b47fcd-62c0-405d-a838-14aa37e4e0f4.jpg'></img>
        </div>
        <br />
        <br />
        <div class='grid-container'>
            <div>
                <InfoBanner address="Boerne, TX"
                    times="Starting April 17, 2022"
                    phoneNumber="210.852.2081 (Central Office)"
                    campusPastor="Mike &#38; Rachel Lockwood" />
            </div>
        </div>
    </div>
    )
    
}
