<template>
  <div class="search">
    <div class="page-info" v-loading="loading">
      <div>
        <el-upload
          action=""
          :before-upload="beforeAvatarUpload"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :on-change="handleChange"
          :auto-upload="false"
          list-type="picture-card"
          :disabled="inputDisabled"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PigAttach",
    props: {
      attachFileList: {
        type: Array,
        default: () => {
          return [];
        },
      },
      disabled: { type: Boolean, default: false },
      uploadImg: {
        type: Function,
        default: () => {},
      },
    },
    inject: {
      elForm: {
        default: "",
      },
      elFormItem: {
        default: "",
      },
    },
    data() {
      return {
        dialogVisible: false,
        dialogImageUrl: "",
        loading: false,
        btnLoading: false,
        fileList: [],
      };
    },
    computed: {
      inputDisabled() {
        let curDisabled = this.disabled || (this.elForm || {}).disabled;
        console.log("this.elForm=", this.elForm, "disabled", curDisabled);

        return curDisabled;
      },
    },
    watch: {
      attachFileList: {
        handler(val) {
          console.log("attachFileList", val);
          let curList = val || [];
          this.fileList = curList.map((item) => {
            let itemStr = item.url || "";
            let name = itemStr.split("/").pop();
            return {
              name,
              url: item.url,
            };
          });
        },
        deep: true,
      },
    },
    created() {},
    mounted() {
      console.log("attach挂载了");
      if (this.attachFileList.length) {
        this.fileList = this.attachFileList.map((item) => {
          let itemStr = item.url || "";
          let name = itemStr.split("/").pop();
          return {
            name,
            url: item.url,
          };
        });
      }
    },
    methods: {
      handleChange(file, fileList) {
        this.fileList = fileList;
        this.submitUpload();
      },
      beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 50;
        if (!isLt2M) {
          this.$message.error("上传头像图片大小不能超过 50MB!");
        }
        return isLt2M;
      },
      getFile() {
        let files = this.fileList.map((item) => {
          return item.url;
        });
        return files;
      },
      //点击保存的时候 $refs
      async submitUpload() {
        let curFile = this.fileList[this.fileList.length - 1];
        let fileName = curFile.name || "";
        let fd = new FormData();
        fd.append("fileName", fileName);
        fd.append("businessLicense", curFile.raw);
        console.log(curFile);

        try {
          this.btnLoading = true;
          let res = await this.uploadImg(fd);
          this.btnLoading = false;
          console.log(res);
          this.$message.success("上传成功!");
          this.fileList.forEach((item, index) => {
            if (index === this.fileList.length - 1) {
              item.url = res.imgUrl;
            }
          });
        } catch (error) {
          this.btnLoading = false;
          this.$message.error("上传失败!");
          this.fileList.splice(-1, 1);
        }
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
        // 删除this.fileList列表中字段name为file.name的元素
        this.fileList = this.fileList.filter((item) => {
          return item.name !== file.name;
        });
      },
      async handlePreview(file) {
        this.dialogVisible = true;
        this.dialogImageUrl = file?.url || "";
        return;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .search {
    .headerCls {
      display: flex;
    }

    .page-info {
      display: flex;
      justify-content: center;
      flex-direction: column;
      .upload-demo {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .upload-content {
        display: flex;
        .el-upload__tip {
          margin-left: 16px;
        }
      }
      ::v-deep .el-upload-list__item-name {
        text-overflow: ellipsis;
        max-width: 460px;
        overflow: hidden;
      }

      .attachments-cls {
        width: 94%;
        height: 40px;
        margin-left: 24px;
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 16px;
        margin-bottom: 8px;
      }

      .attachments-cls:hover {
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
      }
    }
  }
</style>
