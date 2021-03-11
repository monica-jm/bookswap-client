import React from "react"
import { Link } from 'react-router-dom'
import { useAuthInfo } from "../hooks/authContext"
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import { Form, Typography, Col, Row, Button, Input, Divider } from "antd"

const { Text } = Typography;

function Login() {
  const [form] = Form.useForm()
  const { login } = useAuthInfo()

  async function handleSubmit(userInfo) {
    await login(userInfo)
  }

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={{ span: 5, offset: 9 }}>
        <Typography.Title level={1}>Login</Typography.Title>
        <Form form={form} onFinish={handleSubmit} layout='vertical'>
          <Form.Item name='email' label='Email:'>
            <Input type='email' />
          </Form.Item>
          <Form.Item name='password' label='Password:'>
            <Input.Password />
          </Form.Item>
          <Button type='primary' htmlType='submit' block size='large'>
            Login
          </Button>
        </Form>
        <Divider id="socialStrategies">Or log in with</Divider>
          <Row gutter={[48, 8]} justify="space-between">
            <Col align="center">
              <div style={{width:60, height:60, borderRadius:50, display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#DB4437"}}>
                <a href="http://localhost:3001/auth/google">
                  <GoogleOutlined style={{fontSize: "1.8rem", color:"white"}}/>
                </a>
              </div>
            </Col>
       
            <Col align="center">
              <div style={{width:60, height:60, borderRadius:50, display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#4267B2"}}>
                <a href="http://localhost:3001/auth/facebook">
                  <FacebookOutlined style={{fontSize: "1.8rem", color:"white"}}/>
                </a>
              </div>
            </Col>
            <Col span={24} align="middle">
              <Text>
                Don't have an account? <Link to='/signup'>Sign up here!</Link>
              </Text>
            </Col>
          </Row>
      </Col>
    </Row>
  )
}

export default Login