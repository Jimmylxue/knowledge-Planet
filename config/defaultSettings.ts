import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#42b883', // 主题颜色
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Knowledge Planet',
  pwa: false,
  logo: 'https://vitepress-source.oss-cn-beijing.aliyuncs.com/typoraimage-20220326203849385.png',
  iconfontUrl: ' ',
};

export default Settings;
