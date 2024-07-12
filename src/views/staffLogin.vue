<template>
  <div class="s-login staff">
    <div class="s-title">智莱汽修汽配业务管理平台</div>
    <div class="main-content">
      <div class="form-box">
        <div class="form">
          <div class="title">欢迎登录汽车平台</div>
          <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
            <el-form-item prop="username" class="username-box">
              <el-input v-model.trim="loginForm.username" type="text" auto-complete="off" @focus="isUsername = true"
                @blur="isUsername = false" placeholder="请输入账号">
              </el-input>
              <!-- <img class="icon" src="@/assets/image/account.png" alt="" /> -->
            </el-form-item>
            <el-form-item prop="password" class="password-box">
              <el-input v-model.trim="loginForm.password" :type="eyeSwitch ? 'text' : 'password'" auto-complete="off"
                placeholder="请输入密码" @focus="isPassword = true" @blur="isPassword = false" show-password
                @keyup.enter.native="handleLogin">
              </el-input>
              <!-- <img class="icon" src="@/assets/image/password.png" alt="" /> -->
              <!-- <div :class="['eye-icon', eyeSwitch ? 'eye-open' : 'eye-close']" @click="eyeSwitch = !eyeSwitch"></div> -->
            </el-form-item>
            <div class="agreement">
              <el-checkbox v-model="loginForm.rememberMe"></el-checkbox>
              <span>勾选即代表您同意并接受<span class="text-theme-color">服务协议</span>与<span class="text-theme-color">隐私政策</span></span>
            </div>
            <div class="btn-box">
              <el-button class="btn" @click.native.prevent="handleLogin" :disabled="loginBtnDisabled" round>
                {{ !loading ? "立即登录" : "登 录 中..." }}
              </el-button>
            </div>
          </el-form>
          <div class="wj-password">忘记密码</div>
        </div>
      </div>
    </div>
    <!-- <div class="record-number-link">
      <span>版权所有 ICP证：</span>
      <a style="color: #0052D9" href="https://beian.miit.gov.cn" target="_blank"
        >粤ICP备2021079527号</a
      >
    </div> -->
  </div>
</template>

<script>
import Cookies from "js-cookie";
import { encrypt, decrypt } from "@/utils/jsencrypt";

export default {
  name: "Login",
  data() {
    return {
      isUsername: false,
      isPassword: false,
      isValidCode: false,
      codeUrl: "",
      cookiePassword: "",
      loginForm: {
        username: "",
        password: "",
        rememberMe: false,
        code: "",
        uuid: "",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "用户名不能为空" },
        ],
        password: [
          { required: true, trigger: "blur", message: "密码不能为空" },
        ],
        code: [
          { required: true, trigger: "change", message: "验证码不能为空" },
        ],
      },
      loading: false,
      redirect: undefined,
      eyeSwitch: false,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  created() {
  },
  computed: {
    loginBtnDisabled() {
      return !(this.loginForm.username && this.loginForm.password && this.loginForm.rememberMe)
    }
  },
  methods: {
    handleLogin() {
      this.$router.push({ path: "/adminManage/adminList" });

    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "@/assets/styles/variables.scss";

@mixin center {
  width: 100%;
  display: flex;
  justify-content: center;
}

/deep/ {
  .el-form-item {
    margin-bottom: 16px;
  }
}
.s-login {
  width: 100%;
  height: 100%;
  background: #fff url("../assets/image/staff_bg.png") no-repeat left top;
  background-size: cover;
  display: flex;
  position: relative;

  .s-sub-title {
    // font-family: PingFangSC-Semibold, PingFang SC;
    font-family: PingFang SC;
    font-weight: 600;
    position: absolute;
    padding-left: 100px;
  }

  .s-title {
    width: 100%;
    font-family: MFBenHeiNoncommercial, MFBenHeiNoncommercial;
    font-weight: 400;
    font-size: 23px;
    height: 56px;
    line-height: 56px;
    background: #000;
    color: #ffffff;
    padding-left: 94px;
  }

  .s-sub-title {
    font-size: 88px;
    color: #0052D9;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.85);
    bottom: 104px;
  }

  .main-content {
    width: 480px;
    padding: 32px;
    align-self: center;
    background: #ffffff;
    border-radius: 8px 8px 8px 8px;
    position: absolute;
    right: 104px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .logo-box {
      @include center();
      margin-top: 80px;

      .logo {
        width: 204px;
      }
    }

    .form-box {
      @include center();

      .form {
        width: 410px;
      }

      .title {
        font-family: PingFang SC, PingFang SC;
        font-weight: 600;
        font-size: 20px;
        color: #020612;
        line-height: 28px;
      }

      .login-form {
        margin: 24px 0;
        .sub-title {
          font-size: 16px;
          font-weight: 400;
          color: #515151;
          opacity: 0.5;
          margin-bottom: 13px;
        }
        .el-form-item {
          margin-bottom: 16px;
        }
        .el-input__inner {
          height: 54px;
          border-radius: 6px;
          border: none;
          background: #F8F9FB;
          padding: 0 12px;
        }

        .password-box {
          position: relative;
          /deep/ {
            .el-input__suffix {
              right: 9px;
              top: 3px;

              .el-input__clear {
                color: rgba(2, 6, 18, .4);
              }
            }
          }
          .eye-icon {
            width: 20px;
            height: 20px;
            position: absolute;
            right: 23px;
            bottom: 14px;
          }

          .eye-open {
            background: url("../assets/image/open_eye.png") no-repeat center center;
          }

          .eye-close {
            background: url("../assets/image/close_eye.png") no-repeat center center;
          }
        }

        .icon {
          position: absolute;
          left: 20px;
          top: 14px;
        }

        .password-set {
          display: flex;
          justify-content: space-between;
          margin: 24px 0 0;

          .el-checkbox__label {
            color: $light-blue;
            font-size: 16px;
            font-weight: 400;
          }

          .el-checkbox__input.is-checked .el-checkbox__inner {
            background-color: $light-blue;
            border-color: $light-blue;
          }

          .forget {
            color: $light-blue;
            font-size: 16px;
            font-weight: 400;
          }
        }
        .agreement {
          font-size: 14px; 
          line-height: 22px;
          color: rgba(2,6,18,0.6);
          margin-bottom: 24px;
          &>span {
            margin-left: 8px;            
          } 
        }
      }
      .wj-password {
        font-size: 14px;
        color: rgba(2,6,18,0.6);
        line-height: 22px;
        text-align: center;
        cursor: pointer;
      }

      .btn-box {
        @include center();

        .btn {
          width: 410px;
          height: 48px;
          background: $light-blue;
          border-radius: 48px;
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;

          &.is-disabled {
            background-color: rgba(0, 82, 217, 0.50);
          }
        }
      }
    }
  }

  .record-number-link {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    line-height: 36px;
  }
}

$times: 0.7;
@media screen and (max-width: 1440px) {
  .s-login {
    .main-content {
      // width: $times*600px;
      right: $times * 170px;
    }
  }
}
</style>
