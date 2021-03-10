import { Link, Redirect } from "react-router-dom"
import { useAuthInfo } from "../hooks/authContext"
import { useState } from "react"
import { Layout, Menu, Avatar, Button, Tooltip, Col, Row , Modal} from "antd"
import {
    BookOutlined,
    PlusOutlined

  } from '@ant-design/icons';
import AddBookForm from "./AddBookForm";

const { Content, Footer, Sider } = Layout


function LayoutApp({ children }) {
  const { user, logout } = useAuthInfo()
  const [ShowModal, setShowModal] = useState(false)

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false )

  return (
    <Layout className='layout'>
         <Sider
             style={{
             overflow: 'auto',
             height: '100vh',
             position: 'fixed',
             left: 0,
             paddingTop: '64px',
             backgroundColor:'white',
             boxShadow: '5px 5px 10px rgba(178, 178, 178, .30)',
             zIndex: 1,
            }}
            >       
                <div className='logo' />
                <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
                {user && (
                    <>
                    <Menu.Item key='1'>
                        <Link to='/profile'>
                        <Avatar alt='avatar' src={user.avatar} size='small' />
                        &nbsp;&nbsp;{user.username}
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='2' icon={<BookOutlined />}>
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
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200, marginRight: 50, backgroundColor:"white"}}>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial', height: "90vh"}}>
                <Row>
                <Col s={24} sm={24} md={{ span: 16, offset: 4 }}>
                    <div className="site-layout-background" style={{ padding: 24, textAlign: 'center'}}>
                        {children}
                    </div>
                </Col>
                </Row>
            </Content>  
            {user && (
                <Footer style={{ textAlign: "right", height:"10vh"}}>
                    <>
                     <Tooltip title="Add Book">
                         <Button size="large" shape='circle' type='primary' onClick={openModal} style={{ position:"Fixed", margin:"0px"}}><PlusOutlined /></Button>
                    </Tooltip>
                     </>
                </Footer> 
                )}
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