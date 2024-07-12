<template>
    <div class="app-container">
      <div class="base-flex-between margin-bottom">
        <div>
          <el-input
            style="width: 320px;"
            type="text"
            v-model.trim="searchText"
            placeholder="请输入配件名称、采购人搜索内容"
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
        <el-button type="primary" @click="()=>handleAddEdit()" size="small" v-throttle>
          新建入库单
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
      </ComTable>
      <WarehouseDialog ref="warehouseDialogRef" />
    </div>
  </template>
  
  <script>
  import { tableColumns } from "./model.js";
  import { msgTipBox } from "@/utils/confirmBox.js"
  
  export default {
    name: "WarehouseManage",
    components: {
      ComTable: () => import("_comp/ComTable"),
      WarehouseDialog: () => import("../components/WarehouseDialog")
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
                table_xx_1: "09872",
                table_xx_2: "2021-汽车后视镜（马自达）",
                table_xx_3: "景冈汽修公司",
                table_xx_4: "张三",
                table_xx_5: "1009",
                table_xx_6: "2000",
                table_xx_7: "130",
                table_xx_8: "123",
                table_xx_9: "7",
                table_xx_10: "19",
                table_xx_11: "2024-06-21 12:02:43",
                table_xx_12: "2021-汽车后视镜（马自达）超过文字111",
              }, {
                id: 2,
                table_xx_1: "09872",
                table_xx_2: "2021-汽车后视镜（马自达）超过文字88888",
                table_xx_3: "景冈汽修公司",
                table_xx_4: "张三",
                table_xx_5: "1009",
                table_xx_6: "2000",
                table_xx_7: "130",
                table_xx_8: "123",
                table_xx_9: "7",
                table_xx_10: "19",
                table_xx_11: "2024-06-21 12:02:43",
                table_xx_12: "2021-汽车后视镜（马自达）超过文字111",
              }],
              total: 2
            })
          },
          tableColumns,
        },
        operationList: [
          {
            text: "编辑",
            handleClick: this.handleAddEdit,
          },
          {
            text: "删除",
            handleClick: () => {
              msgTipBox(this, {msg: "是否确认要删除此入库单"},() => {})
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
        this.$refs.warehouseDialogRef.show(row)
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
  