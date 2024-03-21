import "./App.css";
import HomePage from "./pages/HomePage";
import DevPage from "./pages/devPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="test" element={<DevPage />} />
    </Routes>
  );
}

export default App;
