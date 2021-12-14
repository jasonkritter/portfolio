<template>
  <div>
    <TheHeading />
    <div>
      <main>
        <div class="content-container">
          <router-view />
        </div>
      </main>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeading from "@/components/TheHeading.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeading,
    TheFooter,
  },
};
</script>

<style>
@import "./assets/styles/styles.css";
</style>
