import LandingPage from "./LandingPage";
import GenresIndex from "./genres/GenresIndex";

const routes = [
    {
        path: '/',
        component: LandingPage,
    },
    {
        path: '/genres',
        component: GenresIndex,
    },
];

export default routes;
