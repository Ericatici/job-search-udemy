import { createRouter, createWebHashHistory } from "vue-router";

//Foram colocadas dentro de variaveis para serem carregadas só qndo o user clicar.
//quando estão fora das variaveis carregam mesmo sem serem utilizadas.

const HomeView = () => import("@/views/HomeView.vue");
const JobResultsView = () =>
  import(/*webpackChunkName: "jobs" */ "@/views/JobResultsView.vue");
const JobView = () =>
  import(/*webpackChunkName: "jobs" */ "@/views/JobView.vue");

const TeamsView = () => import("@/views/TeamsView.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobResultsView,
  },
  {
    path: "/jobs/results/:id",
    name: "JobListing",
    component: JobView,
  },
  //teams esta sendo renderizado em /components/navigation/MainNav
  //em menuItems text:"Teams"
  {
    path: "/teams",
    name: "Teams",
    component: TeamsView,
  },
];
//para a pág subir automaticamente quando troca de página, quando aperta o botão previous ou next.
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
