import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menu from "./utils/Menu";
import routes from "./route-config";

import "./App.module.css";
import configureValidations from "./validations";

configureValidations();

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />

        <main>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
