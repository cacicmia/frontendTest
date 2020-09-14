<template>
  <div class="image-grid__container">
       <div class="image-grid__item image-grid__item--first">
            <img :src="img2.url" :alt="img2.alt">
        </div>
        <div class="image-grid__item image-grid__item--second">
            <img :src="img1.url" :alt="img1.alt">
        </div>
        <div class="image-grid__item image-grid__item--third">
            <img :src="img4.url" :alt="img4.alt">

        </div>
        <div class="image-grid__item image-grid__item--forth">
            <img :src="img3.url" :alt="img3.alt">

        </div>
        

  </div>
</template>

<script>
export default {
props: {
    img1:{
        type: Object,
        default: ()=> ({
            url: './assets/task2-img1.jpg',
            alt: 'img1' 
        }) 
    },
    img2:{
        type: Object,
        default: ()=> ({
            url: './assets/task2-img2.jpg',
            alt: 'img2' 
        }) ,
         
    } ,
    img3:{
        type: Object,
         default: ()=> ({
            url: './assets/task2-img3.jpg',
            alt: 'img3' 
        }) ,
       
    } ,
    img4:{
        type: Object,
        default: ()=> ({
            url: './assets/task2-img4.jpg',
            alt: 'img4' 
    }) ,
    } ,
}
}
</script>

<style>

</style>