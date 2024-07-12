
const FORM_COLS_1 = {
  span: 24,
  id: "form_xx_1",
  label: "配件编码",
  placeholder: "请输入配件编码",
  type: "text",
};
const FORM_COLS_2 = {
  span: 24,
  id: "form_xx_2",
  label: "配件名称",
  placeholder: "请输入名称",
  type: "text",
};
const FORM_COLS_3 = {
  span: 24,
  id: "form_xx_3",
  label: "供应商名称",
  placeholder: "请输入名称",
  type: "text",
};
const FORM_COLS_4 = {
  span: 24,
  id: "form_xx_4",
  label: "采购人",
  placeholder: "请输入采购人",
  type: "text",
};
const FORM_COLS_5 = {
  span: 24,
  id: "form_xx_5",
  label: "采购价格",
  placeholder: "请输入采购价格",
  type: "text",
};
const FORM_COLS_6 = {
  span: 24,
  id: "form_xx_6",
  label: "建议销售价格",
  placeholder: "请输入价格",
  type: "text",
};
const FORM_COLS_7 = {
  span: 24,
  id: "form_xx_7",
  label: "采购数量",
  placeholder: "请输入采购数量",
  type: "text",
};
const FORM_COLS_8 = {
  span: 24,
  id: "form_xx_8",
  label: "采购批次号",
  placeholder: "请输入采购批次号",
  type: "text",
};
const FORM_COLS_9 = {
  span: 24,
  id: "form_xx_9",
  label: "库存告警数量",
  placeholder: "请输入数量",
  type: "text",
};
const FORM_COLS_10 = {
  span: 24,
  id: "form_xx_10",
  label: "备注",
  placeholder: "请输入备注",
  type: "textarea",
};


const formColumns = [
  FORM_COLS_1,
  FORM_COLS_2,
  FORM_COLS_3,
  FORM_COLS_4,
  FORM_COLS_5,
  FORM_COLS_6,
  FORM_COLS_7,
  FORM_COLS_8,
  FORM_COLS_9,
  FORM_COLS_10
]


export const config = {
  lists: [
    {
      fieldList: [
        {
          rows: [
            {
              cols: formColumns,
            },
          ],
        },
      ],
    },
  ],
  formRules: {
    form_xx_1: [
      {
        required: true,
        message: "请输入配件编码",
        trigger: "change",
      },
    ],
    form_xx_2: [
      {
        required: true,
        message: "请输入名称",
        trigger: "change",
      },
    ],
    form_xx_3: [
      {
        required: true,
        message: "请输入名称",
        trigger: "change",
      },
    ],
    form_xx_4: [
      {
        required: true,
        message: "请输入采购人",
        trigger: "change",
      },
    ],
    form_xx_7: [
      {
        required: true,
        message: "请输入采购数量",
        trigger: "change",
      },
    ],
    form_xx_8: [
      {
        required: true,
        message: "请输入采购批次号",
        trigger: "change",
      },
    ],
    form_xx_9: [
      {
        required: true,
        message: "请输入数量",
        trigger: "change",
      },
    ]
  }
};
