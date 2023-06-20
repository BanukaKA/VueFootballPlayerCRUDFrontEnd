<template>
    <div>
      <h1>Welcome to the Banu's Football Archive</h1>
      <div class="carousel">
        <div class="carousel-item" v-for="(image, index) in carouselImages" :key="index" :class="{ active: index === activeIndex }">
          <img :src="image.src" :alt="image.alt">
        </div>
      </div>
  
      <p class="centered-paragraph">I Banuka Kumara Ambegoda created this Vue JS web application. This is consuming data from a REST Api of my own creation hosted in Azure
        and developed using .NET Core. It is also performing CRUD operations on the 2 major Tables, Teams and Players. I started doing the application in an NPM environment with the use of the Vue cli.
        But as I started facing multiple minor issues I switched and built a much lightweight CDN based application of the exact same thing. The github repository will contain both the cdn based project and the NPM based project both completed and functioning.
        Thank You!</p>
    </div>
  </template>
  
  <script>

//Author : Banuka Kumara Ambegoda
//Date: 2023/06/19

  //This is the Home Page

  export default {
    name: "homeComponent",
    data() {
      return {
        carouselImages: [
          { src: 'https://mshanken.imgix.net/cao/bolt/2017-08/nfl-history-1600.jpg?w=900&q=72', alt: 'Image 1' },
          { src: 'https://th-thumbnailer.cdn-si-edu.com/4VgnnEunDPLjeXAoGOTT4ed4NOM=/1072x720/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/1960-AFL-Championship-Game-631.jpg', alt: 'Image 2' },
          { src: 'https://www.americanfootballinternational.com/wp-content/uploads/USA-Football-2020-Strange-moments.png', alt: 'Image 3' },
        ],
        activeIndex: 0,
        intervalId: null,
      };
    },
    mounted() {
      this.startCarousel();
    },
    methods: {
      startCarousel() {
        this.intervalId = setInterval(() => {
          this.activeIndex = (this.activeIndex + 1) % this.carouselImages.length;
        }, 1000); // Transition every 3 seconds (adjust as needed)
      },
      stopCarousel() {
        clearInterval(this.intervalId);
      },
    },
    beforeUnmount() {
      this.stopCarousel();
    },
  };
  </script>
  
  <style>
  
  .carousel {
    display: flex;
    justify-content: space-between;
    width: 700px;
    margin: 0 auto;
    margin-top: 3%;
    margin-bottom: 3%;
  }
  
  .carousel-item {
    flex: 0 0 auto;
  }
  
  .carousel-item img {
    width: 100%;
    height: 400px;
    border-radius: 20px;
  }
  </style>