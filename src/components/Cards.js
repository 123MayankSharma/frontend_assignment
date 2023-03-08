import { Card, Space ,Button,Modal, Checkbox,FloatButton} from 'antd';
import {DeleteTwoTone,FileAddTwoTone,RightCircleTwoTone} from "@ant-design/icons"
import { useEffect, useState } from 'react';
import axios from "axios"
const Cards = ({item}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected,setSelected]=useState(new Map())
  const [data,setData]=useState([])

  useEffect(()=>{
    (async function(){
          const obj=Object({category_id:item})
          let res=await axios.post("http://localhost:8000/categoryCards",obj)
          setData(res.data)
        })()
  })
  const showModal = (title,url) => {
    setIsModalOpen(true);

    (async function(){
          const obj=Object({category_id:item,title:title,url:url,watched_at:new Date().toString()})
          let res=await axios.post("http://localhost:8000/addToHistory",obj)
        })()
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const changeHandler=(e,title)=>{
      if(e.target.checked){
        setSelected((prev) => new Map([...prev,[title,1]]))
      }else{
          setSelected((prev) => {
          const clone = new Map(prev)
          clone.delete(title)
          return clone
        })
      }


      

  }

  // const data=[
  // {
  //   title:"My Card",
  //   extra:<a href="#">More</a>,
  //   src:"https://www.youtube.com/embed/B6kN4J0g3Ps",
  //   video_title:"My Video",
  //   id:1

  // },
  // {
  //   title:"My Card",
  //   extra:<a href="#">More</a>,
  //   src:"https://www.youtube.com/embed/B6kN4J0g3Ps",
  //   video_title:"My Video",
  //   id:2

  // },
  // {
  //   title:"My Card",
  //   extra:<a href="#">More</a>,
  //   src:"https://www.youtube.com/embed/B6kN4J0g3Ps",
  //   video_title:"My Video",
  //   id:3

  // },
  // {
  //   title:"My Card",
  //   extra:<a href="#">More</a>,
  //   src:"https://www.youtube.com/embed/B6kN4J0g3Ps",
  //   video_title:"My Video",
  //   id:4

  // },
  // {
  //   title:"My Card",
  //   extra:<a href="#">More</a>,
  //   src:"https://www.youtube.com/embed/B6kN4J0g3Ps",
  //   video_title:"My Video",
  //   id:5

  // },
  // {
  //   title:"My Card",
  //   extra:<a href="#">More</a>,
  //   src:"https://www.youtube.com/embed/B6kN4J0g3Ps",
  //   video_title:"My Video",
  //   id:6

  // },
  // ]
  return(
    <>
  <Space direction="vertical" size={16}>
    {data.map((val,idx)=>{
      return(<>
    <Checkbox key={val.id} onChange={(e)=>{changeHandler(e,val.id)}}>
    <Card
      title={val.title}
      extra={val.extra}
      style={{
        width: 500,
      }}
    >
    <Button type="primary" onClick={()=>{showModal(val.title,val.url)}}>Play Video</Button>
    <Modal style={{width:"100%"}} title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <iframe width={450} height={360} src={val.url} title={val.video_title} frameborder="0" allow="autoplay;picture-in-picture;" allowFullScreen></iframe>
    </Modal>
    </Card>
    </Checkbox>

      </>)
    })}
    <FloatButton 
    icon={<DeleteTwoTone />}
    description="Delete Card(s)"
    style={{right:24,minWidth:"50px"}}
    shape="square"
    type="primary"
    />

    <FloatButton 
    icon={<FileAddTwoTone />}
    description="Create Card(s)"
    style={{right:94,minWidth:"50px"}}
    shape="square"
    type="primary"

    />
    <FloatButton 
    icon={<RightCircleTwoTone />}
    description="Move Cards"
    style={{right:174,minWidth:"50px"}}
    shape="square"
    type="primary"

    />

    <FloatButton 
    icon={<RightCircleTwoTone />}
    description="Edit Card"
    style={{right:254,minWidth:"50px"}}
    shape="square"
    type="primary"
    />
  </Space>
  </>
  )
}
export default Cards;