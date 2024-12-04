import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SettingView from "../views/SettingView.vue";
import HistoryView from "../views/historyView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/history",
    name: "history",
    component: HistoryView,
  },
  {
    path: "/setting",
    name: "setting",
    component: SettingView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
