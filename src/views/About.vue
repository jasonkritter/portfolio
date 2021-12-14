<template>
  <div class="about">
    <div class="page-header">
      <h1>About</h1>
      <PageNav v-bind:navItems="navItems" />
    </div>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import PageNav from "@/components/PageNav.vue";

export default {
  name: "About",
  components: {
    PageNav,
  },
  data: function () {
    return {
      navItems: [
        {
          name: "Location",
          routerLink: "/about/location",
        },
        {
          name: "Job",
          routerLink: "/about/job",
        },
        {
          name: "family",
          routerLink: "/about/family",
        },
        {
          name: "BU",
          routerLink: "/about/bu",
        },
      ],
    };
  },
};
</script>
