<template>
  <div v-infinite-scroll="nextGetList" infinite-scroll-disabled="busy"
    infinite-scroll-distance="50">
    <el-button-group>
      <el-button size="small" type="primary" @click="setFilter('id')">
        По дате добавления
        <i :class="[direction ? 'el-icon-sort-down' : 'el-icon-sort-up',
        {hide: sort!='id'}]"></i>
      </el-button>
      <el-button size="small" type="primary" @click="setFilter('score')">
        По оценке
        <i :class="[direction ? 'el-icon-sort-down' : 'el-icon-sort-up',
        {hide: sort!='score'}]"></i>
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
  name: 'Read',
  mixins: [mixin],
  components: {
    BooksList,
  },
  directives: {
    infiniteScroll,
  },
  data() {
    return {
      // сортировка: id, score
      sort: 'id',
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
      this.$router.push({ name: 'finished', hash: `#${this.direction ? '' : '-'}${this.sort}` });
      this.firstGetList();
    },
    firstGetList() {
      this.loadingStart();
      api
        .finished(this.$route.params.id, `${this.direction ? '' : '-'}${this.sort}`)
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
