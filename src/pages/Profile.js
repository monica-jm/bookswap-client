import React from "react";
import { useAuthInfo } from '../hooks/authContext';
// import { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom'
import {
  Typography,
  Col,
  Row,
  Avatar,
  Button,
  Modal,
  Upload,
  Rate,
  Card,
  Skeleton, 
  Switch
} from "antd"
import { LoadingOutlined, PlusOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons"
import axios from "axios"
// import { updateAvatar } from "../services/auth"

const { Title, Text } = Typography
const { Meta } = Card;

function Profile() {

  const { user } = useAuthInfo()
  
  return user ? (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={{ span: 12 }}>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}>
      <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title="Card title"
        description="This is the description"
      />
    </Card>,
    mountNode,
      </Col>
    </Row>
  ): <Redirect to='/login'/>
}

export default Profile