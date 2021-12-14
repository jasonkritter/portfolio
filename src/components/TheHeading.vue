<template>
  <div class="navigation">
    <div class="navigation-wrapper">
      <header>
        <router-link to="/">Jason Kritter</router-link>
      </header>
      <TheNav />
    </div>
  </div>
</template>

<script>
import TheNav from '@/components/TheNav.vue'

export default {
  name: 'TheHeading',
  components: {
    TheNav
  }
}
</script>
