import { Card, Space ,Button,Modal, Checkbox,FloatButton,Select} from 'antd';
import {DeleteTwoTone,FileAddTwoTone,RightCircleTwoTone} from "@ant-design/icons"
import { useEffect, useState } from 'react';
import axios from "axios"
const Cards = ({item,category}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected,setSelected]=useState(new Map())
  const [data,setData]=useState([])

  //state for moving card
  const [move,setMove]=useState(false)
  const [moveTo,setMoveTo]=useState(null)

  useEffect(()=>{
    (async function(){
          const obj=Object({category_id:item})
          let res=await axios.post("http://localhost:8000/categoryCards",obj)
          setData(res.data)
        })()
  },[])

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

  const handleMoveOk = async() => {
    if(selected.length!==1){
      alert("Please Select One Card!")
    }else{
      let selectedCard=""
      for(let [key,value] of selected){
        selectedCard=key
      }
      const MoveObj={category_id:moveTo,_id:selectedCard}
      await axios.post("https://localhost:8000/moveCard",MoveObj)
       (async function(){
          const obj=Object({category_id:item})
          let res=await axios.post("http://localhost:8000/categoryCards",obj)
          setData(res.data)
        })()
        setSelected(new Map())
        setMove(false)
    }


  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const changeHandler=(e,id)=>{
      if(e.target.checked){
        setSelected((prev) => new Map([...prev,[id,1]]))
      }else{
          setSelected((prev) => {
          const clone = new Map(prev)
          clone.delete(id)
          return clone
        })
      }
  }

  const deleteHandler=async ()=>{
      const temp=[]

      for(let [key,value] of selected){
        temp.push(key)
      }
      const deleteObj={cards:temp};
      const delCards=await axios.post("http://localhost:8000/deleteCards",deleteObj)
      setSelected(new Map())
      //repopulate data in current category
      (async function(){
          const obj=Object({category_id:item})
          let res=await axios.post("http://localhost:8000/categoryCards",obj)
          setData(res.data)
        })()


  }

  //move card
  const handleChange = (value) => {
    setMoveTo(value)
  };

  
  return(
    <>
  <Space direction="vertical" size={16}>
     {move && 
      <>
      <div style={{float:"left"}}>
       <Select
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={category.map((val,idx)=>{
        return {
          value:val._id,
          label:val.title
        }
      })}
    />
    <Button onClick={handleMoveOk}>Move Card</Button>
    </div>
    </>
  }
    {data.map((val,idx)=>{
      return(<>
    <Checkbox key={val.id} onChange={(e)=>{changeHandler(e,val._id)}}>
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
      <Button 
      icon={<RightCircleTwoTone />}
      style={{minWidth:"50px",margin:"3px"}}
      shape="square"
      type="primary"
      >Edit Card</Button>
    </Card>
    </Checkbox>

      </>)
    })}
    <FloatButton 
    icon={<DeleteTwoTone />}
    description="Delete Card(s)"
    style={{right:24,minWidth:"60px"}}
    shape="square"
    type="primary"
    onClick={deleteHandler}
    />

    <FloatButton 
    icon={<FileAddTwoTone />}
    description="Create Card(s)"
    style={{right:94,minWidth:"60px"}}
    shape="square"
    type="primary"

    />
    <FloatButton 
    icon={<RightCircleTwoTone />}
    description="Move Card"
    style={{right:174,minWidth:"60px"}}
    shape="square"
    type="primary"
    onClick={()=>{setMove(!move)}}
    />
  </Space>
  </>
  )
}



export default Cards;