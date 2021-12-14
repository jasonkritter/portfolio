<template>
  <div class="bu">
    <section>
      <h2>CS601 term project</h2>
      <p>
        This website is built in Vue.js. All stylesheets are written in
        Sass. I used Visual Studio Code for development. I'm also using CodeKit,
        a Mac app that optimizes images and compiles my .sass files into a
        single styles.css file.
      </p>
      <h3>Languages</h3>
      <div class="cards">
        <Card
          v-for="(card, index) in langCards"
          v-bind:key="index"
          v-bind:card="card"
        />
      </div>
      <br />
      <h3>Tools</h3>
      <div class="cards">
        <Card
          v-for="(card, index) in toolCards"
          v-bind:key="index"
          v-bind:card="card"
        />
      </div>
    </section>
    <br />
    <section>
      <h2>Boston University</h2>
      <p>
        I'm pursuing a Master of Science in Computer Information Systems
        concentration in Web Application Development at Boston University. I
        will graduate in May 2022 after I complete 3 more classes. I have
        enjoyed my time at Boston University.
      </p>
      <table>
        <thead>
          <tr>
            <th colspan="4">My Boston University Journey</th>
          </tr>
          <tr>
            <th>Class</th>
            <th>Title</th>
            <th>Semester</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CS625</td>
            <td>Business Data Communication and Networks</td>
            <td>Spring 2 - 2020</td>
            <td>Complete</td>
          </tr>
          <tr>
            <td>CS669</td>
            <td>Database Design and Implementation for Business</td>
            <td>Summer 1 - 2020</td>
            <td>Complete</td>
          </tr>
          <tr>
            <td>CS546</td>
            <td>Introduction to Probability and Statistics</td>
            <td>Summer 2 - 2020</td>
            <td>Complete</td>
          </tr>
          <tr>
            <td>CS520</td>
            <td>Information Structures with Java</td>
            <td>Fall 2 - 2020</td>
            <td>Complete</td>
          </tr>
          <tr>
            <td>CS682</td>
            <td>Information Systems Analysis and Design</td>
            <td>Spring 1 - 2021</td>
            <td>Complete</td>
          </tr>
          <tr>
            <td>CS782</td>
            <td>IT Strategy and Management</td>
            <td>Spring 2 - 2021</td>
            <td>Complete</td>
          </tr>
          <tr>
            <td>CS683</td>
            <td>Mobile Application Development with Android</td>
            <td>Summer 2 - 2021</td>
            <td>Complete</td>
          </tr>
          <tr>
            <td>CS601</td>
            <td>Web Application Development</td>
            <td>Fall 2 - 2021</td>
            <td>In Progress</td>
          </tr>
          <tr>
            <td>CS602</td>
            <td>Server-Side Web Development</td>
            <td>Spring 1 - 2022</td>
            <td>Not Started</td>
          </tr>
          <tr>
            <td>CS701</td>
            <td>Rich Internet Application Development</td>
            <td>Spring 2 - 2022</td>
            <td>Not Started</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import CodeKit from "@/assets/images/tools/codekit.webp";
import VisualStudio from "@/assets/images/tools/vs_code.webp";
import sass from "@/assets/images/languages/sass.webp";
import vue from "@/assets/images/languages/vue.webp";

export default {
  name: "BU",
  components: {
    Card,
  },
  data: function () {
    return {
      langCards: [
        {
          title: "Sass",
          link: "https://sass-lang.com",
          img: sass,
          description:
            "Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more.",
          source: "Sass, 2021",
        },
        {
          title: "Vue.js",
          link: "https://sass-lang.com",
          img: vue,
          description:
            "Vue is a progressive framework for building user interfaces.",
          source: "Vue, 2021",
        },
      ],
      toolCards: [
        {
          title: "CodeKit",
          link: "https://codekitapp.com",
          img: CodeKit,
          description:
            "CodeKit is a Mac app that makes it easy to use modern web development tools like npm, Babel, Sass, JavaScript bundling, image optimization, and ESLint.",
          source: "CodeKit, 2021",
        },
        {
          title: "Visual Studio",
          link: "https://code.visualstudio.com",
          img: VisualStudio,
          description:
            "Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. ",
          source: "Visual Studio Code, 2021",
        },
      ],
    };
  },
};
</script>
