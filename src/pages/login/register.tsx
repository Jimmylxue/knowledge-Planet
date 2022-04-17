import { FC, useState } from 'react';
import { Form, Input, Button, Upload, message } from 'antd';
import UploadImg from '@/components/Upload';
import './index.less';

const LoginPage: FC = () => {
  const [form] = Form.useForm();
  const onFinish = () => {};
  const getImgUrl = (url: string) => {
    console.log(url);
  };
  return (
    <>
      {/* <div className="login-app fixed top-0 left-0"> */}
      <div className="login-app">
        <div className="app">
          <div
            className=" h-screen w-screen"
            style={{
              background:
                'url("https://vitepress-source.oss-cn-beijing.aliyuncs.com/typora01.jpg") center center no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
              <div
                className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0"
                style={{ height: 500 }}
              >
                <div
                  className="hidden md:block md:w-1/2 rounded-r-lg"
                  style={{
                    background:
                      'url("https://vitepress-source.oss-cn-beijing.aliyuncs.com/typoralogin.jpeg") center center no-repeat',
                    backgroundSize: 'cover',
                  }}
                ></div>
                <div className="flex flex-col w-full md:w-1/2 p-4">
                  <div className="flex flex-col flex-1 justify-center mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">注册</h2>

                    <div className="w-full mt-4">
                      <Form
                        // className='flex'
                        form={form}
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                      >
                        {/* <Form.Item className="flex justify-center" name="img"> */}
                        <div className="flex justify-center ">
                          <UploadImg type="avatar" onSuccess={getImgUrl} />
                        </div>

                        {/* </Form.Item> */}
                        <Form.Item
                          className="flex justify-center"
                          name="username"
                          rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                          <Input placeholder="请输入邮箱或手机号" />
                        </Form.Item>
                        <Form.Item
                          className="flex justify-center"
                          name="username"
                          rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                          <Input placeholder="请输入昵称" />
                        </Form.Item>
                        <Form.Item
                          className="flex justify-center"
                          name="password"
                          rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                          <Input placeholder="请输入密码" />
                        </Form.Item>
                        <Form.Item
                          className="flex justify-center"
                          name="username"
                          rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                          <Input placeholder="请再次确认密码" />
                        </Form.Item>
                        <Form.Item className="flex justify-center">
                          <Button className="primary" type="primary" block>
                            登录
                          </Button>
                        </Form.Item>
                        <div className="flex justify-center">
                          <Button className="primary" type="primary" shape="circle">
                            A
                          </Button>
                        </div>
                        <div className="text-center mt-4">
                          <a className="no-underline hover:underline text-blue-dark text-xs">
                            找回密码
                          </a>
                          <span className="px-1"></span>
                          <a className="no-underline hover:underline text-blue-dark text-xs">
                            找回密码
                          </a>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
