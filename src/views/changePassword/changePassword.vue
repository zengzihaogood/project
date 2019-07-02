<template>
  <div class="page-change">
    <h1>修改密码</h1>
    <el-form :model="passwordForm" :rules="rules" ref="passwordForm">
      <el-form-item label prop="oldPassword">
        <el-input placeholder="请输入原密码" v-model.trim="passwordForm.oldPassword"></el-input>
      </el-form-item>
      <el-form-item label prop="newPassword">
        <el-input placeholder="请输入新密码" v-model.trim="passwordForm.newPassword"></el-input>
      </el-form-item>   
      <el-form-item label prop="confirmPassword">
        <el-input placeholder="请再次输入新密码" v-model.trim="passwordForm.confirmPassword"></el-input>
      </el-form-item>
      <el-form-item class="change-button">
        <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    // 确认密码校验
    var validatePass = (rule, value, callback) => {
      if (this.passwordForm.newPassword !== value) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        console.log("一致");
        callback();
      }
    };
    return {
      passwordForm: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
      },
      rules: {
        oldPassword: [
          { required: true, message: "请输入原密码", trigger: "blur" }
        ],
        newPassword: [
          { required: true, message: "请输入新密码", trigger: "blur" }
        ],
        confirmPassword: [
          { required: true, message: "请再次输入新密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" }
        ]
      }
    };
  }
};
</script>
<style lang="less" scoped>
.page-change {
  width: 400px;
  margin: 100px auto;
  /deep/ .el-form-item__content{
    margin-left:0px !important;
  }
  h1 {
    margin-bottom: 30px;
  }
  .change-button {
    margin-left: 35%;
    button {
      width: 100px;
    }
  }
}
</style>

