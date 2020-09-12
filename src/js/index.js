import Vue from 'vue'
import App from './components/App.vue' 
setTimeout(function(){
    new Vue({
        render: h => h(App)
    }).$mount('#app')
}, 100000)
