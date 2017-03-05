var Vue = require('vue');
var VueResource = require('vue-resource');
var app = require('./app.vue');

Vue.use(VueResource);

var vm = new Vue({
  el: 'body',
  components: {
    'app': app
  }
});