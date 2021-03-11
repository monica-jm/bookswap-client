import React from "react"
import { Link } from 'react-router-dom'
import { useAuthInfo } from "../hooks/authContext"
import { GoogleOutlined, FacebookOutlined, getTwoToneColor, setTwoToneColor } from '@ant-design/icons'
import { Form, Typography, Col, Row, Button, Input, Divider, message } from "antd"

const { Text } = Typography;

setTwoToneColor('#eb2f96');
getTwoToneColor('#eb2f96');

function Signup() {
  const [form] = Form.useForm()
  const { signup } = useAuthInfo()

  async function handleSubmit(userInfo) {
    try{
      await signup(userInfo)
      message.succes('Account created')
    }catch(error){
      message.error(error.response.data.message)
  }
}

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={{ span: 5, offset: 9 }}>
        <Typography.Title level={1}>Signup</Typography.Title>
        <Form form={form} onFinish={handleSubmit} layout='vertical'>
        <Form.Item name='username' label='Username:'>
            <Input type='text' />
          </Form.Item>
          <Form.Item name='email' label='Email:'>
            <Input type='email' />
          </Form.Item>
          <Form.Item name='password' label='Password:'>
            <Input.Password />
          </Form.Item>
          <Button type='primary' htmlType='submit' block size='large'>
            Signup
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
            <Col span={24} align="middle" className="changeAuth">
              <Text>
                Already have an account? <Link to='/auth'>Login</Link>
              </Text>
            </Col>
          </Row>
      </Col>
    </Row>
  )
}

export default Signup