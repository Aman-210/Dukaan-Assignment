import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";


function App() {
  return (
  <>
  <BrowserRouter basename="/dashboard">
  <Home/>
  <Routes>
    <Route/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;