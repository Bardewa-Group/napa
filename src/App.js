import Nav from "./components/Nav";
import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./About";
import News from "./components/News";
import Contact from "./components/Contact";
import Last from "./components/Last";
import President from "./components/President";
import Info from "./components/Info";
import Error from "./components/Error";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Menu />
      <Routes>
        <Route path="/napa" element={<Home />}></Route>
        <Route path="/napa/info" element={<Info />}></Route>
        <Route path="/napa/news" element={<News />}></Route>
        <Route path="/napa/president" element={<President />}></Route>
        <Route path="/napa/about" element={<About />}></Route>
        <Route path="/napa/contact" element={<Contact />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Last />
    </>
  );
}

export default App;
