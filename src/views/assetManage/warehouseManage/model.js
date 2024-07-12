const TABLE_COLS_INDEX = {
  type: "index",
  label: "ID",
  // align: "center",
  width: 80,
  fixed: "left",
};
const TABLE_COLS_1 = {
  prop: "table_xx_1",
  label: "配件编号",
  showOverflowTooltip: true,
  minWidth: 120,
  fixed: "left",
};
const TABLE_COLS_2 = {
  prop: "table_xx_2",
  label: "配件名称",
  showOverflowTooltip: true,
  minWidth: 200,
};
const TABLE_COLS_3 = {
  prop: "table_xx_3",
  label: "供应商名称",
  minWidth: 160,
};
const TABLE_COLS_4 = {
  prop: "table_xx_4",
  label: "采购人",
  showOverflowTooltip: true,
  minWidth: 120,
};
const TABLE_COLS_5 = {
  prop: "table_xx_5",
  label: "采购价格",
  showOverflowTooltip: true,
  minWidth: 120,
};
const TABLE_COLS_6 = {
  prop: "table_xx_6",
  label: "建议零售价",
  showOverflowTooltip: true,
  minWidth: 120,
};
const TABLE_COLS_7 = {
  prop: "table_xx_7",
  label: "采购数量",
  showOverflowTooltip: true,
  minWidth: 110,
};
const TABLE_COLS_8 = {
  prop: "table_xx_8",
  label: "已用量",
  showOverflowTooltip: true,
  minWidth: 110,
};
const TABLE_COLS_9 = {
  prop: "table_xx_9",
  label: "剩余量",
  showOverflowTooltip: true,
  minWidth: 110,
};
const TABLE_COLS_10 = {
  prop: "table_xx_10",
  label: "采购批次",
  showOverflowTooltip: true,
  minWidth: 120,
};
const TABLE_COLS_11 = {
  prop: "table_xx_11",
  label: "入库时间",
  showOverflowTooltip: true,
  minWidth: 160,
};
const TABLE_COLS_12 = {
  prop: "table_xx_12",
  label: "备注",
  showOverflowTooltip: true,
  minWidth: 160,
};
const TABLE_COLS_OPERATION = {
  label: "操作",
  prop: "operation",
  width: 135,
  columnOperation: true,
  fixed: "right",
};

const tableColumns = [
  TABLE_COLS_INDEX,
  TABLE_COLS_1,
  TABLE_COLS_2,
  TABLE_COLS_3,
  TABLE_COLS_4,
  TABLE_COLS_5,
  TABLE_COLS_6,
  TABLE_COLS_7,
  TABLE_COLS_8,
  TABLE_COLS_9,
  TABLE_COLS_10,
  TABLE_COLS_11,
  TABLE_COLS_12,
  TABLE_COLS_OPERATION, // 操作
];

export { tableColumns };