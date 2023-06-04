import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '蚂蚁集团体验技术部出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <>
      <DefaultFooter
        copyright={`jimmy-知识星球`}
        links={[
          {
            key: 'Ant Design Pro',
            title: '前端加油站',
            href: 'https://blog.jimmyxuexue.top/',
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
      <div
        className=" text-center  -mt-5 pb-3 cursor-pointer"
        onClick={() => window.open('https://beian.miit.gov.cn/')}
        style={{
          color: 'rgba(0, 0, 0, 0.45)',
        }}
      >
        {currentYear} {defaultMessage}
      </div>
    </>
  );
};

export default Footer;
