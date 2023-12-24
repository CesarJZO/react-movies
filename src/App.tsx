import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menu from "./utils/Menu";
import GenresIndex from "./genres/GenresIndex";
import LandingPage from "./LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />

        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/genres" element={<GenresIndex />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
