import { FC } from 'react';

const PostItem: FC = () => {
  return (
    <section className="border-b p-5 flex  items-center hover:bg-gray-50">
      <div className="flex">
        <a href="" className="mr-3 rounded-md flex-shrink-0">
          <img
            src="https://vitepress-source.oss-cn-beijing.aliyuncs.com/typoraimage-20220326203849385.png"
            className="flex rounded-md object-cover shadow-sm overflow-hidden box-border w-12 h-12"
          />
        </a>
      </div>
      <div className="flex flex-col justify-between">
        <a href="/front/topic/show?id=162" className="text-base font-medium">
          新人请走进这个小屋来，有点事要和你说
        </a>
        <div className="text-light text-gray-500 text-sm font-normal flex items-center">
          <span className="badge bg-azure mr-2">推荐</span>
          <a href="/space/activity?id=1" className="">
            向军大叔
          </a>{' '}
          更新于 7 小时前
        </div>
      </div>
    </section>
  );
};

export default PostItem;
