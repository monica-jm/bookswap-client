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
const geekblue = 'geekblue';

function LayoutApp({ children }) {
  const { user, logout } = useAuthInfo()
  const [ShowModal, setShowModal] = useState(false)

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false )

  return (
    <Layout span={24} className='site-layout'style={{backgroundColor:"white"}}>
         <Header style={{ display:'flex', justifyContent:"space-between", alignItems:"center", backgroundColor:'white',boxShadow:'5px 5px 10px rgba(178, 178, 178, .30)'}}>
                <div  className="logo" style={{backgroundColor:"red"}}>
                    <Link to="/">
                        <img style={{width:"550px", position:"absolute"}} src="https://res.cloudinary.com/dyvopd0iz/image/upload/v1615492605/BookSwapp/logo_dtylzm.svg" />
                    </Link>
                    <EyeMove/>
                </div>
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['4']} styles={{textTransform:"uppercase"}}>
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
                    <Menu.Item key='3'>
                        <Link to='/book/explore'>Explore</Link>
                    </Menu.Item>
                    </>
                )}   
                {!user && (
                    <>
                    <Menu.Item key='4'>
                        <Link to='/auth'>Login</Link>
                    </Menu.Item>
                    </>
                )}
                {user ? (
                    <>
                    <Menu.Item key='5' onClick={() => logout()}>
                        Logout
                    </Menu.Item>
                    </>
                ):(
                    <Redirect to='/'/>
                )}              
                </Menu>
        </Header>
            <Content style={{height: "100vh", widht:"100vw"}}>
                <Row gutter={16, 48}>
                <Col s={24} sm={24} md={{ span: 1}}>
                    <div style={{ margin:"90px, 45px", height:60, width:60, position:"fixed", display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"#2f54eb", borderRadius:"50%"}}>
                    {user && (
                        <>
                        <Tooltip title="Add a Book" placement="bottom" color="#061178">
                                <Button style={{border:"none"}} ghost shape="round" icon={<PlusOutlined style={{fontSize:"1.5rem"}}/>} onClick={openModal}/> 
                        </Tooltip>
                        </>
                    )}
                    </div>
                </Col>
                <Col s={24} sm={24} md={{ span: 16, offset: 4 }}>
                    <div style={{ padding: 24, textAlign: 'center'}}>
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
  )
}

export default LayoutApp