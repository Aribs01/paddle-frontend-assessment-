import { React} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./components/Topbar";

import ComingSoon from "./pages/ComingSoon";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import Github from "./pages/Github";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar />
        <Routes>
          <Route path='/' exact element={<ComingSoon />} />
          <Route path='/aboutus' exact element={<AboutUs />} />
          <Route path='/github' exact element={<Github />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
