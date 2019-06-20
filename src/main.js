//
// entry-point for vue-cli-service build/serve
//
import Vue from 'vue';
import Composer from './views/composer.vue';

// sample layouts with es6 module:
import layouts from '../public/layouts/src/all';
import '../public/layouts/src/all.css';

// sample layouts with commonjs bundle
// need to build with `npm run build-layouts` or else
// import layouts from '../public/layouts/all.json';
// import '../public/layouts/all.css';

Vue.config.productionTip = false;

const el = document.querySelector('#app');

// sample layouts with commonjs bundle:
// FIXME: resolve icons automatically...
// layouts.forEach(layout => {
//   layout.icon = require(`../public/layouts/${layout.id}/icon.svg`);
// });

new Vue({
  el,
  render(createElement) {
    return createElement(Composer, {
      ref: 'composer',
      on: {
        save(html, json) {
          console.log('**save: html=', html, 'json=', json);
          alert('check console log');
        },
      },
    });
  },
  mounted() {
    this.$refs.composer.setLayouts(layouts);
  },
});
/**
 * vue 라이프사이클에서 layout과 data를 구성하기보단 밖에서 별도로 분리하여 설정
 */
// axios.get('/sample.json').then((resources) => {
//   app.$refs.composer.setLayerBlockData(resources.data);
// });

// console.log(layouts); // 실제 layout 도구들...
// console.log(res.data); // layouts들을 이용하여 data와 결합하여 preview에 보여준다

