// App.js
import "./App.css";
import "./GlobalStyle.css";
import { NavBar } from "./components";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <div className="sm:h-[3vh]"></div>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
