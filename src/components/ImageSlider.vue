<template>
  <div class="slide-container">
    <div class="slide-wrapper">
      <div class="slide">
        <img :src="slide.img" :alt="slide.caption" />
      </div>
      <div class="controls-wrapper">
        <button class="prev" v-on:click="prevSlide()">
          <font-awesome-icon icon="chevron-left" />
        </button>
        <button class="next" v-on:click="nextSlide()">
          <font-awesome-icon icon="chevron-right" />
        </button>
      </div>
    </div>
    <div class="caption-wrapper">
      <p>{{ slide.caption }}</p>
    </div>
    <div class="thumbnail-wrapper">
      <div
        class="thumbnail"
        v-for="(slide, index) in slides"
        :key="index"
        v-bind:class="slideIndex == index ? 'active' : ''"
      >
        <img
          :src="slide.img"
          :alt="slide.caption"
          @mouseover="setSlide(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageSlider",
  components: {},
  props: ["slides"],
  data: function () {
    return {
      slideIndex: 1,
      slide: {
        caption: null,
        img: null,
      },
    };
  },
  methods: {
    prevSlide: function () {
      let newIndex = this.slideIndex - 1;
      if (newIndex < 0) {
        newIndex = this.slides.length - 1;
      }
      this.setSlide(newIndex);
    },
    nextSlide: function () {
      let newIndex = this.slideIndex + 1;
      if (newIndex > this.slides.length - 1) {
        newIndex = 0;
      }
      this.setSlide(newIndex);
    },
    setSlide: function (index) {
      this.slideIndex = index;
      this.slide = this.slides[this.slideIndex];
    },
  },
  mounted: function () {
    this.setSlide(0);
  },
};
</script>
