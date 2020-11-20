import Home from "./pages/home";
import Search from "./pages/search";
import Favorites from "./pages/favorites";
import Playlist from "./pages/playlist";
import Radio from "./pages/radio";

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
    path: "/radio",
    component: Radio,
  },
  {
    path: "/home",
    component: Home,
  },
];
