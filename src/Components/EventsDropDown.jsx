import React, { useState } from 'react';
import { eventsDropdown } from './NavItems';
import { Link } from 'react-router-dom';
import "./EventsDropDown.css";


export default function EventsDropDown() {
    const [eventsdropdown, setEventsDropDown] = useState(false);
  return (
    <>
        <ul className={eventsdropdown ? "events-submenu clicked" : "events-submenu"} onClick={() => setEventsDropDown(!eventsdropdown)}>
            {eventsDropdown.map(item => {
                return (
                    <li key={item.id}>
                        <Link to={item.path} className={item.className}onClick={() => setEventsDropDown(false)}>{item.title}</Link>
                    </li>
                )
            })}
        </ul>
    </>
    )
}
