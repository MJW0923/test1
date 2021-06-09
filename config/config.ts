import { IConfig } from 'umi';
import routes from './routes';

const config: IConfig = {
  targets: {
    android: 5,
    // chrome: 49,//默认49
    // edge: 13,//默认13
    firefox: 45,
    ie: 9,
    ios: 7,
    // safari: 10,//默认10
  },
  base: '/demo/',
  publicPath: './',
  history: { type: 'hash' },
  // history: { type: 'browser' },
  // exportStatic: {
  //   htmlSuffix: true,
  //   dynamicRoot: true,
  // },
  hash: true,
  ignoreMomentLocale: true,
  routes: routes,
  antd: {},
  dva: {},
  links: [{ rel: 'icon', href: './assets/icon.png' }], //本地icon存放在public目录下
  outputPath: './dist',

  // alias: {
  //   '@': require('path').resolve(__dirname, 'src'),//umi 默认src目录
  // },
};

export default config;
