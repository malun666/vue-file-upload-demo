<template>
  <div class="home">
    AICODER官网： <a href="https://www.aicoder.com">https://www.aicoder.com</a>
    <hr />
    <div v-html="msg"></div>
    <div>{{ msg }}</div>
    <div>{{ getLowerCaseMsg }}</div>
    <input type="text" v-model="msg" />
    <div class="demo" :class="{ act: true }">{{ msg | lowerCase }}</div>
    <hr />
    <div>
      文件上传案例：
      <router-link to="/about">跳转到文件上传案例页面</router-link>
    </div>
    <div>
      文件上传案例：
      <router-link to="/mupload">跳转到移动端压缩文件上传案例页面</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import api, { default as df } from "../service/api.js";
export default {
  name: "home",
  data: function() {
    return {
      msg: "ss"
    };
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  computed: {
    getLowerCaseMsg() {
      return this.msg.toLowerCase();
    }
  },
  // async created() {
  //   let userList = await api.getUser();
  //   console.log(userList);
  //   let roleList = await api.getRole();
  //   console.log(roleList);
  // },
  created() {
    // 两个请求都成功之后，提示成功。有一个败了，都败了。
    Promise.all([api.getUser(), api.getRole()])
      .then(res => {
        console.log("ok");
        console.log(res);
      })
      .catch(e => {
        console.log("baile");
      });
    this.$store.commit("addPropStr", Date.now());
  },
  mounted() {},
  methods: {}
};
</script>
