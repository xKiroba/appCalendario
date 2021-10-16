import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueTextareaAutosize from 'vue-textarea-autosize'
Vue.use(VueTextareaAutosize);

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDiVgM4hwycb85UtidwboEORsm7TPpoV0c",
  authDomain: "vue-calendario-kiroba.firebaseapp.com",
  projectId: "vue-calendario-kiroba",
  storageBucket: "vue-calendario-kiroba.appspot.com",
  messagingSenderId: "301045281179",
  appId: "1:301045281179:web:1b5b404fc82b855ac5713e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db= firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
