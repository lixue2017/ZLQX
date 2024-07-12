<template>
  <div class="person-center">
    <img :src="userCircle" alt="" width="20px" height="20px">
    <!-- <el-dropdown
      class="user-info"
      trigger="click"
    > -->
      <div class="user-info">
        <span>个人信息</span>
        <i class="el-icon-arrow-down" />
      </div>
      <!-- <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <span :title="`张三/zs`">
            张三/zs
          </span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown> -->
    <el-dropdown
      class="avatar-container right-menu-item hover-effect"
      trigger="click"
    >
      <div class="account-name">
        <!-- <div class="label" :title="`${name}/${nickName}`">
          {{ name }}/{{ nickName }}
        </div>
        <i class="el-icon-caret-bottom" /> -->
        <img class="pointer" :src="iconSetting" alt="" srcset="">
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="changePassword">
          <span>修改密码</span>
        </el-dropdown-item>
        <el-dropdown-item @click.native="logout">
          <span>退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <!-- <el-dropdown
      v-if="isEnglish"
      class="avatar-lang"
      trigger="click"
      @command="handleCommand"
    >
      <div class="account-name">
        <div class="label">
          {{ languageType === "en-us" ? "English" : "中文" }}
        </div>
        <i class="el-icon-caret-bottom" />
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="zh-cn">
          <span>中文</span>
        </el-dropdown-item>
        <el-dropdown-item command="en-us">
          <span>English</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown> -->
    <UpdatePasswordDialog ref="updatePasswordDialogRef" @handleSuccess="handleSuccess" appendToBody />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import { updateUserPwd } from "@/api/system/user";
import { DICTIONARY_Obj } from "@/comModel/dictionary";
import { changePasswordCols, screenList } from "./model.js";
// import { getMsgRecordList, updateMsgInfo } from "@/api/messageService";
import { customMessageBox } from "@/utils/confirmBox.js";
import iconSetting from "@/assets/image/icon-setting.png"
import userCircle from "@/assets/image/user-circle.png"

export default {
  components: {
    UpdatePasswordDialog: () => import("@/views/adminManage/components/UpdatePasswordDialog"),
  },
  data() {
    return {
      iconSetting,
      userCircle,
      selectForm: {
        pageNum: 1,
        pageSize: 10,
        msgType: undefined,
        pushTimeType: undefined,
        flagRead: undefined,
      },
      screenList,
      selectAll: {},
      lists: [],
      loading: false,
      total: 999,
    };
  },
  computed: {
    ...mapGetters([
      "avatar",
      "name",
      "nickName",
      "unreadCount",
      "userId",
      "languageType",
      "roles",
    ]),
    noMore() {
      return this.lists.length >= this.total;
    },
    disabled() {
      return this.loading || this.noMore;
    },
    isEnglish() {
			return true;
      // const overseaRole = ["admin"]; // 海外角色
      // return (this.roles || []).some((ele) => overseaRole.includes(ele));
    },
  },
  created() {
    // console.log('roles==', this.roles)
    // if (!this.isEnglish && this.languageType === "en-us") {
    //   // 不是海外角色且为英文时，重置语言
    //   localStorage.removeItem("languageType");
    //   window.location.href = window.location.href;
    // }
    // this.handleBtn();
    // this["msgNotice/GetUnreadCount"]();
  },
  methods: {
    // ...mapActions(["msgNotice/GetUnreadCount", "langCnEn/setStoreCurLanguage"]),
    handleCommand(str) {
      this["langCnEn/setStoreCurLanguage"]({
        languageType: str,
      });
      setTimeout(() => {
        // 切换语言后刷新页面
        window.location.href = window.location.href;
      });
    },
    changePassword() {
      this.$refs.updatePasswordDialogRef.show()
    },
    handleSuccess() {      
      this.$alert("密码修改成功，请使用新密码登录", "提示", {
        confirmButtonText: "确定",
        callback: this._LogOut,
      });
    },
    logout() {
      customMessageBox(
        this,
        {
          msgTxt1: "",
          msgTxt2: "确定注销并退出系统吗？",
        },
        () => {
          this._LogOut();
        }
      );
    },
    _LogOut() {
      // this.$store.dispatch("LogOut").then(() => {
        location.href = "/staffLogin";
      // });
    },
    handleBtn() {
      this.screenList.forEach((item) => {
        if (item.options) {
          this.selectAll[item.id] = item.options;
          return;
        }
        let dictOptions = [];
        item.customDicsArr.forEach((e) => {
          const ele =
            typeof e === "number" && item.dicsStr ? `${item.dicsStr}_${e}` : e;
          dictOptions.push({
            ...DICTIONARY_Obj[ele],
            label: DICTIONARY_Obj[ele].nameCn,
          });
        });
        this.selectAll[item.id] = dictOptions;
      });
    },
    msgLoad() {
      this.getMsgRecordList(true);
    },
    getMsgRecordList(isLoadMore) {
      this.loading = true;
      if (isLoadMore) {
        this.selectForm.pageNum++;
      } else {
        this.selectForm.pageNum = 0;
      }
      getMsgRecordList({ ...this.selectForm, receiveId: this.userId }).then(
        (res) => {
          const { rows, total } = res;
          this.total = total;
          if (isLoadMore) {
            this.lists = [...this.lists, ...rows];
          } else {
            this.lists = [...rows];
          }
          this.loading = false;
        }
      );
    },
    getQueryParams(prod, val) {
      this.selectForm[prod] = val;
      this.$refs.scrollRef.scrollTop = 0;
      this.getMsgRecordList();
    },
    handleShowPopover() {
      this.selectForm = {
        pageNum: 1,
        pageSize: 10,
        msgType: undefined,
        pushTimeType: undefined,
        flagRead: undefined,
      };
      this.getMsgRecordList();
    },
    handleRead(lists) {
      let idList = lists;
      if (!idList) {
        idList = this.lists
          .filter((item) => item.id && item.flagRead === "n")
          .map((item) => item.id);
      }
      return new Promise((resolve) => {
        if (idList.length) {
          updateMsgInfo({
            idList,
            flagRead: "y",
            actionType: "R",
          }).then(() => {
            if (!lists) {
              this.lists = [];
              this.$refs.scrollRef.scrollTop = 0;
              this.getMsgRecordList();
              this.$message.success("本页已标志为已读！");
            }
            resolve();
          });
        } else {
          if (!lists) {
            this.$message.success("本页已标志为已读！");
          }
        }
        resolve();
      });
    },
    goMsgList() {
      this.$router.push({
        name: "MessageList",
      });
    },
  },
};
</script>

<style lang="scss">
.notify-popper {
  max-height: 737px;
  padding: 15px 25px;
  border: none;
  box-shadow: 0px 0px 8px 0px rgba(6, 33, 76, 0.2);
  border-radius: 10px;
  .filter {
    & > div {
      padding-bottom: 12px;
      border-bottom: 1px solid #e2e2e2;
      margin-bottom: 10px;
      .filter-title {
        font-size: 14px;
        line-height: 20px;
        color: #696969;
        margin-bottom: 10px;
      }
      .el-button + .el-button {
        margin-left: 10px;
      }
      .right-btn {
        float: right;
      }
    }
    .infinite-list-wrapper {
      max-height: 420px;
      overflow: auto;
      border: 0;
      margin-top: 15px;
      &::-webkit-scrollbar {
        width: 10px;
      }
      .list-item {
        padding: 16px 20px 20px;
        border: 1px solid #bcbcbc;
        border-radius: 4px;
        margin-bottom: 12px;
        cursor: pointer;
        .list-top {
          display: flex;
          justify-content: space-between;
          line-height: 28px;
          margin-bottom: 11px;
          .top-title {
            font-size: 16px;
            font-weight: bold;
            color: #515151;
            line-height: 22px;
            i {
              width: 6px;
              height: 6px;
              background: #fa5151;
              display: inline-block;
              border-radius: 50%;
              vertical-align: top;
              margin-left: 3px;
            }
          }
          .top-time {
            font-size: 14px;
            color: #8b8b8b;
            line-height: 20px;
          }
        }
        .list-bottom {
          font-size: 14px;
          color: #8b8b8b;
          line-height: 22px;
          p {
            margin: 0;
          }
        }
      }
      .load-noData {
        font-size: 14px;
        line-height: 20px;
        color: #8b8b8b;
        text-align: center;
      }
    }
  }
  .popper__arrow {
    display: none;
  }
}
</style>

<style lang="scss" scoped>
.person-center {
  position: absolute;
  right: 15px;
  top: 0;
  height: 60px;
  display: flex;
  align-items: center;
  .lang-head-box {
    margin: 0 15px;
    .lang-txt {
      color: #bcbcbc;
      cursor: pointer;
    }
    .lang-active {
      font-size: 14px;
      color: #000000;
    }
  }
  .popover {
    .el-badge {
      margin-top: 18px;
    }
    i {
      font-size: 24px;
    }
  }
  .user-info {
    margin-left: 8px;
    i {
      padding: 0 4px;
    }
  }
  .avatar-container {
    margin-right: 20px;
    margin-left: 28px;
    .avatar-wrapper {
      margin-top: 5px;
      position: relative;
      .user-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      .el-icon-caret-bottom {
        cursor: pointer;
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
  .account-name {
    line-height: 60px;
    display: flex;
    align-items: center;
    max-width: 150px;
    .label {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .iconfont.tongzhi2 {
    cursor: pointer;
  }
}
</style>
