<template>
    <section class="block block--dark">
      <div class="block__content">
          <h2 class="block__heading">Task 4</h2>
          <div class="slider">
            <VueSlickCarousel :settings="settings" >
              
              <div class="slider__image-container" :key="slide.alt" v-for="slide in slides"   
              >
                <!-- :class="slide.class" -->
                <img :src="slide.url" :alt="slide.alt">
                </div>
                  
              
              </VueSlickCarousel>
            </div>
      </div>

  </section>

</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  components: {
    VueSlickCarousel
  },
  props: {
    settings: {
      type: Object,
      default: ()=> ({
        dots: true,
        arrows: true,
        dotsClass: "slick-dots custom-dot-class",
        // "edgeFriction": 0.35,
        // "infinite": false,
        // "speed": 500,
        slidesToShow: 3,
        // adaptiveHeight: true,
        // slidesToScroll: 3,
        //  responsive: [
        //         {
        //             breakpoint: 768,
        //             settings: {
        //                 prevArrow: null,
        //                 nextArrow: null
        //             }
        //         }
        //     ]
      })
    },
    slides:{
        type: Object,
        default: ()=> ({
          slide1: {
            url: '/assets/task3_img1.jpg',
            alt: 'img1'
          },
          slide2: {
            url: '/assets/task3_img2.jpg',
            alt: 'img2'
          },
          slide3: {
            url: '/assets/task3_img3.jpg',
            alt: 'img3'
          },
          slide4: {
            url: '/assets/task3_img4.jpg',
            alt: 'img4'
          }
           
        }) 
    },
    

  }
}
</script>

<style>

</style>