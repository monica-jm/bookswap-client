  
import { useState, useEffect } from "react"
import { Col, Row, Card, Typography, Skeleton, Modal, message, Tooltip, Avatar, Input } from "antd"
import { MoreOutlined, HeartOutlined, MailOutlined } from "@ant-design/icons"
import { getAllBooks, updateBookmarks } from "../services/book"
import { useAuthInfo } from '../hooks/authContext';
import {Search} from "../components"
import { Link } from "react-router-dom"
const { Title, Text } = Typography
const { Meta } = Card;
const geekBlue = 'geekblue';

function Explore() {
  const [searchTerm, setSearchTerm] = useState(null);
  const [books, setBooks] = useState(books)
  const [book, setBook] = useState(null)
  const { user }  = useAuthInfo()

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

  const filteredBooks = books.filter(function (book) {
    return book.title.toLowerCase().includes(searchTerm);
  });

  const bookmarked = async(bookId) => {
    try {
      const {data} = await updateBookmarks({...bookId});
      console.log("Lo que sea", data)
      setBook(data)
      message.success('Succesfully')
    } catch (error) {
        console.log(error)

      message.error(error.response.data.message);
    }
  }

  useEffect(() => {
    async function getBooks() {
      const {
        data: { books }
      } = await getAllBooks()

      setBooks(books)
    }
    getBooks()
  }, [])

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card>
          <Search placeholder="Find a book" searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </Card>
      </Col>
      {! searchTerm ?
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
                  <HeartOutlined key="bookmark" onClick={bookmarked}/>
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
                  <HeartOutlined key="bookmark" onClick={bookmarked}/>
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
    })
    </Row>
  )
}

export default Explore

