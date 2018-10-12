<template>
  <div style="padding-top: 15px;padding-bottom: 10px;">
    <div class="w-items-grid-container">
      <div class="w-item" v-for="book in list" :key="book.id">
        <a :href="`${domain}${book.work.url}`" target="_blank">
          <el-card :body-style="{ padding: '0px' }"  shadow="hover">
            <img :src="`${domain}${book.work.cover}`" />
            <div class="bottom">
              <div>{{ book.work.title }}</div>
              <div>{{ book.work.authors_titles }}</div>
              <div><i class="el-icon-star-on"></i> {{ book.work.rating.score }}</div>
            </div>
          </el-card>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BooksList',
  props: {
    list: Array,
  },
  data() {
    return {
      domain: process.env.VUE_APP_DOMAIN_REAL,
    };
  },
};
</script>

<style lang="scss">
  .w-items-grid-container {
    display: block;
    margin-left: -15px;
    margin-right: -15px;
    font-size: 0;
    line-height: 0;
    box-sizing: border-box;

    .w-item {
      display: inline-block;
      vertical-align: top;
      margin-bottom: 30px;
      width: 25%;
      padding-left: 15px;
      padding-right: 15px;
      box-sizing: border-box;

      img {
        width: 100%;
        display: block;
      }

      .bottom {
        margin-top: 13px;
        text-align: center;
      }

      div {
        font-size: 13px;
        line-height: 17px;
      }

      a {
        text-decoration: none;
      }
    }
  }

  @media (max-width: 991px) {
    .w-items-grid-container .w-item {
      width: 33.3%;
    }
  }
  @media (max-width: 767px) {
    .w-items-grid-container .w-item {
      width: 50%;
    }
  }
  @media (max-width: 359px) {
    .w-items-grid-container .w-item {
      width: 100%;
    }
  }
</style>
