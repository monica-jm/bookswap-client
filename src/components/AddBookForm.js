import { useState } from "react"
import axios from "axios"
import { Form, Typography, Col, Row, Button, Input, Upload, message, Select } from "antd"
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useAuthInfo } from '../hooks/authContext'
import { createBook } from '../services/book'


const { Text } = Typography;
const { TextArea } = Input;
const {Option} = Select


function AddBookForm({closeModal}) {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [book, setBook] = useState(null)
  const { user, setUser } = useAuthInfo()
  const [secureUrl, setSecureUrl ]= useState("")


  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )
//  Para subir las imagenes
  const handleChange = async file => {
    let dataImage = {
        file: file, 
        upload_preset: "BookSwapp"
    }
    const fdata = new FormData()
    // fdata.append("file", file)
    for (let key in dataImage){
        fdata.append(key, dataImage[key])
    }
    //                                             cloudname 👇         👇 resource type
    const cloudinaryApi = "https://api.cloudinary.com/v1_1/dyvopd0iz/image/upload"
    // fdata.append("upload_preset", "BookSwapp")
    setLoading(true)
    try{
        const { data } = await axios.post(cloudinaryApi, fdata)
        console.log(data)
        setLoading(false)
        setSecureUrl(data.secure_url)
    }
    catch(error){
        console.log(error.response)
        console.log(file)
    }  
  }

  async function handleSubmit(book) {
    try {
        await createBook({...book, bookCover:secureUrl, "lat":"19.41655056326856",
		"lng":"-99.17123705128316"});
        closeModal()
        message.success('Book added to your bookshelf')
      } catch (error) {
          console.log(error)
        message.error(error.response.data.message);
      }
    }
    

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={{ span: 24 }}>
        <Typography.Title level={1}>New Book</Typography.Title>
        <Form form={form} onFinish={handleSubmit} layout='vertical'>
          <Form.Item name='title' label='Title'>
            <Input type='text' />
          </Form.Item>
          <Form.Item name='author' label='Author'>
            <Input type='text' />
          </Form.Item>
          <Form.Item name='isbn' label='ISBN'>
            <Input type='text' />
          </Form.Item>
          <Form.Item name='category' label='Category'>
            <Select style={{width: '100%'}}>
                <Option value={0}>Action and Adventure</Option>
                <Option value={1}>Classics</Option>
                <Option value={2}>Comic Book or Graphic Novel</Option>
                <Option value={3}>Detective and Mystery</Option>
                <Option value={4}>Fantasy</Option>
                <Option value={5}>Historical Fiction</Option>
                <Option value={6}>Horror</Option>
                <Option value={7}>Arts and Music</Option>
                <Option value={8}>Biographies</Option>
                <Option value={9}>Business</Option>
                <Option value={10}>Computers and Tech</Option>
                <Option value={11}>Cooking</Option>
                <Option value={12}>Edu and Reference</Option>
                <Option value={13}>Entertainment</Option>
                <Option value={14}>Health and Fitness</Option>
                <Option value={15}>History</Option>
                <Option value={16}>Hobbies and Crafts</Option>
                <Option value={17}>Home and Garden</Option>
                <Option value={18}>Kids</Option>
                <Option value={19}>Literature and Fiction</Option>
                <Option value={20}>Medical</Option>
                <Option value={21}>Parenting</Option>
                <Option value={22}>Religion</Option>
                <Option value={23}>Romance</Option>
                <Option value={24}>Sci-Fi and Fantasy</Option>
                <Option value={25}>Science and Math</Option>
                <Option value={26}>Self-Help</Option>
                <Option value={27}>Social Sciences</Option>
                <Option value={28}>Sports</Option>
                <Option value={29}>Travel</Option>
                <Option value={30}>Teen</Option>
                <Option value={31}>True Crime</Option>
                <Option value={32}>Special editions</Option>
                <Option value={33}>Other</Option>  
             </Select>        
          </Form.Item>
          <Form.Item name='bookCover' label='BookCover'>
             <Upload
                // onChange={handleChange}
                name='bookCover'
                showUploadList={false}
                beforeUpload={handleChange}
                listType='picture-card'
                className='avatar-uploader'>
                {uploadButton}
              </Upload>
          </Form.Item>
          <Form.Item name='review' label='Review'>
            <TextArea rows={4} type='text' />
          </Form.Item>
          <Form.Item name='location' label='Location'>
            <Input rows={4} type='text' />
            <Text>* Choose a public space so other Swappers know where they can meet with you, remeber you should never share a personal address.</Text>
          </Form.Item>
          <Button type='primary' htmlType='submit' block size='large'>
            Add Book
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default AddBookForm