import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Demo from "./Demo";

const App = () => {
  return (
    <div className="p-28 pt-48 font-mono">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="demo" element={<Demo />} />
      </Routes>
    </div>
  );
};

export default App;
