/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

import Vue from "vue";
import App from "../vue/App.vue";
import router from "../vue/router";
// import vuetify from './plugins/vuetify'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

const app = new Vue({
  el: "#app",
  router,
  render: h => h(App),
  // components: { App },
  // template: "<App/>"
});

export default app;
