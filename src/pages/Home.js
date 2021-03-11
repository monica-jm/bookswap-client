  
import { useState, useEffect } from "react"
import { Col, Row, Card, Typography, Skeleton, Carousel } from "antd"
import { getAllBooks } from "../services/book"
import { Link } from "react-router-dom"
const { Title } = Typography
const { Meta } = Card;

const carouselContentStyle = {
  height: "70vh",
  color: "#fff",
  alignContent: 'center',
  marginLeft:'auto',
  marginRight:'auto'

};

function Home() {
  const [books, setBooks] = useState(null)
  const [size, setSize] = useState('large');

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
    <>
    <Row style={{backgroundColor: '#f0f5ff'}}>
    <Col>
      <Carousel autoplay effect="fade" dots>
          <div style={{display:'block', marginLeft:'auto', marginRight:'auto'}}>
              <img style={carouselContentStyle} src="https://res.cloudinary.com/dyvopd0iz/image/upload/v1615486882/BookSwapp/carousel-01_vid8yq.jpg"/>
          </div>
          <div style={{display:'block', marginLeft:'auto', marginRight:'auto'}}>
              <img style={carouselContentStyle} src="https://res.cloudinary.com/dyvopd0iz/image/upload/v1615486882/BookSwapp/carousel-02_gthavr.jpg"/>
          </div>
          <div style={{display:'block', marginLeft:'auto', marginRight:'auto'}}>
              <img style={carouselContentStyle} src="https://res.cloudinary.com/dyvopd0iz/image/upload/v1615486882/BookSwapp/carousel-03_ttpxgb.jpg"/>            
          </div>
          <div style={{display:'block', marginLeft:'auto', marginRight:'auto'}}>
              <img style={carouselContentStyle} src="https://res.cloudinary.com/dyvopd0iz/image/upload/v1615486882/BookSwapp/carousel-04_vehspv.jpg"/>  
          </div>
      </Carousel>
    </Col>
    </Row>
    <Row gutter={[16, 16]}>
      <Col span={16} offset={4}>
        <Title level={3} style={{fontFamily: "Raleway", fontWeight: 500}} >Latest available books</Title>
      </Col>
      {books ? (
        books.slice(0, 6).map(book => (
          <Col xs={{ span: 16 }} md={{ span: 8 }} key={book._id}>
            <Card
              hoverable
              cover={<img alt='Book cover' src={book.bookCover} style={{height:'320px', objectFit: 'contain', padding: '30px'}}/>}
              title={book.name}
              bordered
            >
              <Meta
                  title={`${book.title}`}
                  description={book.author}
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
    </>
  )
}

export default Home