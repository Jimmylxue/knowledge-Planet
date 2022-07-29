import { Button, message } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import './index.less';

const projects = [
  {
    id: 0,
    name: '诺基亚图片生成器',
    url: 'http://www.jimmyxuexue.top:667/Nokia/',
  },
  {
    id: 1,
    name: '元气提醒',
    url: 'https://github.com/Jimmylxue/Vitality-reminder',
  },
  {
    id: 2,
    name: '水印（马赛克）生成器',
    url: 'https://github.com/Jimmylxue/easy-watermark',
  },
  {
    id: 3,
    name: '雪人消消乐',
    url: 'https://github.com/Jimmylxue/clear-by-egret',
  },
  {
    id: 4,
    name: '笨鸟游戏',
    url: 'https://github.com/Jimmylxue/bird-by-egret',
  },
  {
    id: 5,
    name: '飞机大战',
    url: 'https://github.com/Jimmylxue/aircraft-battle-by-egret',
  },
  {
    id: 6,
    name: '50个前端项目',
    url: 'https://github.com/Jimmylxue/project-small-cases',
  },
];

const otherSite = [
  {
    id: 1,
    name: '前端加油站',
    url: 'http://www.jimmyxuexue.top:999/',
  },
  {
    id: 2,
    name: 'bilibili',
    url: 'https://space.bilibili.com/304985153?spm_id_from=333.1007.0.0',
  },
  {
    id: 3,
    name: '时间管理大师（学习时钟）',
    url: 'http://www.jimmyxuexue.top:667/study/',
  },
  {
    id: 4,
    name: '做图神器',
    url: 'https://www.logoly.pro/#/',
  },
];

const HomePage = () => {
  return (
    <div className="home">
      <div className="logo">
        <img
          src="https://vitepress-source.oss-cn-beijing.aliyuncs.com/typoraimage-20220326203849385.png"
          alt=""
        />
      </div>
      <div className="title mt-10 mb-10">
        <span className="text-5xl main-title">
          Jimmy- <span className=" ">知识星球</span>{' '}
        </span>
        <span className="text-5xl main-title">永远相信，美好的事情即将发生</span>
        <span className=" text-lg text-gray-400 mt-5">
          一个用于分享个人开发成长与交流的个人空间
        </span>
      </div>
      <div className="button-center flex justify-center">
        <Button
          type="primary"
          size="large"
          className=""
          onClick={() => {
            location.href = 'http://www.jimmyxuexue.top:999';
          }}
        >
          在线文档
        </Button>
        <Button
          type="default"
          size="large"
          className="mx-5"
          onClick={() => {
            message.info('敬请期待');
          }}
        >
          {/* <Link to="./welcome">论坛中心</Link> */}
          论坛中心
        </Button>
        <Button
          type="default"
          size="large"
          className=""
          onClick={() => {
            location.href = 'https://space.bilibili.com/304985153?spm_id_from=333.1007.0.0';
          }}
        >
          视频中心
        </Button>
      </div>
      <div className=" links project-links">
        <div className="tag-title text-center">
          <LinkOutlined />
          项目预览
        </div>
        <div className="linkList text-center">
          {projects.map((project) => (
            <Button
              type="link"
              key={project.id}
              onClick={() => {
                window.open(project.url);
              }}
            >
              {/* <Link to={project.url} key={project.id}>
                {project.name}
              </Link> */}
              {project.name}
            </Button>
          ))}
        </div>
      </div>
      <div className="links">
        <div className="tag-title text-center">
          <LinkOutlined />
          其他网站
        </div>
        <div className="linkList text-center">
          {otherSite.map((site) => (
            <Button
              type="link"
              key={site.id}
              onClick={() => {
                window.open(site.url);
              }}
            >
              {/* <Link to={site.url} key={site.id}>
                {site.name}
              </Link> */}
              {site.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
