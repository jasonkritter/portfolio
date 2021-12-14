<template>
  <nav>
    <ul>
      <li><router-link to="/">Resume</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/hobbies">Hobbies</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TheNav",
};
</script>
