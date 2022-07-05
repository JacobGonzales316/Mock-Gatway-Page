import React, { useState } from 'react';
import { locationsDropdown } from './NavItems';
import { Link } from 'react-router-dom';
import './LocationDropDown.css';

export default function LocationDropDown() {
    const [dropdown, setDropDown] = useState(false);
  return (
    <>
        <ul className={dropdown ? "location-submenu clicked" : "location-submenu"} onClick={() => setDropDown(!dropdown)}>
            {locationsDropdown.map(item => {
                return (
                    <li key={item.id}>
                        <Link to={item.path} className={item.cName}onClick={() => setDropDown(false)}>{item.title}</Link>
                    </li>
                )
            })}
        </ul>
    </>
  )
}
