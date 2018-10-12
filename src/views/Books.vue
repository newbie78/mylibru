<template>
  <div v-infinite-scroll="nextGetList" infinite-scroll-disabled="busy"
    infinite-scroll-distance="50">
    <el-button-group>
      <el-button size="small" type="primary" @click="setFilter('created')">
        По дате добавления
        <i :class="[direction ? 'el-icon-sort-down' : 'el-icon-sort-up',
        {hide: sort!='created'}]"></i>
      </el-button>
      <el-button size="small" type="primary" @click="setFilter('work__default_edition__title')">
        По названию
        <i :class="[direction ? 'el-icon-sort-down' : 'el-icon-sort-up',
        {hide: sort!='work__default_edition__title'}]"></i>
      </el-button>
      <el-button size="small" type="primary" @click="setFilter('work__rating_score')">
        По общему рейтингу
        <i :class="[direction ? 'el-icon-sort-down' : 'el-icon-sort-up',
        {hide: sort!='work__rating_score'}]"></i>
      </el-button>
    </el-button-group>
    <BooksList :list=listOfBook />
  </div>
</template>

<script>
import infiniteScroll from 'vue-infinite-scroll';
import BooksList from '@/components/BooksList.vue';
import mixin from '@/mixin';
import * as api from '@/api';

export default {
  name: 'Books',
  mixins: [mixin],
  components: {
    BooksList,
  },
  directives: {
    infiniteScroll,
  },
  data() {
    return {
      // сортировка: created, work__default_edition__title, work__rating_score
      sort: 'created',
      // направление сортировки
      direction: false,
    };
  },
  methods: {
    setFilter(sort) {
      if (this.sort === sort) {
        this.direction = !this.direction;
      }
      this.sort = sort;
      // сбрасываем список книг
      this.listOfBook = [];
      // сортировку в url
      this.$router.push({ name: 'books', hash: `#${this.direction ? '' : '-'}${this.sort}` });
      this.firstGetList();
    },
    firstGetList() {
      this.loadingStart();
      api
        .book(this.$route.params.id, `${this.direction ? '' : '-'}${this.sort}`)
        .then(this.catchResponse)
        .catch(this.catchErrors);
    },
  },
};
</script>

<style>
  .hide {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }
</style>
