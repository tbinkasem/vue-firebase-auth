import * as Vue from 'vue'
import App from './App.vue'
import VueRouter from './router'
import firebase from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: "AIzaSyBYrHj7a1otzx6p5n6aepzLHFJGBdGVg8Q",
    authDomain: "volunteer00-3ccd8.firebaseapp.com",
    databaseURL: "https://volunteer00-3ccd8.firebaseio.com",
    projectId: "volunteer00-3ccd8",
    storageBucket: "volunteer00-3ccd8.appspot.com",
    messagingSenderId: "700617290009",
    appId: "1:700617290009:web:76d17d5052e790989b9588",
    measurementId: "G-Z9P5PDXMY3"
}
firebase.initializeApp(firebaseConfig);

new Vue({
  VueRouter,
  render: h => h(App)
}).$mount('#app')