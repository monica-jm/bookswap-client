import { useEffect, useState } from "react"
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
import {HeartOutlined, MoreOutlined, MailOutlined } from "@ant-design/icons"
import { updateAvatar } from "../services/auth"
import { updateBookmarks } from "../services/book"
import axios from "axios"

const { Meta } = Card;
const geekBlue = 'geekblue';

function Bookmarks() {
  const { user, setUser } = useAuthInfo()
  const { book, setBook } = useState(null)

  useEffect (() =>{
    async function updateBookmarks(user, book){

    }
    updateBookmarks()
  }, [])


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
  console.log(user.bookmarks)

  const bookmarked = () => {

  };
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
                description="Here are some books you've bookmarked"/>
        </Card>
      </Col>
        ):(
          <Col xs={24} sm={24} md={{ span: 16, offset: 4 }}>
          <Skeleton active/>          
          </Col>
        )}
      {user.bookmarks ? (
        user.bookmarks.map(book => (
            <Col xs={24} sm={24} md={{ span:8}} key={book._id}> 
              <Card
                hoverable
                cover={
                  <img
                    alt="Book Cover"
                    src={book.bookCover}   
                  />
                }
                actions={[
                  <Tooltip title="Send swap request" placement="top" color={geekBlue}>
                    <MailOutlined key="swap"/>
                  </Tooltip>,
                  <Tooltip title="Remove bookmark" placement="top" color={geekBlue}>
                     <HeartOutlined name="bookmarks" key="bookmark" onClick={bookmarked}/>
                  </Tooltip>,
                  <Tooltip title="See the review" placement="top" color={geekBlue}>
                    <MoreOutlined key="more" onClick={showModal}/>
                  </Tooltip>
                ]}
              >
                <Meta
                  title={`${book.title}`}
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

export default Bookmarks