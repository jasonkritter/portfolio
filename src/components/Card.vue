<template>
  <a class="card" :href="card.link" target="_blank">
    <div class="card-image">
      <img :src="card.img" :alt="card.title" />
    </div>
    <div class="card-text">
      <h3>{{ card.title }}</h3>
      <p>
        {{ card.description }}
        <small>({{ card.source }})</small>
      </p>
    </div>
  </a>
</template>

<script>
export default {
  name: "Card",
  components: {},
  props: ["card"],
};
</script>
