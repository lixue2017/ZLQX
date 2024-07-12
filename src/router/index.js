import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: 路由配置项
 *
 * hidden: true                   // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true               // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 *                                // 若你想不管路由下面的 children 声明的个数都显示你的根路由
 *                                // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noRedirect           // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'             // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * meta : {
    noCache: true                // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    title: 'title'               // 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'             // 设置该路由的图标，对应路径src/assets/icons/svg
    breadcrumb: false            // 如果设置为false，则不会在breadcrumb面包屑中显示
  }
 */

// 公共路由
export const constantRoutes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: (resolve) => require(["@/views/redirect"], resolve),
      },
    ],
  },
  {
    path: "/staffLogin",
    component: (resolve) => require(["@/views/staffLogin"], resolve),
    hidden: true,
  },
  {
    path: "",
    component: Layout,
    redirect: "index",
    children: [
      {
        path: "index",
        component: (resolve) => require(["@/views/index"], resolve),
        name: "首页",
        meta: { title: "首页", icon: "dashboard", noCache: true, affix: true },
      },
    ],
  },
  {
    name: "AdminManage",
    path: "/adminManage",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "adminList",
        component: (resolve) => require(["@/views/adminManage/adminList/index"], resolve),
        name: "账号列表",
        meta: { title: "账号列表", icon: "dashboard", noCache: true, affix: true },
      },
      {
        path: "roleList",
        component: (resolve) => require(["@/views/adminManage/roleList/index"], resolve),
        name: "角色列表",
        meta: { title: "角色列表", icon: "dashboard", noCache: true, affix: true },
      },
      {
        path: "userList",
        component: (resolve) => require(["@/views/adminManage/userList/index"], resolve),
        name: "人员列表",
        meta: { title: "人员列表", icon: "dashboard", noCache: true, affix: true },
      },
    ],
  },
  {
    name: "AdminManage",
    path: "/adminManage",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "adminList",
        component: (resolve) => require(["@/views/adminManage/adminList/index"], resolve),
        name: "账号列表",
        meta: { title: "账号列表", icon: "dashboard", noCache: true, affix: true },
      },
      {
        path: "roleList",
        component: (resolve) => require(["@/views/adminManage/roleList/index"], resolve),
        name: "角色列表",
        meta: { title: "角色列表", icon: "dashboard", noCache: true, affix: true },
      },
    ],
  },
  {
    name: "AssetManage",
    path: "/assetManage",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "warehouseManage",
        component: (resolve) => require(["@/views/assetManage/warehouseManage/index"], resolve),
        name: "入库管理",
        meta: { title: "入库管理", icon: "dashboard", noCache: true, affix: true },
      },
      {
        path: "salesManage",
        component: (resolve) => require(["@/views/assetManage/salesManage/index"], resolve),
        name: "销售管理",
        meta: { title: "销售管理", icon: "dashboard", noCache: true, affix: true },
      },
    ],
  },
];

export default new Router({
  mode: "history", // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
});
