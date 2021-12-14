<template>
  <div class="hobbies">
    <div class="page-header">
      <h1>Hobbies</h1>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hobbies",
  components: {
  },
  data: function () {
    return {
      navItems: [
        {
          name: "Motorcycles",
          routerLink: "/hobbies/motorcycles",
        },
        {
          name: "Video Games",
          routerLink: "/hobbies/video-games",
        },
      ],
    };
  },
};
</script>
