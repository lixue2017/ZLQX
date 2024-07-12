<template>
  <div class="app-container">
    <div class="base-flex-between margin-bottom">
      <el-button type="primary" @click="handleAdd" size="small" v-throttle>
        新建账号
      </el-button>
      <div>
        <el-input
          style="width: 320px;"
          type="text"
          v-model.trim="searchText"
          placeholder="请输入手机号查询"
          maxlength="100"
          size="small"
          @blur="getTableList"
          @keyup.enter.native="getTableList"
        >
          <i
            class="el-icon-search"
            slot="suffix">
          </i>
        </el-input>
      </div>
    </div>
    <ComTable
      ref="tableRef"
      :tableHeight="tableConfig.tableHeight"
      :columnConfig="tableConfig.tableColumns"
      :httpRequest="tableConfig.httpRequest"
      :getQueryParams="getQueryParams"
      :rowOperationBtnListFn="() => operationList"
    >
      <template v-slot:customRow="{ slotProps }">
      <template v-if="slotProps.prop === 'table_xx_3'">
        <el-tag :type="slotProps.row[slotProps.prop] ? 'success': 'danger'">{{slotProps.row[slotProps.prop] ? '启动' : '禁止'}}</el-tag>
      </template>
      <template v-if="slotProps.prop === 'table_xx_6'">
        <div class="role-name">
          {{ slotProps.row[slotProps.prop] }}
        </div>
      </template>
      </template>
    </ComTable>
    <AddAdminDialog ref="adminDialogRef" />
    <PasswordDialog ref="passwordDialogRef" />
    <RoleDialog ref="roleDialogRef" />
  </div>
</template>
  
<script>
  import { searchColumns, tableColumns } from "./model.js";
  import { msgTipBox } from "@/utils/confirmBox.js"
  
  export default {
    name: "AdminList",
    components: {
      ComTable: () => import("_comp/ComTable"),
      AddAdminDialog: () => import("../components/AddAdminDialog/index"),
      PasswordDialog:  () => import("../components/PasswordDialog/index"),
      RoleDialog: () => import("../components/RoleDialog/index")
    },
    data() {
      return {
        searchText: "",
        tableConfig: {
          tableHeight: "calc(100vh - 265px)",
          httpRequest: () => {
            return Promise.resolve({
              rows: [{
                table_xx_1: "赵轩",
                table_xx_2: "18627944703",
                table_xx_3: 1,
                table_xx_4: "2024-05-24 15:32:09",
                table_xx_5: "2024-07-02 18:04:59",
                table_xx_6: "系统管理员"
              }, {
                table_xx_1: "赵轩",
                table_xx_2: "18627944703",
                table_xx_3: 0,
                table_xx_4: "2024-05-24 15:32:09",
                table_xx_5: "2024-07-02 18:04:59",
                table_xx_6: "xx角色"
              }],
              total: 2
            })
          },
          tableColumns,
        },
        searchFromData: {},
        operationList: [
          {
            text: "角色编辑",
            handleClick: this.handleRole,
          },
          {
            text: "密码重置",
            handleClick: ()=>{},
          },
          {
            text: "修改密码",
            handleClick: this.handleUpdatePW,
          },
          {
            text: "停用",
            handleClick: () => {
              msgTipBox(this, {msg: "是否确认要停用此账号"},() => {})
            },
          },
        ],
      };
    },
    methods: {
      getTableList() {
        this.$refs.tableRef.refreshTable(true)
      },
      getQueryParams() {
        return {
          searchText: this.searchText
        };
      },
      handleAdd() {
        this.$refs.adminDialogRef.show()
      },
      handleUpdatePW() {
        this.$refs.passwordDialogRef.show()
      },
      handleRole() {
        this.$refs.roleDialogRef.show()
      }
    },
  };
</script>

<style lang="scss" scoped>
  /deep/ {
    .el-input__suffix-inner {
      line-height: 32px;
      position: absolute;
      height: 100%;
      right: 5px;
      top: 0;
      text-align: center;
      color: #a5a5a5;
      -webkit-transition: all .3s;
      transition: all .3s;
      pointer-events: none;
    }
    .el-tag.el-tag--success {
      background: #E3F9E9;
      border-radius: 3px 3px 3px 3px;
      border: none;
      color: #2BA471;
      padding: 0 12px;
    }
    .el-tag.el-tag--danger {
      background: #FFF0ED;
      border-radius: 3px 3px 3px 3px;
      border: none;
      color: #FF595D;
      padding: 0 12px;
    }    
  }
  .margin-bottom {
    margin-bottom: 24px;
  }
  .role-name {
    display: inline-block;
    padding: 5px 12px;
    background: #F8F9FB;
    border-radius: 3px;
  }
</style>
  