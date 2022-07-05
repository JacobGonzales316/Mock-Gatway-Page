import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from './NavItems';
import LocationDropDown from './LocationDropDown';
import AboutDropDown from './AboutDropDown';
import MinistriesDropDown from './MinistriesDropDown';
import EventsDropDown from './EventsDropDown';
import "./TestNav.css";


export default function TestNav() {
    const [locationsdropdown, setLocationsDropDown] = useState(false);
    const [aboutdropdown, setAboutDropDown] = useState(false);
    const [ministriesdropdown, setMinistryDropDown] = useState(false);
    const [eventsdropdown, setEventsDropDown] = useState(false);

  return (
      <>
          <nav className='navbar'>
                <div className='logo-img'>
                    <Link to="/">
                      <img src='https://static.wixstatic.com/media/d09b86_7e18dc8076e8463b83f6c90ad63bfe60~mv2.png/v1/fill/w_210,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2018_Gateway_FullLogo_TransBG_White_Oran.png'></img>
                    </Link>
                </div>
              <ul className='nav-items'>
                  {navItems.map(item => {
                    //   Locations
                      if (item.title === "LOCATIONS") {
                          return (
                            <li key={item.id} className={item.className}
                            onMouseEnter={() => setLocationsDropDown(true)}
                            onMouseLeave={() => setLocationsDropDown(false)}
                        >
                            <Link to={item.path}
                            >{item.title}</Link>
                           {locationsdropdown && <LocationDropDown />}
                        </li>
                       )
                          
                    }
                    //   About
                      if (item.title === "ABOUT") {
                          return (
                            <li key={item.id} className={item.className}
                            onMouseEnter={() => setAboutDropDown(true)}
                            onMouseLeave={() => setAboutDropDown(false)}
                        >
                            <Link to={item.path}
                            >{item.title}</Link>
                           {aboutdropdown && <AboutDropDown />}
                        </li>
                        )
                    }
                      
                    //   Ministries
                      if (item.title === "MINISTRIES") {
                          return (
                              <li key={item.id} className={item.className}
                                  onMouseEnter={() => setMinistryDropDown(true)}
                                  onMouseLeave={() => setMinistryDropDown(false)}
                              >
                                  <Link to={item.path}
                                  >{item.title}</Link>
                                  {ministriesdropdown && <MinistriesDropDown />}
                              </li>
                          )
                      }
                    // Events  
                    if (item.title === "EVENTS") {
                        return (
                            <li key={item.id} className={item.className}
                                onMouseEnter={() => setEventsDropDown(true)}
                                onMouseLeave={() => setEventsDropDown(false)}
                            >
                                <Link to={item.path}
                                >{item.title}</Link>
                                {eventsdropdown && <EventsDropDown />}
                            </li>
                        )
                    }
                      
                    return (
                          <li key={item.id} className={item.className}>
                              <Link to={item.path}>{item.title}</Link>
                          </li>
                      )
                  })}
            </ul>
        </nav>
      </>
    )
}
