import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllDataAPI from "./components/AllDataAPI";
import MyKitchen from "./components/MyKitchen";
import About from "./components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<AllDataAPI />} />
          <Route exact path="/getAPIData" element={<AllDataAPI />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/MyKitchen" element={<MyKitchen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
