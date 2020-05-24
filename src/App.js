import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Menu from "./Menu/Menu";

const App = () => {
  // const [menuItem, setMenuItem] = useState("");

  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
