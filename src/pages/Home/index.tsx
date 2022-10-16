import { Button, message } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import { GithubContributions } from 'github-contributions-react';
import { projects, otherSite } from './const';
import './index.less';
import { useEffect } from 'react';

const HomePage = () => {
  const initEvent = () => {
    async function getEvents(username: string) {
      const events = [];
      let page = 1;

      do {
        const url = `https://api.github.com/users/${username}/events?page=${page}`;
        var body = await fetch(url).then((res) => res.json());
        page++;
        events.push(...body);
      } while (!body.length);

      return events;
    }

    (async () => {
      const events = await getEvents('Jimmylxue');

      console.log('Overall Events', events.length);
      console.log(
        'PullRequests',
        events.filter((event) => event.type === 'PullRequestEvent').length,
      );
      console.log('Forks', events.filter((event) => event.type === 'ForkEvent').length);
      console.log('Issues', events.filter((event) => event.type === 'IssuesEvent').length);
      console.log(
        'Reviews',
        events.filter((event) => event.type === 'PullRequestReviewEvent').length,
      );
    })();
  };

  useEffect(() => {
    // initEvent();
  }, []);

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
      <div className="dz-git-show">
        <GithubContributions username="Jimmylxue" color="rgb(66, 184, 131)" />
      </div>
    </div>
  );
};

export default HomePage;
