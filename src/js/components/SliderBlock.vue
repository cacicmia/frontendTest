<template>
    <section class="block block--dark">
      <div class="block__content" id="task-4">
          <h2 class="block__heading">Task 4</h2>
          <div class="slider">
            <VueSlickCarousel :slidesToShow="settings.slidesToShow" :responsive="settings.responsive" >
              
              <div class="slider__image-container" :key="slide.alt" v-for="slide in slides"   
              >
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

export default {
  components: {
    VueSlickCarousel
  },
  props: {
    settings: {
      type: Object,
      default: ()=> ({
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 1,
            }
          }
        ]
      })
    },
    slides:{
        type: Object,
        default: ()=> ({
          slide1: {
            url: './assets/task3-img1.jpg',
            alt: 'img1'
          },
          slide2: {
            url: './assets/task3-img2.jpg',
            alt: 'img2'
          },
          slide3: {
            url: './assets/task3-img3.jpg',
            alt: 'img3'
          },
          slide4: {
            url: './assets/task3-img4.jpg',
            alt: 'img4'
          }
           
        }) 
    },
    

  }
}
</script>

<style>

</style>