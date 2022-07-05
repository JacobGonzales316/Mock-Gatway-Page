import './App.css';
import TestNav from './Components/TestNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoutingPaths from './RoutingPaths';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TestNav />
        <Routes>
          {/* <Route path='/Locations/northwest-campus' element={<NorthwestCampus/>}></Route>
          <Route path="/Locations/bandera-campus" element={<BanderaCampus/>}></Route>
          <Route path='/Locations/boerne-campus' element={<BoerneCampus />}></Route>
          <Route path="/Locations/dt-campus" element={<DTCampus />}></Route>
          <Route path='/Locations/fw-campus' element={<FWCampus />}></Route>
          <Route path='/Locations/gonzales-campus' element={<GonzalesCampus />}></Route>
          <Route path='/Locations/kerrville-campus' element={<KerrvilleCampus />}></Route>
          <Route path="/Locations/medina-campus" element={<MedinaCampus />}></Route>
          <Route path='/Locations/ws-campus' element={<WSCampus />}></Route>
          <Route path='/Events/baptisms' element={<Baptism/>}></Route>           */}
          {RoutingPaths}
        </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
