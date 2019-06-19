<template>
  <div class="mupload">
    <h2>压缩上传案例</h2>
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
import canvasResize from "canvas-resize";

export default {
  name: "mupload",
  data() {
    return {
      imgList: []
    };
  },
  methods: {
    /**
     * 将以base64的图片url数据转换为Blob
     * @param urlData
     *            用url方式表示的base64图片数据
     * @param type { type: "image/png" }
     */
    convertBase64UrlToBlob(urlData, type) {
      var bytes = window.atob(urlData.split(",")[1]); //去掉url的头，并转换为byte

      //处理异常,将ascii码小于0的转换为大于0
      var ab = new ArrayBuffer(bytes.length);
      var ia = new Uint8Array(ab);
      for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
      }
      return new Blob([ab], type);
    },
    upload() {
      this.$refs.fileInput.click();
    },
    fileSelect(e) {
      let convert = this.convertBase64UrlToBlob;
      let typeStr = e.target.files[0].type;
      canvasResize(e.target.files[0], {
        crop: false,
        quality: 0.9,
        rotate: 0,
        callback: baseStr => {
          console.log(baseStr.length);
          let formdata = new FormData();
          formdata.append("imgF", convert(baseStr, { type: typeStr }));
          axios({
            url: "http://n.hamkd.com/api/upload",
            data: formdata,
            method: "post",
            headers: {
              "Content-Type": "multipart/form-data "
            }
          })
            .then(res => {
              this.imgList.push({ url: "http://n.hamkd.com" + res.data.img });
            })
            .catch(() => {
              alert("上传失败！");
            });
        }
      });
    }
  }
};
</script>

<style scoped>
.btn {
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
