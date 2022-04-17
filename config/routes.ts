import { AppstoreOutlined } from '@ant-design/icons';

export default [
  { path: '/home', layout: { hideMenu: true }, component: './Home' },
  { path: '/community', layout: { hideMenu: true }, component: './community' },
  { path: '/login', layout: { hideMenu: true, margin: 0 }, component: './login' },
  { path: '/register', layout: { hideMenu: true, margin: 0 }, component: './login/register' },
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user', routes: [{ name: '登录', path: '/user/login', component: './user/Login' }] },
      { component: './404' },
    ],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      { path: '/admin/sub-page', name: '二级管理页', icon: 'smile', component: './Welcome' },
      { component: './404' },
    ],
  },
  { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/home' },
  { component: './404' },
];

export type Config = {
  [key: string]: any;
  path: string;
  name?: string;
  icon?: typeof AppstoreOutlined;
  exact?: boolean;
  redirect?: string;
  hide?: boolean; // 代表子页面 隐藏品牌选择
  hideInMenu?: boolean; // 在菜单中不显示
  hideHeaderContent?: boolean; // 默认为true
  hideChildrenInMenu?: boolean; // 隐藏子页面
  component?: string;
  keepLayout?: boolean; // 嵌套路由
  routes?: Config[];
  remark?: string;
  document?: { url: string; cypher: string };
  alertHideBool?: boolean; // 下拉右边提示是否展示，配合hideHeaderContent，hideHeaderContent为true也隐藏
  disabledShop?: boolean; // 禁止头部门店选择
};

export const EXTERNAL_ROUTES: Config[] = [
  { name: '登录', path: '/login', component: './login', hideInMenu: true },
  {
    name: '营收看板',
    path: '/external/externalStatistics',
    component: './data/revenueStatistics/components/StatisticsWrap',
    hideInMenu: true,
  },
  {
    name: '营收看板',
    path: '/external/externalStatistics/app',
    component: './data/revenueStatistics/components/AppStatisticsWrap',
    hideInMenu: true,
  },
  {
    name: '商品分析',
    path: '/external/productOrCategoryRank',
    component: './data/productOrCategoryRank/components/RankWrap',
    hideInMenu: true,
  },
  {
    name: '商品分析',
    path: '/external/productOrCategoryRank/app',
    component: './data/productOrCategoryRank/components/AppRankWrap',
    hideInMenu: true,
  },
  {
    name: '消息中心',
    path: '/external/message/pos',
    component: './message/pos',
    hideInMenu: true,
  },
  {
    name: '消息中心',
    path: '/external/message/app',
    component: './message/app',
    hideInMenu: true,
  },
];
