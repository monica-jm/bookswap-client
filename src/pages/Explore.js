  
import { useState, useEffect } from "react"
import { Col, Row, Card, Typography, Skeleton } from "antd"
import { MoreOutlined, HeartOutlined, MailOutlined } from "@ant-design/icons"
import { getAllBooks } from "../services/book"
import { Link } from "react-router-dom"
const { Title } = Typography
const { Meta } = Card;

function Explore() {
  const [books, setBooks] = useState(null)

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
      <Col span={16} offset={4}>
        <Title>Explore</Title>
      </Col>
      {books ? (
        books.map(book => (
          <Col xs={{ span: 16 }} md={{ span: 8 }} key={book._id}>
            <Card
              hoverable
              cover={<img alt='example' src={book.bookCover} />}
              actions={[
                <MailOutlined key="swap"/>,
                <HeartOutlined key="delete"/>,
                <MoreOutlined key="more"/>
              ]}
              title={book.name}
            >
              <Meta
                  title={`${book.name}`}
                  description={`${book.review}`}
                />
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

export default Explore

