import React from "react";
import { Route } from "react-router-dom";
// Locations
import NorthwestCampus from './Locations/northwest-campus';
import BanderaCampus from './Locations/bandera-campus';
import BoerneCampus from './Locations/boerne-campus';
import DTCampus from './Locations/dt-campus';
import FWCampus from './Locations/fw-campus';
import GonzalesCampus from './Locations/gonzales-campus';
import KerrvilleCampus from './Locations/kerrville-campus';
import MedinaCampus from './Locations/medina-campus';
import WSCampus from './Locations/ws-campus';

// Nav Bar
import Connect from "./Pages/connect";
import Events from "./Pages/events";
import Give from "./Pages/give";
import Home from "./Pages/home";
import Locations from "./Pages/locations";
import Ministries from "./Pages/ministries";
import Watch from "./Pages/watch";
import About from "./Pages/about";

// Events
import Baptism from './Events/Baptism';
import Easter from "./Events/Easter";

const RoutingPaths = [
    <Route path='/Locations/northwest-campus' element={<NorthwestCampus/>}></Route>,
    <Route path="/Locations/bandera-campus" element={<BanderaCampus/>}></Route>,
    <Route path='/Locations/boerne-campus' element={<BoerneCampus />}></Route>,
    <Route path="/Locations/dt-campus" element={<DTCampus />}></Route>,
    <Route path='/Locations/fw-campus' element={<FWCampus />}></Route>,
    <Route path='/Locations/gonzales-campus' element={<GonzalesCampus />}></Route>,
    <Route path='/Locations/kerrville-campus' element={<KerrvilleCampus />}></Route>,
    <Route path="/Locations/medina-campus" element={<MedinaCampus />}></Route>,
    <Route path='/Locations/ws-campus' element={<WSCampus />}></Route>,
    <Route path='/Events/baptisms' element={<Baptism />}></Route>,
    <Route path='/Events/easter' element={<Easter/>}></Route>,
    <Route path="/" element={ <Home/> }></Route>,
    <Route path="/watch" element={ <Watch/> }></Route>,
    <Route path="/locations" element={ <Locations/> }></Route>,
    <Route path="/about" element={ <About/> }></Route>,
    <Route path="/ministries" element={ <Ministries/> }></Route>,
    <Route path="/events" element={<Events />}></Route>,
    <Route path="/connect" element={ <Connect/> }></Route>,
    <Route path="/give" element={<Give />}></Route>
];

export default RoutingPaths;