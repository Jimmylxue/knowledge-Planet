import { useState, FC } from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import './index.less';

interface Props {
  onSuccess: (imgUrl: string) => void;
  type: 'avatar' | 'base';
}

const UploadImg: FC<Props> = ({ type, onSuccess }) => {
  const [imageUrl, setImgUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const uploadButton = (
    <div className="flex justify-center">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}></div>
    </div>
  );
  const getBase64 = (img: any, callback: any) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const beforeUpload = (file: File) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };
  const handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }

    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (imgUrl: string) => {
        setImgUrl(imgUrl);
        setLoading(false);
      });
      onSuccess(info?.fileList[0]?.response?.data);
    }
  };
  return (
    <div>
      <Upload
        // style={{ width: type === 'avatar' ? 50 : 10 }}

        name="img"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="http://127.0.0.1:9999/upload/uploadImage"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    </div>
  );
};

export default UploadImg;
