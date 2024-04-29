import React from "react";
import { BrowserRouter as  Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import MoreInfo from "./Components/MoreInfo";
function App() {
  return(
    <div>
          
         <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/more-info' element={<MoreInfo/>}/>
         </Routes> 
    </div>
  );
}
export default App;
 