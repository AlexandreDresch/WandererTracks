import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Pricing from "./pages/pricing";
import NotFound from "./pages/not-found";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
