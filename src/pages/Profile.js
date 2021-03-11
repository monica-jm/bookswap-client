import { useState } from "react"
import { useAuthInfo } from '../hooks/authContext';
// import { useState, useEffect } from "react";
import {
  Col,
  Row,
  Avatar,
  Card,
  Skeleton, 
  Upload,
  Divider,
  Tooltip,
  Modal
} from "antd"
import { LoadingOutlined, PlusOutlined, EditOutlined, DeleteOutlined, MoreOutlined } from "@ant-design/icons"
import { updateAvatar } from "../services/auth"
import axios from "axios"

const { Meta } = Card;
const geekBlue = 'geekblue';

function Profile() {

  const { user, setUser } = useAuthInfo()
  const [loading, setLoading] = useState(false)

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Add avatar</div>
    </div>
  )

  const handleChange = async file => {
    const fdata = new FormData()
    fdata.append("file", file)
    //                                             cloudname 👇         👇 resource type
    const cloudinaryApi = "https://api.cloudinary.com/v1_1/dyvopd0iz/image/upload"
    fdata.append("upload_preset", "BookSwapp")
    setLoading(true)
    const { data } = await axios.post(cloudinaryApi, fdata)
    const { data: user } = await updateAvatar(data.secure_url)
    setLoading(false)
    setUser(user)
  }
  console.log(user.bookshelf)
  return (
    <Row gutter={[16, 16]}>
      {user ? (
      <Col xs={24} sm={24} md={{ span: 24 }}>
        <Card
          style={{ width:"100%", marginTop: 16 }}>
          <Meta
                style={{textAlign:"left"}}
                avatar= {<Avatar src={user.avatar} style={{width:"55px", height:"55px"}}/>}
                title= {`Hi ${user.username}`}
                description="Welcome to your Bookshelf"/>
          <Col span={24}>
          <Divider />
            <Upload
                  name='avatar'
                  showUploadList={false}
                  beforeUpload={handleChange}
                  listType='picture-card'
                  className='avatar-uploader'
                >
                  {uploadButton}
            </Upload>
          </Col>
        </Card>
      </Col>
        ):(
          <Col xs={24} sm={24} md={{ span: 16, offset: 4 }}>
          <Skeleton active/>          
          </Col>
        )}
      {user.bookshelf ? (
        user.bookshelf.map(book => (
            <Col xs={24} sm={24} md={{ span:8}} key={book._id}> 
              <Card
                hoverable
                cover={
                  <img
                    alt="Book Cover"
                    src={book.bookCover}
                    style={{height:'300px', objectFit: 'contain', paddingTop: '10px'}}
                    
                  />
                }
                actions={[
                  <Tooltip title="Edit" placement="top" color={geekBlue}>
                    <EditOutlined key="edit" />
                  </Tooltip>,
                  <Tooltip title="Delete book" placement="top" color={geekBlue}>
                    <DeleteOutlined key="delete" />           
                  </Tooltip>,
                  <Tooltip title="See the review" placement="top" color={geekBlue}>
                    <MoreOutlined key="more" onClick={showModal}/>
                </Tooltip>
                ]}
              >
                <Meta
                  title={`${book.title}`}
                  description={book.author}
                />
                <Modal title={`${book.title}`} footer={false} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {book.review}
              </Modal>
              </Card>
            </Col>
        ))
      ) : (
        <Col span={16} offset={4}>
          <Skeleton active />     
        </Col> 
      )}
    </Row>
  )
}

export default Profile