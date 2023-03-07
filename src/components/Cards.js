import { Card, Space ,Button,Modal, Checkbox} from 'antd';
import { useState } from 'react';
const Cards = ({item}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return(
    <>
  <Space direction="vertical" size={16}>
  <Checkbox>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 500,
      }}
    >
    <Button type="primary" onClick={showModal}>Play Video</Button>
    <Modal style={{width:"100%"}}title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <iframe width={450} height={360} src="https://www.youtube.com/embed/B6kN4J0g3Ps" title="YouTube video player" frameborder="0" allow="autoplay;picture-in-picture; web-share" allowfullscreen></iframe>
    </Modal>
    <h1>My Video</h1>
    </Card>
    </Checkbox>
    <Checkbox>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 500,
      }}
    >
    <Button type="primary" onClick={showModal}>Play Video</Button>
    <Modal style={{width:"100%"}}title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <iframe width={450} height={360} src="https://www.youtube.com/embed/B6kN4J0g3Ps" title="YouTube video player" frameborder="0" allow="autoplay;picture-in-picture; web-share" allowfullscreen></iframe>
    </Modal>
    <h1>My Video</h1>
    </Card>
    </Checkbox>
    <Checkbox>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 500,
      }}
    >
    <Button type="primary" onClick={showModal}>Play Video</Button>
    <Modal style={{width:"100%"}}title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <iframe width={450} height={360} src="https://www.youtube.com/embed/B6kN4J0g3Ps" title="YouTube video player" frameborder="0" allow="autoplay;picture-in-picture; web-share" allowfullscreen></iframe>
    </Modal>
    <h1>My Video</h1>
    </Card>
    </Checkbox>
    <Checkbox>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 500,
      }}
    >
    <Button type="primary" onClick={showModal}>Play Video</Button>
    <Modal style={{width:"100%"}}title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <iframe width={450} height={360} src="https://www.youtube.com/embed/B6kN4J0g3Ps" title="YouTube video player" frameborder="0" allow="autoplay;picture-in-picture; web-share" allowfullscreen></iframe>
    </Modal>
    <h1>My Video</h1>
    </Card>
    </Checkbox>
    <Checkbox>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 500,
      }}
    >
    <Button type="primary" onClick={showModal}>Play Video</Button>
    <Modal style={{width:"100%"}}title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <iframe width={450} height={360} src="https://www.youtube.com/embed/B6kN4J0g3Ps" title="YouTube video player" frameborder="0" allow="autoplay;picture-in-picture; web-share" allowfullscreen></iframe>
    </Modal>
    <h1>My Video</h1>
    </Card>
    </Checkbox>
    <Checkbox>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 500,
      }}
    >
    <Button type="primary" onClick={showModal}>Play Video</Button>
    <Modal style={{width:"100%"}}title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <iframe width={450} height={360} src="https://www.youtube.com/embed/B6kN4J0g3Ps" title="YouTube video player" frameborder="0" allow="autoplay;picture-in-picture; web-share" allowfullscreen></iframe>
    </Modal>
    <h1>My Video</h1>
    </Card>
    </Checkbox>
    <Checkbox>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 500,
      }}
    >
    <Button type="primary" onClick={showModal}>Play Video</Button>
    <Modal style={{width:"100%"}}title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <iframe width={450} height={360} src="https://www.youtube.com/embed/B6kN4J0g3Ps" title="YouTube video player" frameborder="0" allow="autoplay;picture-in-picture; web-share" allowfullscreen></iframe>
    </Modal>
    <h1>My Video</h1>
    </Card>
    </Checkbox>
    <Checkbox onChange={(e)=>{console.log(e)}}>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 500,
      }}
    >
    <Button type="primary" onClick={showModal}>Play Video</Button>
    <Modal style={{width:"100%"}}title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <iframe width={450} height={360} src="https://www.youtube.com/embed/B6kN4J0g3Ps" title="YouTube video player" frameborder="0" allow="autoplay;picture-in-picture; web-share" allowfullscreen></iframe>
    </Modal>
    <h1>My Video</h1>
    </Card>
    </Checkbox>
  </Space>
  </>
  )
}
export default Cards;