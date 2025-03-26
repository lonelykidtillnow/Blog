import React from "react";
import Head from "./Head";
import Bussiness from "./Bussiness";
import Entertainment from "./Entertainment";
import Sport from "./Sport";
import Technology from "./Technology";
import Food from "./Food";
import Education from "./Education";
import { BrowserRouter,Routes,Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";



function App() {
  const location=useLocation();
  return (
    <div>
      {/* Conditionally render Head if the route is not "/register" or "/login" */}
      {location.pathname !== "/register" && location.pathname !=='/login' && <Head />}
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/bussiness" element={<Bussiness />}></Route>
            <Route path="/entertainment" element={<Entertainment />}></Route>
            <Route path="/sport" element={<Sport />}></Route>
            <Route path="/technology" element={<Technology />}></Route>
            <Route path="/food" element={<Food />} ></Route>
            <Route path="/education" element={<Education />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
  );
}
function AppWrapper(){
  return(
    <BrowserRouter>
          <App />
    </BrowserRouter>
  )
}
export default AppWrapper;


// import React from "react";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import Head from "./Head";
// import Bussiness from "./Bussiness";
// import Entertainment from "./Entertainment";
// import Sport from "./Sport";
// import Technology from "./Technology";
// import Food from "./Food";
// import Education from "./Education";
// import Home from "./Home";
// import Register from "./Register";

// function App() {
//   const location = useLocation();

//   return (
//     <div>
//       {/* Conditionally render Head if the route is not "/register" */}
//       {location.pathname !== "/register" && <Head />}
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/bussiness" element={<Bussiness />} />
//         <Route path="/entertainment" element={<Entertainment />} />
//         <Route path="/sport" element={<Sport />} />
//         <Route path="/technology" element={<Technology />} />
//         <Route path="/food" element={<Food />} />
//         <Route path="/education" element={<Education />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </div>
//   );
// }

// function AppWrapper() {
//   return (
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// }
// export default AppWrapper;
