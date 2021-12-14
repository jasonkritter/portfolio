<template>
  <div class="hobbies">
    <h2>Motorcycles</h2>
    <p>
      I enjoy riding motorcycles for fun and to commute to Albuquerque. It is a
      hobby I share with my Dad. I currently own two bikes.
    </p>
    <div class="figure-wrapper">
      <figure>
        <img :src="motorcycles.monster.img" :alt="motorcycles.monster.img" />
        <figcaption>{{ motorcycles.monster.caption }}</figcaption>
      </figure>

      <figure>
        <img :src="motorcycles.ds.img" :alt="motorcycles.ds.caption" />
        <figcaption>{{ motorcycles.ds.caption }}</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
import DesertSled from "@/assets/images/motorcycles/desertsled.webp";
import Monster from "@/assets/images/motorcycles/monster.webp";

export default {
  name: "Motorcycles",
  components: {},
  data: function () {
    return {
      motorcycles: {
        monster: {
          caption: "Ducati Monster 1200 S",
          img: Monster,
        },
        ds: {
          caption: "Ducati Scrambler Desert Sled",
          img: DesertSled,
        },
      },
    };
  },
};
</script>
