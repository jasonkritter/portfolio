<template>
  <div class="family">
    <h2>Family</h2>
    <p>
      I'm married and I have 3 dogs. My wife, Makala, also works at Sandia
      National Laboratories and is pursuing her masters at Boston University. We
      don't have kids but enjoy spoiling our niece, Everlee.
    </p>
    <section>
      <h3>Dogs</h3>
      <div class="figure-wrapper">
        <figure v-for="(dog, index) in dogs" :key="index">
          <img :src="dog.img" :alt="dog.name" />
          <figcaption>{{ dog.name }}</figcaption>
        </figure>
      </div>
    </section>
    <br>
    <section>
      <h3>Everlee</h3>
      <p>
        My niece, Everlee, is 2.5 years old. She loves animals and sharing
        snacks with dogs.
      </p>
      <div class="figure-wrapper">
        <figure>
          <video controls="controls" :src="cheeto">
            Your browser does not support the HTML5 Video element.
          </video>
          <figcaption>Everlee and Remi sharing cheetos</figcaption>
        </figure>
      </div>
    </section>
  </div>
</template>

<script>
import Cheeto from "@/assets/videos/cheeto.mp4";
import Remi from "@/assets/images/dogs/remi.webp";
import Minnie from "@/assets/images/dogs/minnie.webp";
import Doob from "@/assets/images/dogs/doob.webp";

export default {
  name: "Family",
  components: {},
  data: function () {
    return {
      cheeto: Cheeto,
      dogs: [
        {
          name: "Remi",
          img: Remi,
        },
        {
          name: "Doob",
          img: Doob,
        },
        {
          name: "Minnie",
          img: Minnie,
        },
      ],
    };
  },
};
</script>
