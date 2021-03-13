  
import { useState, useEffect } from "react"
import { Col, Row, Card, Typography, Skeleton, Modal, Tooltip, Avatar } from "antd"
import { MoreOutlined, HeartOutlined, MailOutlined } from "@ant-design/icons"
import { getAllBooks, updateBookmarks } from "../services/book"
import { useAuthInfo } from '../hooks/authContext';
import {Search} from "../components"
const { Title, Text } = Typography
const { Meta } = Card;
const geekBlue = 'geekblue';

function Explore() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState(books);
  const { user }  = useAuthInfo() 

  //----------Modal (activar desactivar)----------
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //----------Bookmark o like----------
  const addBookmark = (id) => {
    console.log(id)
    updateBookmarks(id)
  }

  //----------Traer todos los libros de la base de datos----------
  useEffect(() => {
    async function getBooks() {
      const {
        // como sacar datos del usuario de la data del book??
        data: { books }
      } = await getAllBooks()
      setBooks(books)
      setBook(books)
    }
    getBooks()
  }, [])

  //----------Filtrar libros de explore----------
  const [searchTerm, setSearchTerm] = useState("");
  

  const onSearch = (e) =>{
    const newBooks = books.filter(
      (book) => book.title.toLowerCase().includes(e.target.value.toLowerCase())
    ) 
    setBook(newBooks)
  }

  // const filteredBooks = books.filter(function (book) {
  //   return book.title.toLowerCase().includes(searchTerm);
  // });
  // {()=>{filteredBooks(searchTerm)}}
  // const onSearch = value => console.log(value);

  console.log(book)
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card>
          <Search placeholder="Find a book" onSearch={onSearch} value={searchTerm}/>
        </Card>
      </Col>

      {book.length ? book.map((bk)=> 
          <Col xs={{ span: 16 }} md={{ span: 8 }} key={bk._id}>
            <Card
              hoverable
              cover={<img alt='example' src={bk.bookCover} />}
              actions={[
                <Tooltip title="Send swap request" placement="top" color={geekBlue}>
                  <MailOutlined key="swap"/>
                </Tooltip>,
                <Tooltip title="Add to bookmarks" placement="top" color={geekBlue}>
                  <HeartOutlined key="bookmark" onClick={()=>{addBookmark(bk._id)}}/>
                </Tooltip>,
                <Tooltip title="See the review" placement="top" color={geekBlue}>
                  <MoreOutlined key="more" onClick={showModal}/>
                </Tooltip>
              ]}
              title={bk.name}
            >
              <Meta
                  avatar={<Avatar src={bk.owner.avatar} />}
                  title={`${bk.owner.username}`}
                />
              <Title level={4} style={{fontFamily: "Raleway", fontWeight: 500}}>{bk.title}</Title>
              <Text>{bk.author}</Text>
              <Modal title={`Reseña de ${bk.title} por ${user.username}`} footer={false} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {bk.review}
              </Modal>
            </Card>
          </Col>
        ):"vacía"}

    {/* {! searchTerm ?
        books.map((book)=> {
          <Col xs={{ span: 16 }} md={{ span: 8 }} key={book._id}>
            <Card
              hoverable
              cover={<img alt='example' src={book.bookCover} />}
              actions={[
                <Tooltip title="Send swap request" placement="top" color={geekBlue}>
                  <MailOutlined key="swap"/>
                </Tooltip>,
                <Tooltip title="Add to bookmarks" placement="top" color={geekBlue}>
                  <HeartOutlined key="bookmark" onClick={()=>{addBookmark(book._id)}}/>
                </Tooltip>,
                <Tooltip title="See the review" placement="top" color={geekBlue}>
                  <MoreOutlined key="more" onClick={showModal}/>
                </Tooltip>
              ]}
              title={book.name}
            >
              <Meta
                  avatar={<Avatar src={book.owner} />}
                  title={`${book.owner}`}
                />
              <Title level={4} style={{fontFamily: "Raleway", fontWeight: 500}}>{book.title}</Title>
              <Text>{book.author}</Text>
              <Modal title={`Reseña de ${book.title} por ${user.username}`} footer={false} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {book.review}
              </Modal>
            </Card>
          </Col>
        }) 
        : filteredBooks.map((book)=>{
          <Col xs={{ span: 16 }} md={{ span: 8 }} key={book._id}>
            <Card
              hoverable
              cover={<img alt='example' src={book.bookCover} />}
              actions={[
                <Tooltip title="Send swap request" placement="top" color={geekBlue}>
                  <MailOutlined key="swap"/>
                </Tooltip>,
                <Tooltip title="Add to bookmarks" placement="top" color={geekBlue}>
                  <HeartOutlined key="bookmark" onClick={()=>{addBookmark(book._id)}}/>
                </Tooltip>,
                <Tooltip title="See the review" placement="top" color={geekBlue}>
                  <MoreOutlined key="more" onClick={showModal}/>
                </Tooltip>
              ]}
              title={book.name}
            >
              <Meta
                  avatar={<Avatar src={book.owner} />}
                  title={`${book.owner}`}
                />
              <Title level={4} style={{fontFamily: "Raleway", fontWeight: 500}}>{book.title}</Title>
              <Text>{book.author}</Text>
              <Modal title={`Reseña de ${book.title} por ${user.username}`} footer={false} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {book.review}
              </Modal>
            </Card>
          </Col>
      })
    } */}


      {/* <Col span={24}>
        <Card>
          <Search placeholder="Find a book" searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </Card>
      </Col>
      {books ? (
        books.map(book => (
          <Col xs={{ span: 16 }} md={{ span: 8 }} key={book._id}>
            <Card
              hoverable
              cover={<img alt='example' src={book.bookCover} />}
              actions={[
              <Tooltip title="Send swap request" placement="top" color={geekBlue}>
                <MailOutlined onClick={""} key="swap"/>
              </Tooltip>,
              <Tooltip title="Add to bookmarks" placement="top" color={geekBlue}>
                <HeartOutlined key="bookmark" onClick={()=>{addBookmark(book._id)}}/>
              </Tooltip>,
              <Tooltip title="See the review" placement="top" color={geekBlue}>
                <MoreOutlined key="more" onClick={showModal}/>
              </Tooltip>
              ]}
              title={book.name}
            >
              <Meta
                  avatar={<Avatar src={book.owner.avatar} />}
                  title={`${book.owner.username}`}
              />
              <Title level={4} style={{fontFamily: "Raleway", fontWeight: 500}}>{book.title}</Title>
              <Text>{book.author}</Text>
              <Modal title={`Reseña de ${book.title} por ${user.username}`} footer={false} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {book.review}
              </Modal>
            </Card>
          </Col>
        ))
      ) : (
        <Col span={16} offset={4}>
          <Skeleton active />     
        </Col>       
      )} */}
    </Row>
  )
}    

export default Explore

