
const FORM_COLS_1 = {
  span: 24,
  id: "form_xx_1",
  label: "角色名称",
  placeholder: "请输入角色名称",
  type: "select",
  options: [{
    label: "系统管理员",
    value: 1
  }, {
    label: "xx角色",
    value: 2
  }, {
    label: "xx角色2",
    value: 3
  }]
};

const formColumns = [
  FORM_COLS_1,
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
        message: "请输入角色名称",
        trigger: "change",
      },
    ]
  }
};