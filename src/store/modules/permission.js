import { constantRoutes } from '@/router'
import { getRouters } from '@/api/menu'
import Layout from '@/layout/index'

const pathArr = []
const comNameArr = []
const permission = {
  state: {
    routes: [],
    addRoutes: [],
    routesCollect: {
      path: [],
      name: []
    }
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      state.routes = constantRoutes.concat(routes)
    },
    SET_ROUTES_LIST: (state, routes) => {
      state.routesCollect = routes
    },
  },
  actions: {
    // 生成路由
    GenerateRoutes({ commit }) {
      const accessedRoutes = [{
        "name": "AdminManage",
        "path": "/adminManage",
        "hidden": false,
        "redirect": "noRedirect",
        "component": Layout,
        "alwaysShow": true,
        "meta": {
          "title": "账号管理",
          "icon": "Frame-1.png",
          "noCache": false
        },
        children: [
          {
            path: "adminList",
            component: (resolve) => require(["@/views/adminManage/adminList/index"], resolve),
            name: "账号列表",
            meta: { title: "账号列表", icon: "", noCache: true, affix: true },
          },
          {
            path: "roleList",
            component: (resolve) => require(["@/views/adminManage/roleList/index"], resolve),
            name: "角色列表",
            meta: { title: "角色列表", icon: "", noCache: true, affix: true },
          },
          {
            path: "userList",
            component: (resolve) => require(["@/views/adminManage/userList/index"], resolve),
            name: "人员列表",
            meta: { title: "人员列表", icon: "", noCache: true, affix: true },
          },
        ],
      }, {
        "name": "AssetManage",
        "path": "/assetManage",
        "hidden": false,
        "redirect": "noRedirect",
        "component": Layout,
        "alwaysShow": true,
        "meta": {
          "title": "资产管理",
          "icon": "Frame.png",
          "noCache": false
        },
        children: [
          {
            path: "warehouseManage",
            component: (resolve) => require(["@/views/assetManage/warehouseManage/index"], resolve),
            name: "入库管理",
            meta: { title: "入库管理", icon: "", noCache: true, affix: true },
          },
          {
            path: "salesManage",
            component: (resolve) => require(["@/views/assetManage/salesManage/index"], resolve),
            name: "销售管理",
            meta: { title: "销售管理", icon: "", noCache: true, affix: true },
          },
        ],
      },
      ]

      return new Promise(resolve => {
        accessedRoutes.push({ path: '*', redirect: '/404', hidden: true })
        commit('SET_ROUTES', accessedRoutes)
        commit('SET_ROUTES_LIST', {
          path: [...new Set(pathArr)],
          name: [...new Set(comNameArr)],
        })
        resolve(accessedRoutes)
        // 向后端请求路由数据
        // getRouters().then(res => {
        //   const accessedRoutes = filterAsyncRouter(res.data)
        //   accessedRoutes.push({ path: '*', redirect: '/404', hidden: true })
        //   commit('SET_ROUTES', accessedRoutes)
        //   commit('SET_ROUTES_LIST', {
        //     path: [...new Set(pathArr)],
        //     name: [...new Set(comNameArr)],
        //   })
        //   resolve(accessedRoutes)
        // })
      })
    }
  }
}
// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap, parentsName = []) {
  return asyncRouterMap.filter(route => {
    const path = route.path.replace(/\//g, "")
    if (route.component) {
      // Layout组件特殊处理
      if (route.component === 'Layout') {
        route.component = Layout
      } else {
        if (!route.children) {
          pathArr.push(`/${[...parentsName, path].join("/")}`)
          comNameArr.push(route.name)
        }
        route.component = loadView(route.component)
      }
    }
    if (route.children != null && route.children && route.children.length) {
      const pathName = path ? [...parentsName, path] : parentsName
      route.children = filterAsyncRouter(route.children, pathName)
    }
    return true
  })
}

export const loadView = (view) => { // 路由懒加载
  return (resolve) => require([`@/views/${view}`], resolve)
}

export default permission
