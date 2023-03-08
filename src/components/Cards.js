import { Card, Space ,Button,Modal, Checkbox} from 'antd';
import { useState } from 'react';
const Cards = ({item}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected,setSelected]=useState(new Map())
  const showModal = () => {
    setIsModalOpen(true);
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


      

      console.log(selected)
  }

  const data=[
  {
    title:"My Card",
    extra:<a href="#">More</a>,
    src:"https://www.youtube.com/embed/B6kN4J0g3Ps",
    video_title:"My Video",
    id:1

  },
  {
    title:"My Card",
    extra:<a href="#">More</a>,
    src:"https://www.youtube.com/embed/B6kN4J0g3Ps",
    video_title:"My Video",
    id:2

  },
  {
    title:"My Card",
    extra:<a href="#">More</a>,
    src:"https://www.youtube.com/embed/B6kN4J0g3Ps",
    video_title:"My Video",
    id:3

  },
  {
    title:"My Card",
    extra:<a href="#">More</a>,
    src:"https://www.youtube.com/embed/B6kN4J0g3Ps",
    video_title:"My Video",
    id:4

  },
  {
    title:"My Card",
    extra:<a href="#">More</a>,
    src:"https://www.youtube.com/embed/B6kN4J0g3Ps",
    video_title:"My Video",
    id:5

  },
  {
    title:"My Card",
    extra:<a href="#">More</a>,
    src:"https://www.youtube.com/embed/B6kN4J0g3Ps",
    video_title:"My Video",
    id:6

  },
  ]
  return(
    <>
  <Space direction="vertical" size={16}>
    {data.map((val,idx)=>{
      return(<>
    <Checkbox key={val.id}onChange={(e)=>{changeHandler(e,val.id)}}>
    <Card
      title={val.title}
      extra={val.extra}
      style={{
        width: 500,
      }}
    >
    <Button type="primary" onClick={showModal}>Play Video</Button>
    <Modal style={{width:"100%"}} title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <iframe width={450} height={360} src={val.src} title={val.video_title} frameborder="0" allow="autoplay;picture-in-picture; web-share" allowfullscreen></iframe>
    </Modal>
    <h1>My Video</h1>
    </Card>
    </Checkbox>

      </>)
    })}
  </Space>
  </>
  )
}
export default Cards;