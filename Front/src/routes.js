import Home from './pages/home';
import Search from './pages/search';
import Favorites from './pages/favorites';

export default [
    {
        path: "/favorites",
        component: Favorites,
    },
    {
        path: "/search",
        component: Search
    },
    {
        path: "/home",
        component: Home,
    },

  ];