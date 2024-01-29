import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import News from "./pages/news/News";
import Plublishs from "./pages/plublishs/Plublishs";
import Subscribe from "./pages/subscribe/Subscribe";
import { useState } from "react";
import Toggle from "./components/nav/Toggle";
import useLocalStorage from "use-local-storage";
import NavBar from "./components/nav/NavBar";
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon-01.png";
import Details from "./components/selected/Details";

function App() {
  const preference = window.matchMedia("(prefers-color-scheme:dark)").matches;
  const [isDark, setDark] = useLocalStorage("isDark", preference);

  // const [isDark, setDark] = useState(false);
  return (
    <>
      <div className="App" data-theme={isDark ? "dark" : "light"}>
        <Toggle
          ischecked={isDark}
          handelchange={() => setDark(!isDark)}
          name={isDark ? "dark" : "light"}
          mode={<img src={isDark ? sun : moon} alt="Logo" />}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Subscribe" element={<Subscribe />} />
          <Route path="/News" element={<News />} />

          <Route path="/Plublishs" element={<Plublishs />} />
          <Route path="book/:bookID" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
