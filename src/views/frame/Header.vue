<template>
  <el-menu :default-active="this.$route.path" router class="el-menu-header" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
    <el-menu-item index="/">处理中心</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-submenu index="2-1">
        <template slot="title">选项1</template>
        <el-menu-item>选项1</el-menu-item>
        <el-menu-item>选项2</el-menu-item>
        <el-menu-item>选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">消息中心</el-menu-item>
    <el-menu-item index="4">订单管理</el-menu-item>
    <div class="right-menu">
      <el-submenu>
        <template slot="title">name</template>
        <el-menu-item>选项1</el-menu-item>
        <el-menu-item>选项2</el-menu-item>
        <el-menu-item index="login">Log out</el-menu-item>
      </el-submenu>
    </div>
  </el-menu>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
li a {
  text-decoration: none;
}

.right-menu {
  color: #fff;
  float: right;
  line-height: 60px;
}
</style>
