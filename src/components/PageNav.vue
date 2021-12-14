<template>
  <nav class="page-navigation">
    <ul>
      <li v-for="(navItem, index) in navItems" v-bind:key="index">
        <router-link :to="navItem.routerLink">{{ navItem.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "PageNav",
  props: ["navItems"],
};
</script>
