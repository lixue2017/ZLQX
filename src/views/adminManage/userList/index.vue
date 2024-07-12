<template>
  <div class="app-container">
    <div class="base-flex-between margin-bottom">
      <el-button type="primary" @click="() => handleAddEdit()" size="small" v-throttle>
        新建人员
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
      <template v-if="slotProps.prop==='table_xx_2'">
        <el-tag :type="slotProps.row[slotProps.prop] ? 'success': 'danger'">{{slotProps.row[slotProps.prop] ? '在职' : '离职'}}</el-tag>
      </template>
     </template>
    </ComTable>
    <AddUserDialog ref="userDialogRef" />
  </div>
</template>

<script>
import { tableColumns } from "./model.js";
import { msgTipBox } from "@/utils/confirmBox.js"

export default {
  name: "AdminList",
  components: {
    ComTable: () => import("_comp/ComTable"),
    AddUserDialog: () => import("../components/AddUserDialog/index"),
  },
  data() {
    return {
      searchText: "",
      tableConfig: {
        tableHeight: "calc(100vh - 265px)",
        httpRequest: () => {
          return Promise.resolve({
            rows: [{
              id: 1,
              table_xx_1: "王力",
              table_xx_2: 1,
              table_xx_3: 13277868890,
              table_xx_4: "489029199602038919",
              table_xx_5: "20,000",
              table_xx_6: "2024-03-10",
              table_xx_7: "2024-03-10",
            }, {
              id: 2,
              table_xx_1: "赵轩",
              table_xx_2: 0,
              table_xx_3: 13277868890,
              table_xx_4: "489029199602038919",
              table_xx_5: "20,000",
              table_xx_6: "2024-03-10",
              table_xx_7: "2024-03-10",
            }],
            total: 2
          })
        },
        tableColumns,
      },
      searchFromData: {},
      operationList: [
        {
          text: "编辑",
          handleClick: this.handleAddEdit,
        },
        {
          text: "删除",
          handleClick: () => {
            msgTipBox(this, {msg: "是否确认要删除该人员"},() => {})
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
    handleAddEdit(row) {
      this.$refs.userDialogRef.show(row)
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
