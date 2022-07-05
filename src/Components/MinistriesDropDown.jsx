import React, { useState } from 'react';
import { ministriesDropdown } from './NavItems';
import { Link } from 'react-router-dom';
import "./MinistriesDropDown.css";

export default function MinistriesDropDown() {
    const [ministriesdropdown, setMinistryDropDown] = useState(false);
  return (
    <>
        <ul className={ministriesdropdown ? "ministries-submenu clicked" : "ministries-submenu"} onClick={() => setMinistryDropDown(!ministriesdropdown)}>
            {ministriesDropdown.map(item => {
                return (
                    <li key={item.id}>
                        <Link to={item.path} className={item.className}onClick={() => setMinistryDropDown(false)}>{item.title}</Link>
                    </li>
                )
            })}
        </ul>
    </>

    )
}
