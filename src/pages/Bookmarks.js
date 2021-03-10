  import { useState } from "react"
import { Col, Row, Card, Typography, Skeleton } from "antd"
import { getAllBooks } from "../services/book"
import { Link } from "react-router-dom"
import { useAuthInfo } from "../hooks/authContext"
const { Title } = Typography

function Home() {
  const [books, setBooks] = useState(null)
  const { user } = useAuthInfo()

  return (
    <Row gutter={[16, 16]}>
      <Col span={16} offset={4}>
        <Title>Bookmarks</Title>
      </Col>
      {user.bookmarks ? (
        user.bookmarks.map(book => (
          <Col xs={{ span: 16 }} md={{ span: 8 }} key={book._id}>
            <Card
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