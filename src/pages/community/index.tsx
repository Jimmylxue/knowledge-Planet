import { Pagination, Button } from 'antd';
import PostItem from './components/Post';
import './index.less';

const Community = () => {
  return (
    <div className="community flex items-start">
      <div className="md:w-9/12 mr-3 border bg-white">
        <h2 className="text-base px-6 py-5 border-b">社区动态</h2>

        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <div className="page-container flex justify-end py-4 pr-2">
          <Pagination
            total={85}
            showTotal={(total) => `Total ${total} items`}
            defaultPageSize={20}
            defaultCurrent={1}
          />
        </div>
      </div>
      <div className="rights md:w-3/12">
        <div className="border bg-white mb-3 mt-3 md:mt-0">
          <h2 className="text-base p-5 border-b text-gray-600">社区小贴</h2>
          <div className="p-5">
            <div className="-mb-5">
              <div className="mb-3 font-normal text-base">
                Knowledge Planet 前端程序员交流分享平台。
              </div>
              <div className="text-center">
                <span className="text-base font-normal">坚信</span>
                <div className="text-red-600">永远相信，美好的事情即将发生</div>
              </div>
              <div className="-mx-5 mt-5 py-3 bg-gray-100 text-center border-t">
                <Button className="mr-1" type="primary">
                  发帖交流
                </Button>
                <Button className="ml-1" type="primary">
                  签到打卡
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="border bg-white">
          <h2 className="p-5 border-b text-gray-600"> 学习动态 </h2>
          <div className="p-5">
            <div className="-m-5">
              <div className="border-b p-5 py-5 flex items-stretch hover:bg-gray-50">
                <a href="/space/activity?id=49213" class="block flex flex-shrink-0 w-10 h-10">
                  <img
                    src="https://www.houdunren.com/images/boy.png"
                    class="object-cover rounded-md w-10 h-10"
                  />
                </a>
                <a
                  href="/front/video/show?id=13661"
                  class="ml-2 flex flex-col justify-between truncate"
                >
                  <div class="truncate text-base">6 setup中组件事件调用</div>
                  <div class="text-gray-500 text-xs">
                    <a href="/space/activity?id=49213" class="">
                      ⠀
                    </a>
                    <i class="far fa-clock"></i> 4 分钟前
                  </div>
                </a>
              </div>
              <div className="border-b p-5 py-5 flex items-stretch hover:bg-gray-50">
                <a href="/space/activity?id=48357" className="block flex flex-shrink-0 w-10 h-10">
                  <img
                    src="https://www.houdunren.com/images/boy.png"
                    className="object-cover rounded-md w-10 h-10"
                  />
                </a>
                <a
                  href="/front/video/show?id=13072"
                  className="ml-2 flex flex-col justify-between truncate"
                >
                  <div className="truncate text-base">20 封装日期格式化函数</div>
                  <div className="text-gray-500 text-xs">
                    <a href="/space/activity?id=48357" class="">
                      Wysiwyg。
                    </a>
                    <i className="far fa-clock"></i> 4 分钟前
                  </div>
                </a>
              </div>
              <div className="border-b p-5 py-5 flex items-stretch hover:bg-gray-50">
                <a href="/space/activity?id=48357" className="block flex flex-shrink-0 w-10 h-10">
                  <img
                    src="https://www.houdunren.com/images/boy.png"
                    className="object-cover rounded-md w-10 h-10"
                  />
                </a>
                <a
                  href="/front/video/show?id=13072"
                  className="ml-2 flex flex-col justify-between truncate"
                >
                  <div className="truncate text-base">20 封装日期格式化函数</div>
                  <div className="text-gray-500 text-xs">
                    <a href="/space/activity?id=48357" class="">
                      Wysiwyg。
                    </a>
                    <i className="far fa-clock"></i> 4 分钟前
                  </div>
                </a>
              </div>
              <div className="border-b p-5 py-5 flex items-stretch hover:bg-gray-50">
                <a href="/space/activity?id=48357" className="block flex flex-shrink-0 w-10 h-10">
                  <img
                    src="https://www.houdunren.com/images/boy.png"
                    className="object-cover rounded-md w-10 h-10"
                  />
                </a>
                <a
                  href="/front/video/show?id=13072"
                  className="ml-2 flex flex-col justify-between truncate"
                >
                  <div className="truncate text-base">20 封装日期格式化函数</div>
                  <div className="text-gray-500 text-xs">
                    <a href="/space/activity?id=48357" class="">
                      Wysiwyg。
                    </a>
                    <i className="far fa-clock"></i> 4 分钟前
                  </div>
                </a>
              </div>
              <div className="border-b p-5 py-5 flex items-stretch hover:bg-gray-50">
                <a href="/space/activity?id=48357" className="block flex flex-shrink-0 w-10 h-10">
                  <img
                    src="https://www.houdunren.com/images/boy.png"
                    className="object-cover rounded-md w-10 h-10"
                  />
                </a>
                <a
                  href="/front/video/show?id=13072"
                  className="ml-2 flex flex-col justify-between truncate"
                >
                  <div className="truncate text-base">20 封装日期格式化函数</div>
                  <div className="text-gray-500 text-xs">
                    <a href="/space/activity?id=48357" class="">
                      Wysiwyg。
                    </a>
                    <i className="far fa-clock"></i> 4 分钟前
                  </div>
                </a>
              </div>
              <div className="border-b p-5 py-5 flex items-stretch hover:bg-gray-50">
                <a href="/space/activity?id=48357" className="block flex flex-shrink-0 w-10 h-10">
                  <img
                    src="https://www.houdunren.com/images/boy.png"
                    className="object-cover rounded-md w-10 h-10"
                  />
                </a>
                <a
                  href="/front/video/show?id=13072"
                  className="ml-2 flex flex-col justify-between truncate"
                >
                  <div className="truncate text-base">20 封装日期格式化函数</div>
                  <div className="text-gray-500 text-xs">
                    <a href="/space/activity?id=48357" class="">
                      Wysiwyg。
                    </a>
                    <i className="far fa-clock"></i> 4 分钟前
                  </div>
                </a>
              </div>
              <div className="border-b p-5 py-5 flex items-stretch hover:bg-gray-50">
                <a href="/space/activity?id=48357" className="block flex flex-shrink-0 w-10 h-10">
                  <img
                    src="https://www.houdunren.com/images/boy.png"
                    className="object-cover rounded-md w-10 h-10"
                  />
                </a>
                <a
                  href="/front/video/show?id=13072"
                  className="ml-2 flex flex-col justify-between truncate"
                >
                  <div className="truncate text-base">20 封装日期格式化函数</div>
                  <div className="text-gray-500 text-xs">
                    <a href="/space/activity?id=48357" class="">
                      Wysiwyg。
                    </a>
                    <i className="far fa-clock"></i> 4 分钟前
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
