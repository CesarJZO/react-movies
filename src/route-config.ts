import LandingPage from "./LandingPage";

import GenresIndex from "./genres/GenresIndex";
import CreateGenre from "./genres/CreateGenre";
import UpdateGenre from "./genres/UpdateGenre";

import ActorsIndex from "./actors/ActorsIndex";
import CreateActor from "./actors/CreateActor";
import UpdateActor from "./actors/UpdateActor";

import MoviesIndex from "./movies/MoviesIndex";
import CreateMovie from "./movies/CreateMovie";
import UpdateMovie from "./movies/UpdateMovie";

import TheatersIndex from "./theaters/TheatersIndex";
import CreateTheater from "./theaters/CreateTheater";
import UpdateTheater from "./theaters/UpdateTheater";
import RedirectToLanding from "./utils/RedirectToLanding";

const routes = [
  { path: "/genres/create", component: CreateGenre },
  { path: "/genres/update/:id", component: UpdateGenre },
  { path: "/genres", component: GenresIndex },

  { path: "/actors/create", component: CreateActor },
  { path: "/actors/update/:id", component: UpdateActor },
  { path: "/actors", component: ActorsIndex },

  { path: "/movies/create", component: CreateMovie },
  { path: "/movies/update/:id", component: UpdateMovie },
  { path: "/movies", component: MoviesIndex },

  { path: "theaters/create", component: CreateTheater },
  { path: "theaters/update/:id", component: UpdateTheater },
  { path: "theaters", component: TheatersIndex },

  { path: "/", component: LandingPage },
  { path: "*", component: RedirectToLanding }
];

export default routes;
