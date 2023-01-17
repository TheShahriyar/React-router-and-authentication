import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import NotFound from "./components/NotFount/NotFount";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
