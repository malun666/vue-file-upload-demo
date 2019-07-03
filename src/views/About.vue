<template>
  <div class="about">
    <input type="button" class="btn" value="上传文件" @click="upload" />
    <input
      type="file"
      accept="image/*"
      name="imgF"
      ref="fileInput"
      @change="fileSelect"
    />
    <hr />
    <ul>
      <li v-for="item in imgList" :key="item.url">
        <img :src="item.url" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "about",
  data() {
    return {
      imgList: []
    };
  },
  created() {
    console.log(this.$route.query);
  },
  methods: {
    upload() {
      this.$refs.fileInput.click();
    },
    fileSelect(e) {
      let formdata = new FormData();
      formdata.append("imgF", e.target.files[0]);
      axios({
        url: "http://localhost:8888/api/upload",
        data: formdata,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data "
        }
      })
        .then(res => {
          this.imgList.push({
            url: "http://localhost:8888" + res.data.img
          });
        })
        .catch(() => {
          alert("上传失败！");
        });
    }
  }
};
</script>

<style scoped>
.about .btn {
  background-color: #ff7745;
  color: #fff;
  height: 40px;
  width: 100px;
  text-align: center;
  font-size: 20px;
  line-height: 40px;
  border-radius: 5px;
}
</style>
