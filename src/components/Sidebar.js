import { PlayCircleTwoTone,AppstoreTwoTone,HistoryOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import { Layout } from 'antd';
import React, { useState } from 'react';
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
  const [isCategory,setIsCategory]=useState(false)
  const [selectedItem,setSelectedItem]=useState("")
  // const Navigate=useNavigate()
  const clickHandler=(e)=>{
    const clickedItem=e.keyPath[0];
    setSelectedItem(clickedItem)
    // clickedItem==="History"?Navigate("/history"):Navigate(`/Categories/${e.keyPath[0]}`)
    clickedItem==="History"?setIsCategory(false):setIsCategory(true)

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
            backgroundColor:"black",
          }}
        >
    <Menu
      style={{
        width: 256,
        height:"100vh",
        minHeight:"100%"
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['Categories']}
      mode="vertical"
      items={items}
      theme={"dark"}
      onClick={clickHandler}
    />
    </Sider>
    <Content
    style={{
        padding: 100,
        margin: 0,
        minHeight: 280,
        backgroundColor:"white",
      }}
    >
          {
            isCategory?<Cards item={selectedItem}/>:<History/>
          }
    </Content>
    </Layout>
    </Layout>
  );
};

export default Sidebar;