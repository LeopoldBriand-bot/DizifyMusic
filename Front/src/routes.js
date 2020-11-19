import Home from "./pages/home";
import Search from "./pages/search";
import Favorites from "./pages/favorites";
import Playlist from "./pages/playlist";

export default [
  {
    path: "/favorites",
    component: Favorites,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/playlist/:playlistId",
    component: Playlist,
  },
  {
    path: "/home",
    component: Home,
  },
];
