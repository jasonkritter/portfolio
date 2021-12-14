<template>
  <div class="resume">
    <div class="resume-wrapper">
      <div class="left-panel">
        <div class="profile-wrapper">
          <h2>Jason Kritter</h2>
          <span class="job-title">Software Engineer</span>
        </div>
        <div class="contact-wrapper">
          <ul>
            <li>
              <span class="icon">
                <font-awesome-icon icon="envelope" />
              </span>
              <span class="text">jekritt@gmail.com</span>
            </li>
            <li>
              <span class="icon">
                <font-awesome-icon icon="map-marker" />
              </span>
              <span class="text"
                ><router-link to="/about">Santa Fe, NM</router-link></span
              >
            </li>
          </ul>
        </div>
        <div class="tech-stack-wrapper">
          <h3>Current Tech Stack</h3>
          <div class="cube-container">
            <div class="cube cube1">
              <div class="front"><img :src="sql" /></div>
              <div class="left"></div>
              <div class="right"></div>
              <div class="top"></div>
            </div>
            <div class="cube cube2">
              <div class="front"><img :src="net" /></div>
              <div class="left"></div>
              <div class="right"></div>
              <div class="top"></div>
            </div>
            <div class="cube cube3">
              <div class="front"><img :src="csharp" /></div>
              <div class="left"></div>
              <div class="right"></div>
              <div class="top"></div>
            </div>
            <div class="cube cube4">
              <div class="front"><img :src="angular" /></div>
              <div class="left"></div>
              <div class="right"></div>
              <div class="top"></div>
            </div>
          </div>
        </div>
        <div class="additional-skills">
          <h3>Skills</h3>
          <div class="carousel">
            <div class="track">
              <div
                class="slide"
                v-for="(slide, index) in langSlides"
                :key="index"
              >
                <img :src="slide.img" :alt="slide.name" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-panel">
        <section>
          <h2>Experience</h2>
          <div class="box">
            <div class="text">
              <h4>
                <router-link to="/about/job"
                  >Software Systems Engineer</router-link
                >
              </h4>
              <h5>Sandia National Laboratories, Albuquerque</h5>
              <ul v-show="summaries[0]">
                <li>
                  Designed a content management system (CMS) that enables users
                  of varying technical skill to manage web content, and provides
                  a platform to host internal web applications
                </li>
              </ul>
              <button @click="readSummary(0)">
                <span v-if="summaries[0]"
                  >Close <font-awesome-icon icon="chevron-up"
                /></span>
                <span v-else
                  >Expand <font-awesome-icon icon="chevron-down"
                /></span>
              </button>
            </div>
            <div class="dates">
              <span class="end">Present</span>
              <span class="start">May '19</span>
            </div>
          </div>

          <div class="box">
            <div class="text">
              <h4>Computer Software Support Technologist</h4>
              <h5>Sandia National Laboratories, Albuquerque</h5>
              <ul v-show="summaries[1]">
                <li>
                  Designed a content management system (CMS) that enables users
                  of varying technical skill to manage web content, and provides
                  a platform to host internal web applications
                </li>
                <li>
                  Created “Facilities Assurance System Tools” (FAST). FAST
                  improves SNL employee workflows by displaying critical job
                  information through a responsive web interface
                </li>
                <li>
                  Developed several Progressive Web Apps (PWAs) to track safety
                  information for construction and maintenance personnel in the
                  field. The mobile-friendly PWAs allow users to submit critical
                  information about their job and their environment on their
                  Sandia-issued iOS devices. The apps work online or offline.
                </li>
                <li>
                  Utilized strict development, quality, and production server
                  environments to create, stringently test, and release updates
                  to websites and web applications
                </li>
                <li>
                  Met with leadership and stakeholders to brainstorm ideas for
                  new web applications that would increase employee
                  productivity, proficiency, and accountability
                </li>
                <li>
                  Developed a design system for websites and web applications
                </li>
              </ul>
              <button @click="readSummary(1)">
                <span v-if="summaries[1]"
                  >Close <font-awesome-icon icon="chevron-up"
                /></span>
                <span v-else
                  >Expand <font-awesome-icon icon="chevron-down"
                /></span>
              </button>
            </div>
            <div class="dates">
              <span class="end">May '19</span>
              <span class="start">Mar '17</span>
            </div>
          </div>

          <div class="box">
            <div class="text">
              <h4>Website Consultant</h4>
              <h5>National Radio Astronomy Observatory, Socorro</h5>
              <ul v-show="summaries[2]">
                <li>
                  Developed, implemented, and maintained a website built on
                  Plone, a Python-based CMS, for documenting the features and
                  functions of the Common Astronomy Software Applications
                  package (CASA)
                </li>
                <li>
                  Disseminated information from existing documents and organized
                  it into the new website
                </li>
                <li>
                  Developed tools that parsed external documents into web
                  content
                </li>
                <li>
                  Wrote a detailed and interactive tutorial on how to navigate
                  and write documentation on the new website
                </li>
              </ul>
              <button @click="readSummary(2)">
                <span v-if="summaries[2]"
                  >Close <font-awesome-icon icon="chevron-up"
                /></span>
                <span v-else
                  >Expand <font-awesome-icon icon="chevron-down"
                /></span>
              </button>
            </div>
            <div class="dates">
              <span class="end">Jan '17</span>
              <span class="start">Nov '15</span>
            </div>
          </div>

          <div class="box">
            <div class="text">
              <h4>Web Developer</h4>
              <h5>Friends Group of El Camino Real Historic Trail, Socorro</h5>
              <ul v-show="summaries[3]">
                <li>Redesigned website</li>
                <li>
                  Collaborated with stakeholders to populate website with new
                  and existing content
                </li>
                <li>
                  Provided user-interface overhaul and corresponding graphic
                  design and theme
                </li>
              </ul>
              <button @click="readSummary(3)">
                <span v-if="summaries[3]"
                  >Close <font-awesome-icon icon="chevron-up"
                /></span>
                <span v-else
                  >Expand <font-awesome-icon icon="chevron-down"
                /></span>
              </button>
            </div>
            <div class="dates">
              <span class="end">Jan '16</span>
              <span class="start">Aug '15</span>
            </div>
          </div>

          <div class="box">
            <div class="text">
              <h4>Website Coordinator</h4>
              <h5>Socorro County Chamber of Commerce, Socorro</h5>
              <ul v-show="summaries[4]">
                <li>Managed website</li>
                <li>
                  Worked with Chamber members to determine site content needs,
                  populating site with updated and existing information
                </li>
                <li>
                  Diagnosed and fixed issues with website consistency and
                  functionality, collaborating with Canadian-based Chamber Team
                </li>
                <li>
                  Assisted in advertising upcoming events by creating banners
                  and populating calendar with key dates and information
                </li>
              </ul>
              <button @click="readSummary(4)">
                <span v-if="summaries[4]"
                  >Close <font-awesome-icon icon="chevron-up"
                /></span>
                <span v-else
                  >Expand <font-awesome-icon icon="chevron-down"
                /></span>
              </button>
            </div>
            <div class="dates">
              <span class="start">Jan '16</span>
              <span class="end">Feb '15</span>
            </div>
          </div>
        </section>
        <section>
          <h2>Education</h2>
          <div class="box">
            <div class="text">
              <h4>
                <router-link to="/about/bu"
                  >Master of Science in Computer Information
                  Systems</router-link
                >
              </h4>
              <h5>Boston University, Boston</h5>
              <ul v-show="summaries[5]">
                <li>Concentration in Web Application Development</li>
              </ul>
              <button @click="readSummary(5)">
                <span v-if="summaries[5]"
                  >Close <font-awesome-icon icon="chevron-up"
                /></span>
                <span v-else
                  >Expand <font-awesome-icon icon="chevron-down"
                /></span>
              </button>
            </div>
            <div class="dates">
              <span class="end">May '22</span>
              <span class="start">Mar '20</span>
            </div>
          </div>
          <div class="box">
            <div class="text">
              <h4>Bachelor of Science in Technical Communication</h4>
              <h5>New Mexico Institute of Mining and Technology, Socorro</h5>
              <ul v-show="summaries[6]">
                <li>Depth in Computer Science</li>
                <li>Thesis: ‘Web Design and the Aging Population’</li>
              </ul>
              <button @click="readSummary(6)">
                <span v-if="summaries[6]"
                  >Close <font-awesome-icon icon="chevron-up"
                /></span>
                <span v-else
                  >Expand <font-awesome-icon icon="chevron-down"
                /></span>
              </button>
            </div>
            <div class="dates">
              <span class="end">May '16</span>
              <span class="start">Aug '12</span>
            </div>
          </div>
        </section>
        <section class="skills">
          <h2>Skills</h2>
          <div class="skills-wrapper">
            <span
              class="slide"
              v-for="(slide, index) in langSlides"
              :key="index"
            >
              {{ slide.name
              }}<span v-if="index + 1 !== langSlides.length">, </span>
            </span>
          </div>
        </section>
        <section>
          <h2>Hobbies</h2>
          <div class="hobbies">
            <div class="hobby">
              <router-link to="/hobbies/motorcycles"
                ><font-awesome-icon icon="motorcycle" /><span
                  >Motorcycles</span
                ></router-link
              >
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Angular from "@/assets/images/languages/angular.webp";
import SQLServer from "@/assets/images/languages/sql.webp";
import NETFramework from "@/assets/images/languages/net.webp";
import CSharp from "@/assets/images/languages/csharp.webp";
import Less from "@/assets/images/languages/less.webp";
import Git from "@/assets/images/languages/git.webp";
import C from "@/assets/images/languages/c.webp";
import CPlusPlus from "@/assets/images/languages/cplusplus.webp";
import Java from "@/assets/images/languages/java.webp";
import JavaScript from "@/assets/images/languages/js.webp";
import MongoDB from "@/assets/images/languages/mongodb.webp";
import MySQL from "@/assets/images/languages/mysql.webp";
import NodeJS from "@/assets/images/languages/nodejs.webp";
import PHP from "@/assets/images/languages/php.webp";
import Python from "@/assets/images/languages/python.webp";
import React from "@/assets/images/languages/react.webp";
import Sass from "@/assets/images/languages/sass.webp";
import TypeScript from "@/assets/images/languages/typescript.webp";
import Vue from "@/assets/images/languages/vue.webp";

export default {
  name: "Resume",
  components: {},
  data: () => {
    return {
      angular: Angular,
      sql: SQLServer,
      net: NETFramework,
      csharp: CSharp,
      summaries: [false, false, false, false, false, false, false],
      langSlides: [
        {
          name: "Angular",
          img: Angular,
        },
        {
          name: "C",
          img: C,
        },
        {
          name: "C#",
          img: CSharp,
        },
        {
          name: "C++",
          img: CPlusPlus,
        },
        {
          name: "Git",
          img: Git,
        },
        {
          name: "Java",
          img: Java,
        },
        {
          name: "JavaScript",
          img: JavaScript,
        },
        {
          name: "LESS",
          img: Less,
        },
        {
          name: "MongoDB",
          img: MongoDB,
        },
        {
          name: "MySQL",
          img: MySQL,
        },
        {
          name: ".NET",
          img: NETFramework,
        },
        {
          name: "Node.js",
          img: NodeJS,
        },
        {
          name: "PHP",
          img: PHP,
        },
        {
          name: "Python",
          img: Python,
        },
        {
          name: "React",
          img: React,
        },
        {
          name: "Sass",
          img: Sass,
        },
        {
          name: "SQL Server",
          img: SQLServer,
        },
        {
          name: "TypeScript",
          img: TypeScript,
        },
        {
          name: "Vue.js",
          img: Vue,
        },
      ],
    };
  },
  methods: {
    readSummary: function (number) {
      this.summaries[number] = !this.summaries[number];
    },
  },
};
</script>
