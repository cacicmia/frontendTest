<template>

    <div v-show="!loading">
      <Header/>
      <Content/>
      <Footer/>
    </div>
</template>

<script>
import Header from './Header.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'
import EventBus from '../event-bus';

export default {
    components: {
      Header,
      Footer, 
      Content,
      
    },
    data() {
      return {
         loading: true
      }
    },
    mounted() {
  
        EventBus.$on('init', this.show)
       

    },
    methods: {
      show() {
        this.loading=false
        document.querySelector('.loading').setAttribute('style', 'display: none')
      }
    }
}
</script>

<style>

</style>