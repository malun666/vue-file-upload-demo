<template>
  <div class="home">
    AICODER官网： <a href="https://www.aicoder.com">https://www.aicoder.com</a>
    <hr />
    <div>
      文件上传案例：
      <router-link to="/about">跳转到文件上传案例页面</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      userName: ""
    };
  },
  mounted() {},
  methods: {}
};
</script>
