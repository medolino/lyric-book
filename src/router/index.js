import Vue from 'vue';
import Router from 'vue-router';
import Songs from '@/components/Songs';
import Song from '@/components/Song';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Songs',
      component: Songs,
    },
    {
      path: '/song/:id',
      name: 'Song',
      component: Song,
      props: true,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
