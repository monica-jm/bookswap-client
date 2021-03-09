import { Link } from "react-router-dom"
import { useAuthInfo } from "../hooks/authContext"
import { Layout, Menu, Avatar } from "antd"
import {
    BookOutlined,

  } from '@ant-design/icons';

const { Content, Footer, Sider } = Layout


function LayoutApp({ children }) {
  const { user, logout } = useAuthInfo()

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
                        &nbsp;&nbsp;Bookshelf
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='2' icon={<BookOutlined />}>
                        <Link to='/bookmarks'>Bookmarks</Link>       
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
                {user && (
                    <>
                    <Menu.Item key='6' onClick={() => logout()}>
                        Logout
                    </Menu.Item>
                    </>
                )}
                </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial', height: "calc(100vh - 64px)"}}>
                <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                {children}
                </div>
            </Content>  
            <Footer style={{ textAlign: "center" }}>by Mónica JM</Footer> 
        </Layout>
    </Layout>
  )
}

export default LayoutApp