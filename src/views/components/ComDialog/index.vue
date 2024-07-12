<template>
  <el-dialog
    :title="customDialog.title"
    :visible.sync="dialogVisible"
    :width="customDialog.width || '50%'"
    :before-close="handleClose"
    :close-on-click-modal="false"
    :append-to-body="customDialog.appendToBody || false"
    class="custom-dialog"
    :class="[
      dialogBoxCenter ? 'dialog-box-center' : '',
      customDialog.dlgClassName,
    ]"
    :center="customDialog.center ? true : false"
  >
    <span slot="title" class="el-dialog__title" v-if="customDialog.slotTitle">
      <slot name="title"></slot>
    </span>
    <slot name="content"></slot>
    <span
      slot="footer"
      class="dialog-footer"
      v-if="
        customDialog[customDialog.useFooter || 'footer'] &&
        customDialog[customDialog.useFooter || 'footer'].length
      "
    >
      <template
        v-for="(item, index) in customDialog[
          customDialog.useFooter || 'footer'
        ]"
      >
        <template v-if="!item.hide">
          <div
            v-if="item.btnPreview === 'btnDownload'"
            :key="index"
            style="display: inline-block"
            :style="item.marginDirection"
          >
            <PreviewOrDownload
              :btnTxt="handleBtnText(item.text)"
              :btnConf="{ btnType: item.type }"
              :previewDownloadConf="dlgPreviewConfig"
            />
          </div>
          <el-button
            v-else
            :type="item.type"
            @click="item.handleClick"
            :key="index"
            :plain="item.plain"
            :disabled="item.disabled"
            :size="customDialog.size || 'medium'"
            :loading="item.loading || isBtnLoading"
            v-debounce
          >
            {{ handleBtnText(item.text) }}
          </el-button>
        </template>
      </template>
    </span>
  </el-dialog>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { msgBox } from "@/utils/confirmBox.js";
export default {
  props: {
    customDialog: {
      type: Object,
      default: {},
    },
    confirmClose: {
      type: Boolean,
      default: true,
    },
    dialogBoxCenter: {
      type: Boolean,
      default: true,
    },
    dlgPreviewConfig: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    show() {
      this.dialogVisible = true;
      if (this.isBtnLoading) {
        /**
         * 防止提交后接口还未响应，到其他页面无法操作
         * 页面重置提交-可在进入路由页的钩子函数中重置
         */
        this["settings/actionRepeatedClick"](false);
      }
    },
    hide() {
      this.dialogVisible = false;
    },
    handleBtnText(text) {
      if (text && typeof text === "string" && text.length === 2) {
        return text.charAt(0) + " " + text.charAt(1);
      }
      return text;
    },
    handleClose(done) {
      if (this.confirmClose) {
        const title = "取消提示";
        const className = "el-icon-warning text-warning";
        const msg = "取消操作之后当前页面将不会保存!";
        msgBox(this, { title, className, msg, showCancelButton: true }, () => {
          this.$emit("onClose");
          this.hide();
          if (done) {
            done();
          }
        });
      } else {
        this.$emit("onClose", done);
        this.hide();
      }
    },
    ...mapActions(["settings/actionRepeatedClick"]),
  },
  computed: {
    ...mapState({
      isBtnLoading: (state) => state.settings.isRepeatedClick,
    }),
  },
  components: {
    PreviewOrDownload: () => import("_comp/ComFileTable/previewOrDownload.vue"),
  },
};
</script>

<style lang="scss" scoped>
.custom-dialog {
  &.dialog-box-center {
    text-align: center;
    &:after {
      content: "";
      display: inline-block;
      height: 100%;
      width: 0;
      vertical-align: middle;
    }
    /deep/ .el-dialog {
      text-align: left;
      display: inline-block;
      margin-top: 0 !important;
      vertical-align: middle;
      border-radius: 4px;
      overflow: hidden;
    }
  }
  &.dialog-body-table {
    /deep/ .el-dialog__body {
      max-height: none;
    }
  }

  /deep/ {
    .el-dialog__header {
      border-bottom: 1px solid rgba(2, 6, 18, 0.10);
      padding: 16px 20px;
      border-radius: 4px;

      .el-dialog__title {
        font-weight: bold;
        font-size: 18px;
        color: rgba(0,0,0,0.9);
        line-height: 24px;

        .title-name {
          color: #0052D9;
          font-size: 14px;
          font-weight: 400;
        }
      }
      .el-dialog__close {
        font-size: 16px;
      }
    }
    .el-dialog__footer {
      padding: 0 20px 24px;
      border-radius: 4px;
    }
    .el-dialog__body {
      max-height: calc(100vh - 200px);
      overflow-y: auto;
      position: relative;

      &::-webkit-scrollbar {
        height: 8px;
        width: 10px;
      }
      .detail-status-btn {
        position: absolute;
        top: 33px;
        right: 24px;
        width: 58px;
        padding: 4px 0;
        border-radius: 14px;
        text-align: center;
      }
    }

    .el-form-item__label {
      font-weight: 600;
      font-size: 14px;
      color: #020612;
      line-height: 22px;
      text-align: left;
      margin-bottom: 8px;
    }
    .el-form-item__content {
      margin-left: 0px !important;
      margin-top: 8px;
    }
    .el-input--small .el-input__inner {
      height: 38px;
      line-height: 38px;
    }
    .el-form-item.is-required:not(.is-no-asterisk) .el-form-item__label-wrap>.el-form-item__label:before, .el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before {
      display: none;
    }
    .el-form-item.is-required:not(.is-no-asterisk) .el-form-item__label-wrap>.el-form-item__label::after, .el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label::after {
      content: '*';
      color: #fa7a7a;
      margin-left: 4px;
    }
  }
}
</style>
