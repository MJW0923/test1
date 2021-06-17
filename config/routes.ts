export default [
  // {
  //   exact: true, //严格匹配
  //   path: '/',
  //   component: '../pages/Home',
  //   title: 'home',
  // },
  {
    exact: true, //严格匹配
    path: '/home',
    component: '@/pages/Home',
    title: 'home',
  },
  {
    exact: true, //严格匹配
    path: '/list',
    component: '@/pages/List',
    title: 'list',
  },
  {
    exact: true, //严格匹配
    path: '/users/:name',
    component: '@/pages/users/$name.tsx',
    title: 'users',
  },
];
