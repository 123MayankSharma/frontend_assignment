import { PlayCircleTwoTone, AppstoreTwoTone, HistoryOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import History from './History';
const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}



const items = [
  getItem('Categories', 'Categories',<AppstoreTwoTone />, [
  getItem('Nature', '1',<PlayCircleTwoTone/>),
  getItem('Sports','2',<PlayCircleTwoTone/>),
  getItem('Cartoon','3',<PlayCircleTwoTone/>),
  ]),
  getItem('History','History',<HistoryOutlined />)
];

const Sidebar = () => {
  const [isCategory, setIsCategory] = useState(false)
  const [selectedItem, setSelectedItem] = useState("")
  const [category, setCategory] = useState([])

  useEffect(() => {

    (async function (){
          let categories = await fetch("http://localhost:8000/");
          categories = await categories.json()
          const item = [getItem('Categories', 'Categories', <AppstoreTwoTone />,
            categories.map((val, idx) => {
              const elementObj = getItem(val.title, val._id, <PlayCircleTwoTone />)
              return elementObj;
            })
          ), getItem('History', 'History', <HistoryOutlined />)]
          setCategory(item)
        })()

  },[])
  // const Navigate=useNavigate()
  const clickHandler = (e) => {
    const clickedItem = e.keyPath[0];
    setSelectedItem(clickedItem)
    // clickedItem==="History"?Navigate("/history"):Navigate(`/Categories/${e.keyPath[0]}`)
    clickedItem === "History" ? setIsCategory(false) : setIsCategory(true)

  }
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            backgroundColor: "black",
          }}
        >
          <Menu
            style={{
              width: 256,
              height: "100vh",
              minHeight: "100%"
            }}
            mode="vertical"
            items={category}
            theme={"dark"}
            onClick={clickHandler}
          />
        </Sider>
        <Content
          style={{
            padding: 100,
            margin: 0,
            minHeight: 280,
            backgroundColor: "white",
          }}
        >
          {
            isCategory ? <Cards item={selectedItem} category={category} /> : <History item={selectedItem}/>
          }
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;