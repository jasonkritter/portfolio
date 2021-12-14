import { createRouter, createWebHistory } from "vue-router";
import Resume from "../views/Resume.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Resume,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    children: [
      {
        path: "",
        redirect: "/about/location",
      },
      {
        path: "bu",
        name: "BU",
        component: () => import("../views/BU.vue"),
      },
      {
        path: "family",
        name: "Family",
        component: () => import("../views/Family.vue"),
      },
      {
        path: "job",
        name: "Job",
        component: () => import("../views/Job.vue"),
      },
      {
        path: "location",
        name: "Location",
        component: () => import("../views/Location.vue"),
      },
    ],
  },
  {
    path: "/hobbies",
    name: "Hobbies",
    component: () => import("../views/Hobbies.vue"),
    children: [
      {
        path: "",
        redirect: "/hobbies/motorcycles",
      },
      {
        path: "motorcycles",
        name: "Motorcycles",
        component: () => import("../views/Motorcycles.vue"),
      }
    ],
  },
  {
    path: "/resume",
    name: "Resume",
    component: () => import("../views/Resume.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
