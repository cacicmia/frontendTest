<template>
    <section class="block block--dark">
      <div class="block__content" id="task-4">
          <h2 class="block__heading">Task 4</h2>
          <div class="slider">
            <VueSlickCarousel :slidesToShow="settings.slidesToShow" >
              
              <div class="slider__image-container" :key="slide.alt" v-for="slide in slides"   
              >
                <!-- :class="slide.class" -->
                <img :src="slide.url" :alt="slide.alt">
                </div>
                <template #prevArrow>
                <div>
                    <div class="icon-prev"></div>
                </div>
            </template> 
            <template #nextArrow>
                <div>
                    <div class="icon-next"></div>
                </div>
            </template>     
              
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
        slidesToShow: 3,

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