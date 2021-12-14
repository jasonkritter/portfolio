<template>
  <div class="job">
    <h2>Job</h2>
    <p>
      I work at Sandia National Laboratories (SNL) as a Software Engineer. I have been working at SNL for nearly 5 years. I develop web
      applications using Angular, C#, .NET, and SQL Server.
    </p>
    <div class="cards">
      <Card
        v-for="(card, index) in cards"
        v-bind:key="index"
        v-bind:card="card"
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Angular from "@/assets/images/languages/angular.webp";
import CSharp from "@/assets/images/languages/csharp.webp";
import NET from "@/assets/images/languages/net.webp";
import SQL from "@/assets/images/languages/sql.webp";

export default {
  name: "Job",
  components: { Card },
  data: function () {
    return {
      cards: [
        {
          title: "Angular",
          link: "https://angular.io/",
          img: Angular,
          description:
            "Angular is a platform for building mobile and desktop web applications.",
          source: "Angular, 2021",
        },
        {
          title: "C#",
          link: "https://dotnet.microsoft.com/en-us/learn/csharp",
          img: CSharp,
          description:
            "C# is a object-oriented programming language that enables developers to build a variety of secure and robust application that run on the .NET.",
          source: "Microsoft, 2021",
        },
        {
          title: ".NET",
          link: "https://dotnet.microsoft.com/en-us/",
          img: NET,
          description:
            ".NET is a free, cross-platform, open source developer platform for building many different types of applications.",
          source: "Microsoft, 2021",
        },
        {
          title: "SQL Server",
          link: "https://docs.microsoft.com/en-us/sql/",
          img: SQL,
          description:
            "SQL Server is a relational database management system, or RDBMS, developed and marketed by Microsoft.",
          source: "Microsoft, 2021",
        },
      ],
    };
  },
};
</script>
