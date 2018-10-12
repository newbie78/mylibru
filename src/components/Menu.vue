<template>
  <div>
    <el-menu :default-active="current" mode="horizontal" :router="true">
      <el-menu-item index="books" :route="{name:'books'}">КНИГИ</el-menu-item>
      <el-menu-item index="read" :route="{name:'read'}">ХОЧЕТ ПРОЧИТАТЬ</el-menu-item>
      <el-menu-item index="finished" :route="{name:'finished'}">ПРОЧИТАННЫЕ КНИГИ</el-menu-item>
    </el-menu>
    <h1>{{ $route.meta.title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      current: 'books',
    };
  },
  created() {
    this.current = this.$route.name;
  },
};
</script>
