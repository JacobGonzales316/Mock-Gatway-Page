import React, {useState} from 'react'
import { aboutDropdown } from './NavItems';
import { Link } from 'react-router-dom';
import './AboutDropDown.css'

export default function AboutDropDown() {
    const [aboutdropdown, setDropDown] = useState(false);
  return (
    <>
        <ul className={aboutdropdown ? "about-submenu clicked" : "about-submenu"} onClick={() => setDropDown(!aboutdropdown)}>
            {aboutDropdown.map(item => {
                return (
                    <li key={item.id}>
                        <Link to={item.path} className={item.className}onClick={() => setDropDown(false)}>{item.title}</Link>
                    </li>
                )
            })}
        </ul>
    </>
  )
}
