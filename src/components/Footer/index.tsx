import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const defaultMessage = '闽ICP备2021016313号-1';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: '前端加油站',
          href: 'http://www.jimmyxuexue.top:999/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/Jimmylxue',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: '联系站长',
          href: 'http://www.jimmyxuexue.top:999/',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
