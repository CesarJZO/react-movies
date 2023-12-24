import LandingPage from "./LandingPage";
import GenresIndex from "./genres/GenresIndex";
import CreateGenre from "./genres/CreateGenre";
import UpdateGenre from "./genres/UpdateGenre";

const routes = [
  {
    path: "/",
    component: LandingPage,
  },
  {
    path: "/genres",
    component: GenresIndex,
  },
  {
    path: "/genres/create",
    component: CreateGenre,
  },
  {
    path: "/genres/update",
    component: UpdateGenre,
  },
];

export default routes;
