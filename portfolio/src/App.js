import "./sass/style.scss";
import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
