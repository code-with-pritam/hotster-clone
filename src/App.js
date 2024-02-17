import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Imgslider from "./components/Imgslider/Imgslider";
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          {/* <Route exact path="/" element={userName ? <Home/> : <Login/>} /> */}
          <Route exact path="/details/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
