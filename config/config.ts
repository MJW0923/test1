import { IConfig, defineConfig } from 'umi';
import routes from './routes';

const config: IConfig = {
  targets: {
    android: 5,
    ios: 7,
  },
  hash: true,
  base: '/demo/',
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  routes: routes,
  ignoreMomentLocale: true,
  antd: {},
  dva: {
    hmr: true,
  },
  links: [{ rel: 'icon', href: './assets/icon.png' }], //本地icon存放在public目录下
  outputPath: './dist',
  // exportStatic: {
  //   dynamicRoot: true,
  // },
};

export default defineConfig(config);
