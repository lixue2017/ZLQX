<template>
  <div class="app-container">
    <div class="base-flex-between margin-bottom">
      <el-button type="primary" @click="handleAddEdit" size="small" v-throttle>
        新建角色
      </el-button>
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
      <template v-if="slotProps.prop==='table_xx_2'">
        <el-tag :type="slotProps.row[slotProps.prop] ? 'success': 'danger'">{{slotProps.row[slotProps.prop] ? '在职' : '离职'}}</el-tag>
      </template>
     </template>
    </ComTable>
    <AddRoleDialog ref="addRoleDialogRef" />
    <PermissionDialog ref="permissionDialogRef" />
  </div>
</template>

<script>
import { searchColumns, tableColumns } from "./model.js";
import { msgTipBox } from "@/utils/confirmBox.js"

export default {
  name: "AdminList",
  components: {
    ComTable: () => import("_comp/ComTable"),
    AddRoleDialog: () => import("../components/AddRoleDialog/index"),
    PermissionDialog:  () => import("../components/PermissionDialog/index"),
  },
  data() {
    return {
      tableConfig: {
        tableHeight: "calc(100vh - 265px)",
        httpRequest: () => {
          return Promise.resolve({
            rows: [{
              id: 1,
              table_xx_1: "系统管理员",
              table_xx_2: "2024-03-10",
              table_xx_3: "2024-03-10",
            }, {
              id: 2,
              table_xx_1: "xx角色",
              table_xx_2: "2024-03-10",
              table_xx_3: "2024-03-10",
            }],
            total: 2
          })
        },
        tableColumns,
      },
      searchFromData: {},
      operationList: [
        {
          text: "权限设置",
          handleClick: this.handlePermission,
        },
        {
          text: "编辑",
          handleClick: this.handleAddEdit,
        },
        {
          text: "删除",
          handleClick: () => {
            msgTipBox(this, {msg: "是否确认要删除此角色"},() => {})
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
      };
    },
    handleAddEdit(row) {
      this.$refs.addRoleDialogRef.show(row)
    },
    handlePermission() {
      this.$refs.permissionDialogRef.show()
    },
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
</style>
