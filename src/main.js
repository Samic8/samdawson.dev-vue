// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import LinkUnderline from '~/components/LinkUnderline.vue';
import Sidebar from '~/components/Sidebar.vue';
import MainContent from '~/components/MainContent.vue';
import '~/assets/utility.css';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('LinkUnderline', LinkUnderline)
  Vue.component('MainContent', MainContent)
  Vue.component('Sidebar', Sidebar)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Futura'
  })
}

