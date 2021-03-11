import { Link, Redirect } from "react-router-dom"
import { useAuthInfo } from "../hooks/authContext"
import { useState } from "react"
import { Layout, Menu, Avatar, Button, Tooltip, Col, Row , Modal} from "antd"
import {
    BookOutlined,
    PlusOutlined

  } from '@ant-design/icons';
import {AddBookForm, Logo, EyeMove} from "./";

const { Content, Sider, Header, Footer } = Layout
const geekBlue = 'geekblue';

function LayoutApp({ children }) {
  const { user, logout } = useAuthInfo()
  const [ShowModal, setShowModal] = useState(false)

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false )

  return (
    <Layout className='layout'style={{backgroundColor:"white"}}>
         <Header style={{backgroundColor:'white',boxShadow:'5px 5px 10px rgba(178, 178, 178, .30)', zIndex: 1}}>
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['4']}>
                {user && (
                    <>
                    <Menu.Item key='1'>
                        <Link to='/profile'>
                        <Avatar alt='avatar' src={user.avatar} size='small' />
                        &nbsp;&nbsp;&nbsp;{user.username}
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='2'>
                        <Link to='/book/bookmarks'>Bookmarks</Link>       
                    </Menu.Item>
                    </>
                )}   
                <Menu.Item key='3'>
                    <Link to='/'>About</Link>
                </Menu.Item>
                <Menu.Item key='4'>
                    <Link to='/book/explore'>Explore</Link>
                </Menu.Item>
                {!user && (
                    <>
                    <Menu.Item key='5'>
                        <Link to='/auth'>Login</Link>
                    </Menu.Item>
                    </>
                )}
                {user ? (
                    <>
                    <Menu.Item key='6' onClick={() => logout()}>
                        Logout
                    </Menu.Item>
                    </>
                ):(
                    <Redirect to='/'/>
                )}              
                </Menu>
        </Header>
        <Layout className="site-layout" style={{ marginLeft: 40, marginRight:0, backgroundColor:"white"}}>
            <Content style={{overflow: 'initial', height: "100vh"}}>
                <Row>
                <Col s={24} sm={24} md={{ span: 1}}>
                <div className="logo" style={{  }}>
                {user && (
                    <>
                    <Tooltip title="Add a Book" placement="right" color={geekBlue}>
                    <Button icon={<EyeMove/>} onClick={openModal} style={{backgroundColor:"white", borderWidth:0 }}> 
                    <h2 style={{paddingTop:90}}>BookSwapp</h2>
                    </Button></Tooltip>
                     </>
                )}
                </div>
                </Col>
                <Col s={24} sm={24} md={{ span: 16, offset: 3 }}>
                    <div className="site-layout-background" style={{ padding: 24, textAlign: 'center'}}>
                        {children}
                    </div>
                </Col>
                </Row>
            </Content>  
            <Col s={24} sm={24} md={{ span: 24, offset: 4 }}>
                <>
                <Modal
                onCancel={closeModal} 
                visible={ShowModal} 
                style={{width:"100%"}}
                footer={false}
                >
                     <AddBookForm closeModal={closeModal}></AddBookForm>
                </Modal>
                </>
            </Col>
        </Layout>
    </Layout>
  )
}

export default LayoutApp