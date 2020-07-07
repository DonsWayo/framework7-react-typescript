import { HomePage } from "./pages/HomeScreen";
import { SettingsPage } from "./pages/SettingsPage";

export const routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },
];
