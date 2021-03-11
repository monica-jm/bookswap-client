  
import { useState, useEffect } from "react"
import { Col, Row, Card, Typography, Skeleton } from "antd"
import { getAllBooks } from "../services/book"
import { Link } from "react-router-dom"
const { Title } = Typography

function Home() {
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
        <Title>Home</Title>
      </Col>
      {books ? (
        books.map(book => (
          <Col xs={{ span: 16 }} md={{ span: 8 }} key={book._id}>
            <Card
              hoverable
              title={book.name}
              cover={<img alt='example' src={book.bookCover} />}
              extra={<Link to={`/resource/${book._id}`}>Details</Link>}
            >
              <Card.Meta description={book.review} />
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

export default Home