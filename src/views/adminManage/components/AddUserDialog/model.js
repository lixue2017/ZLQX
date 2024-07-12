
const FORM_COLS_1 = {
  span: 24,
  id: "form_xx_1",
  label: "姓名",
  placeholder: "请输入姓名",
  type: "text",
};
const FORM_COLS_2 = {
  span: 24,
  id: "form_xx_2",
  label: "入职时间",
  placeholder: "请选择日期",
  type: "date",
  valueFormat: "yyyy-MM-dd",
};
const FORM_COLS_3 = {
  span: 24,
  id: "form_xx_3",
  label: "离职时间",
  placeholder: "请选择日期",
  type: "date",
  valueFormat: "yyyy-MM-dd",
};
const FORM_COLS_4 = {
  span: 24,
  id: "form_xx_4",
  label: "手机号",
  placeholder: "请输入手机号",
  type: "text",
};
const FORM_COLS_5 = {
  span: 24,
  id: "form_xx_5",
  label: "身份证号",
  placeholder: "请输入身份证号",
  type: "text",
};
const FORM_COLS_6 = {
  span: 24,
  id: "form_xx_6",
  label: "薪酬",
  placeholder: "请输入薪酬",
  type: "text",
};

const formColumns = [
  FORM_COLS_1,
  FORM_COLS_2,
  FORM_COLS_3,
  FORM_COLS_4,
  FORM_COLS_5,
  FORM_COLS_6
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
        message: "请输入姓名",
        trigger: "change",
      },
    ],
    form_xx_2: [
      {
        required: true,
        message: "请选择日期",
        trigger: "change",
      },
    ],
    form_xx_3: [
      {
        required: true,
        message: "请选择日期",
        trigger: "change",
      },
    ],
    form_xx_4: [
      {
        required: true,
        message: "请输入手机号",
        trigger: "change",
      },
    ],
    form_xx_5: [
      {
        required: true,
        message: "请输入身份证号",
        trigger: "change",
      },
    ],
    form_xx_6: [
      {
        required: true,
        message: "请输入薪酬",
        trigger: "change",
      },
    ]
  }
};