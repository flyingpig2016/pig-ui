<template>
  <div id="app">
    <!-- <PigButton></PigButton> -->
    <!-- <pig-button>提交</pig-button> -->
    <PigAttach
      :attachFileList="form.identityCardBack"
      :uploadImg="uploadImgHandler"
    />
  </div>
</template>

<script>
  // import HelloWorld from "./components/HelloWorld.vue";
  // import Button from "../packages/mybutton/index";
  import { uploadImg } from "@/api/company/companyManage.js";

  export default {
    name: "App",
    components: {
      // Button,
      // HelloWorld,
    },
    data() {
      return {
        form: {
          identityCardBack: [
            {
              name: "身份证反面",
              url: "http://10.1.249.90:8333/statics/2024/12/15/%E7%BE%8E%E9%A3%9F_3_%E9%9D%92%E6%A4%92%E7%8C%AA%E8%82%9D_20241215225611A154.png",
            },
          ],
        },
      };
    },
    computed: {
      uploadImgHandler() {
        return uploadImg;
      },
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
