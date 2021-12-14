<template>
  <div class="location">
    <h2>Location</h2>
    <p>
      I live in Santa Fe, New Mexico. I've lived in New Mexico for almost my
      entire life. It is a beautiful state that is often forgotten about by the
      rest of the country. We are known for chile, sunsets,
      <i>Breaking Bad</i>, and being 50th in the nation for education (our crime
      rate is also not great).
    </p>
    <ImageSlider v-bind:slides="slides" />
    <!--<p>
      Photos from
      <a href="https://www.newmexico.org/" class="link" target="_blank"
        >NewMexico.org</a
      >
    </p>-->
  </div>
</template>

<script>
import ImageSlider from "@/components/ImageSlider.vue";
import Balloons from "@/assets/images/nm/balloons.webp";
import Shiprock from "@/assets/images/nm/shiprock.webp";
import RedOrGreen from "@/assets/images/nm/redorgreen.webp";
import WhiteSands from "@/assets/images/nm/whitesands.webp";
import LosPollos from "@/assets/images/nm/lospollos.webp";

export default {
  name: "Location",
  components: {
    ImageSlider,
  },
  data: function () {
    return {
      slides: [
        {
          caption: "Albuquerque International Balloon Fiesta",
          img: Balloons,
        },
        {
          caption: "Shiprock",
          img: Shiprock,
        },
        {
          caption: "Red and Green Chile",
          img: RedOrGreen,
        },
        {
          caption: "White Sands",
          img: WhiteSands,
        },
        {
          caption: "Los Pollos Hermanos (from Breaking Bad)",
          img: LosPollos,
        },
      ],
    };
  },
};
</script>
