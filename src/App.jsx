import { Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";

import Home from "./pages/Home";
import Business from "./pages/Business";
import Markets from "./pages/Markets";
import Economy from "./pages/Economy";
import Crypto from "./pages/Crypto";
import Tech from "./pages/Tech";
import Companies from "./pages/Companies";
import World from "./pages/World";
import Videos from "./pages/Videos";

function App() {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />

        <Route path="business" element={<Business />} />

        <Route path="markets" element={<Markets />} />

        <Route path="economy" element={<Economy />} />

        <Route path="crypto" element={<Crypto />} />

        <Route path="tech" element={<Tech />} />

        <Route path="companies" element={<Companies />} />

        <Route path="world" element={<World />} />
        <Route path="videos" element={<Videos />} />
      </Route>
    </Routes>
  );
}

export default App;
