/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import * as VueGoogleMaps from 'vue2-google-maps'
import { Cropper } from 'vue-advanced-cropper'
import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC99mctPKPEwen7DJ4h-6YEj8iSaRFvOx4',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  


 
  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,
 
  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})

import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)

import VueBarcode from '@chenfengyuan/vue-barcode';

Vue.component(VueBarcode.name, VueBarcode);


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('maps-component', require('./components/Maps').default);
Vue.component('autocomplete-component', require('./components/Autocomplete').default);
Vue.component('direccion-render-component', require('./components/DireccionRender').default);
Vue.component('prueba-imagen', require('./components/PruebaImage').default);
Vue.component('imagen', require('./components/Imagen').default);
Vue.component('data-table', require('./components/DataTable').default);
Vue.component('drag-drop', require('./components/DragAndDrop.vue').default);
Vue.component('slot-com', require('./components/Slot').default);
Vue.component('pruebas-com', require('./components/PruebasComponentes').default);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
