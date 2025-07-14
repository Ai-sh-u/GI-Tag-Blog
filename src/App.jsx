import { BrowserRouter, Routes, Route } from "react-router-dom"
import GIProductList from "./pages/GIProductList"
import GIProductPost from "./pages/GIProductPost"
import GIProductCard from "./components/GIProductCard"
import "./App.css";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GIProductList />} />
        <Route path="/product/:id" element={<GIProductPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
