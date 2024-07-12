<template>
  <ComDialog ref="customDialog" :customDialog="customDialogConfig">
    <template v-slot:content>
      <div class="checkbox-outer" v-for="(item, index) in list" :key="index">
        <div class="base-flex-between checkbox-title">
          <span>{{ item.title }}</span>
          <el-checkbox :indeterminate="item.isIndeterminate" v-model="item.checkAll" @change="(val) => handleCheckAllChange(val, item)">全选</el-checkbox>
        </div>
        <el-checkbox-group v-model="item.checkedKeys" @change="(val) => handleCheckedChange(val, item)">
          <el-checkbox v-for="child in item.children" :label="child.id" :key="`child${child.id}`">{{ child.label }}</el-checkbox>
        </el-checkbox-group>
      </div>
    </template>
  </ComDialog>
</template>

<script>
export default {  
  components: {
    ComDialog: () => import("_comp/ComDialog"),
  },
  data() {
    return {      
      customDialogConfig: {
        title: "账号管理",
        width: "540px",
        center: true,
        footer: [
          {
            text: "取 消",
            plain: true,
            handleClick: () => {
              this.$refs.customDialog.handleClose();
            },
          },
          {
            text: "确 定",
            type: "primary",
            handleClick: () => {
              this.$refs.dialogForm.submitForm();
            },
          },
        ],
      },
      list: [{
        title: "账号列表",
        isIndeterminate: false,
        checkAll: false,
        checkedKeys: [],
        children: [{
          id: 1, 
          label: "账号列表",
          checked: false
        }, {
          id: 2, 
          label: "账号列表-新增按钮",
          checked: false
        }, {
          id: 3, 
          label: "账号列表-密码重置按钮",
          checked: false
        }, {
          id: 4, 
          label: "账号列表-账户停用按钮",
          checked: false
        }, {
          id: 5, 
          label: "账号列表-账户删除按钮",
          checked: false
        }, {
          id: 6, 
          label: "账号列表-角色编辑按钮",
          checked: false
        }, {
          id: 7, 
          label: "账号列表-账户结算主题编辑按钮",
          checked: false
        }, {
          id: 8, 
          label: "账号列表-修改密码按钮",
          checked: false
        }]
      }, {
        title: "角色列表",
        isIndeterminate: false,
        checkAll: false,
        checkedKeys: [],
        children: [{
          id: 1, 
          label: "角色列表",
          checked: false
        }, {
          id: 2, 
          label: "角色列表-角色按钮",
          checked: false
        }, {
          id: 3, 
          label: "角色列表-编辑按钮",
          checked: false
        }, {
          id: 4, 
          label: "角色列表-编辑按钮",
          checked: false
        }, {
          id: 5, 
          label: "角色列表-角色编辑按钮",
          checked: false
        }]
      }, {
        title: "权限编码按钮列表",
        isIndeterminate: false,
        checkAll: false,
        checkedKeys: [],
        children: [{
          id: 1, 
          label: "权限模块列表",
          checked: false
        }, {
          id: 2, 
          label: "权限模块列表-新增按钮",
          checked: false
        }, {
          id: 3, 
          label: "权限模块列表-编辑按钮",
          checked: false
        }, {
          id: 4, 
          label: "权限模块列表-删除按钮",
          checked: false
        }]
      }]
    }
  },
  methods: {
    show(row = {}) {
      this.$refs.customDialog.show();
    },
    hide() {
      this.$refs.customDialog.hide();
    },
    handleSuccess() {
      this.$emit("handleSuccess");
      this.hide();
    },
    handleCheckAllChange(val, item) {      
      item.checkedKeys = val ? item.children.map(item => item.id) : [];
      item.isIndeterminate = false;
    },
    handleCheckedChange(val, item) {
      let checkedCount = val.length;
      item.checkAll = checkedCount === item.children.length;
      item.isIndeterminate = checkedCount > 0 && checkedCount < item.children.length;
    }
  }
}
</script>
<style lang="scss" scoped>
/deep/ {
  .el-dialog--center .el-dialog__body {
    padding: 0 24px 8px;
  }
  .el-checkbox-group {
    .el-checkbox {
      line-height: 22px;
      margin-right: 24px;
      margin-top: 8px;
      color: rgba(0,0,0,0.9);
    }
  }
}
.checkbox-outer {
  padding: 16px 0;
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .checkbox-title {
    font-weight: 600;
    font-size: 14px;
    color: #020612;
    line-height: 22px;
    /deep/ {
      font-size: 14px;
      color: rgba(0,0,0,0.9);
    }
  }
}
</style>