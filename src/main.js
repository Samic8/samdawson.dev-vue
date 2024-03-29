// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import MainContent from '~/layouts/MainContent.vue';
import Sidebar from '~/layouts/Sidebar.vue';
import '~/assets/utility.scss';
import '~/assets/global.scss';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('MainContent', MainContent)
  Vue.component('Sidebar', Sidebar)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Muli:400,600,700'
  })
}

