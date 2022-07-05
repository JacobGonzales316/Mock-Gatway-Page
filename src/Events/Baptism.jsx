import React from 'react';
import "./Baptism.css";
import ServiceTimesTile from './ServiceTimesTile';

export default function Baptism() {
  return (
      <div>
          <div className='heading'>
            <img src="https://www.ppic.org/wp-content/uploads/water_option2.jpg" alt="" />
          </div>
          <div className='baptism-description-grid'>
            <div className='baptism-description'>
                <h1>WHAT IS BAPTISM?</h1>
                <p>For a believer in Christ, Water Baptism is a part of their salvation experience. Jesus said in Mark 16:16 that "Whoever believes and is baptized will be saved,..." Simply put, Water Baptism is an outward expression of an inward change and transformation in your life.</p>
                <h3> REGISTER FOR BAPTISM AT ANY OF OUR 6 PHYSICAL LOCATIONS</h3>
            </div>
            <div className='baptism-img'>
                <img src='https://static.wixstatic.com/media/48b5f7_db20fbd48bba43f49c648abcc9626c19~mv2.jpg/v1/crop/x_0,y_524,w_3648,h_3645/fill/w_356,h_356,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_6012.jpg'></img>
                </div>
          </div>
          <br />
          <br />
          <h1 className='service-times-heading'>SERVICE TIMES</h1>
          <div className='service-times-grid'>
              <ServiceTimesTile location="NORTHWEST S.A." times="9AM | 10:45AM | 12:30PM" />
              <ServiceTimesTile location="BANDERA, TX" times="9AM | 10:45AM" />
              <ServiceTimesTile location="DOWNTOWN S.A." times="SUNDAY: 10:45AM" />
              <ServiceTimesTile location="español (NW)"
                  times="SUNDAY: 3PM" />
              <ServiceTimesTile location="KERRVILLE, TX" times="9AM | 10:45AM" />
              <ServiceTimesTile location="MEDINA COUNTY" times="SUNDAY:10:45AM" />
          </div>
    </div>
  )
}
