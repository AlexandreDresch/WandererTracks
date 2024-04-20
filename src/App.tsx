import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Pricing from "./pages/pricing";
import NotFound from "./pages/not-found";
import Header from "./components/header/header";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-screen px-8">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
