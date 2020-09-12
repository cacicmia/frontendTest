<template>
  <section class="hero-slider">
      <VueSlickCarousel :settings="settings" >
              
        <div class="hero-slider__image-container" :key="slide.alt" v-for="slide in slides">
        
            <img :src="slide.url" :alt="slide.alt">
        </div>
          <template #prevArrow="arrowOption">
            <div>
                <div class="icon-prev"></div>
                <div class="slide-count">
                {{ arrowOption.currentSlide +1 }} / {{ arrowOption.slideCount }}
                </div>
            </div>
            </template> 
             <template #nextArrow>
            <div>
                <div class="icon-next"></div>
            </div>
            </template> 
        </VueSlickCarousel>
        <div class="hero-slider__heading-container">
            <MainLogo/>
            <h1 class="hero-slider__heading">Notus Front-end test</h1>
            <p class="hero-slider__description">Task 2 - Slider</p>

        </div>
  </section>
</template>

<script>
import MainLogo from '../../../assets/Notus-logo-main.svg'
import VueSlickCarousel from 'vue-slick-carousel'
export default {
 components: {
    VueSlickCarousel,
    MainLogo
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
        "speed": 500,
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
            url: '/assets/task1_img1.jpg',
            alt: 'img1',
          },
          slide2: {
            url: '/assets/task1_img2.jpg',
            alt: 'img2',
          },
          slide3: {
            url: '/assets/task1_img3.jpg',
            alt: 'img3' ,
          },
         
           
        }) 
    },

  }
}
</script>

<style>

</style>