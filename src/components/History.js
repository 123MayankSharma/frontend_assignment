import { Button ,Card} from "antd";
import { Link } from "react-router-dom";
import axios from "axios"
import { useState,useEffect } from "react";

function History({item}) {
  const [data,setData]=useState([])

  useEffect(()=>{
    (async function(){
          let res=await axios.get("http://localhost:8000/history")
          console.log(res.data)
          setData(res.data)
        })()
  },[])


  return (
    <div color="black">
  {/*  <Link to="/"><Button>Home</Button></Link>
        My name*/}
    {data.map((val,idx)=>{
      return(
        <>
          <Card
      title={val.title}
      extra={val.extra}
      style={{
        width: 500,
        margin:10
      }}
    >
    <h3>URL:<a href={val.url}>{val.url}</a></h3>
    <h3>Time: {val.watched_at}</h3>
    </Card>
          
        </>
        )
    })}
    </div>
  );
}

export default History