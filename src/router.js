import Vue from 'vue';
import Router from 'vue-router';
import Books from './views/Books.vue';
import Read from './views/Read.vue';
import Finished from './views/Finished.vue';
import Code404 from './views/Code404.vue';
import Reader from './views/Reader.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', // для корневого пути
      redirect: '/reader/1/books', // редиректим сразу на пользователя с id=1
    },
    {
      path: '/reader/:id',
      component: Reader,
      children: [
        {
          path: 'books',
          name: 'books',
          component: Books,
          meta: {
            title: 'КНИГИ',
          },
        },
        {
          path: 'read',
          name: 'read',
          component: Read,
          meta: {
            title: 'ХОЧЕТ ПРОЧИТАТЬ',
          },
        },
        {
          path: 'finished',
          name: 'finished',
          component: Finished,
          meta: {
            title: 'ПРОЧИТАННЫЕ КНИГИ',
          },
        },
      ],
    },
    // все неизвестные пути уходят на страницу 404
    {
      path: '/404',
      name: '404',
      component: Code404,
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});
