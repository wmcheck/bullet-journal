import React from 'react';
import { Layout, Tabs, Col, Row } from 'antd';
import { CheckCircleTwoTone, ClockCircleTwoTone, PlusCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons';
const { Header, Content } = Layout;

// const items = new Array(3).fill(null).map((_, index) => ({
//   key: String(index + 1),
//   label: `nav ${index + 1}`,
// }));

// const {
//     token: { colorBgContainer, borderRadiusLG },
// } = theme.useToken();

const Body = (props) => {
  const { t } = props;
  return (

      <Content
        style={{
          padding: '0',
        }}
      >
        <div
          style={{
            height: 'calc(100vh - 64px - 46px)',
            padding: 0,
            minHeight: 380,
            background: '#fff',
            // background: colorBgContainer,
            // borderRadius: borderRadiusLG,
          }}
        >
          <div id="grid-bullet" style={{padding: '20px'}}>
              Content {t}
              <Row>
                <Col span={1} className='column'>Пн</Col>
                <Col span={1} className='column'>Вт</Col>
                <Col span={1} className='column'>Ср</Col>
                <Col span={1} className='column'>Чт</Col>
                <Col span={1} className='column column-action'>Пт</Col>
                <Col span={1} className='column'>Сб</Col>
                <Col span={1} className='column'>Вс</Col>
                <Col span={17}><PlusCircleTwoTone twoToneColor="#52c41a"/></Col>
              </Row>          
              <Row className="rows">
                <Col span={1} className='column'></Col>
                <Col span={1} className='column'></Col>
                <Col span={1} className='column'></Col>
                <Col span={1} className='column'><CheckCircleTwoTone twoToneColor="#52c41a"/></Col>
                <Col span={1} className='column column-action'></Col>
                <Col span={1} className='column'></Col>
                <Col span={1} className='column'></Col>
                <Col span={17} className="font-bullet">Текст задания для выполнения в эту неделю</Col>
              </Row>
              <Row className="rows">
                <Col span={1} className='column'></Col>
                <Col span={1} className='column'><RightCircleTwoTone twoToneColor="orange"/></Col>
                <Col span={1} className='column'></Col>
                <Col span={1} className='column'></Col>
                <Col span={1} className='column column-action'></Col>
                <Col span={1} className='column'></Col>
                <Col span={1} className='column'></Col>
                <Col span={17} className="font-bullet">Текст какой то</Col>
              </Row>
              <Row className="rows">
                <Col span={1} className='column'></Col>
                <Col span={1} className='column'></Col>
                <Col span={1} className='column'><PlusCircleTwoTone twoToneColor="gray"/></Col>
                <Col span={1} className='column'></Col>
                <Col span={1} className='column column-action'></Col>
                <Col span={1} className='column'><PlusCircleTwoTone twoToneColor="gray"/></Col>
                <Col span={1} className='column'></Col>
                <Col span={17} className="font-bullet">Текст какой то</Col>
              </Row>
              <Row className="rows">
                <Col span={1} className='column'></Col>
                <Col span={1} className='column'></Col>
                <Col span={1} className='column'><PlusCircleTwoTone /></Col>
                <Col span={1} className='column'></Col>
                <Col span={1} className='column column-action'></Col>
                <Col span={1} className='column'><PlusCircleTwoTone /></Col>
                <Col span={1} className='column'></Col>
                <Col span={17} className="font-bullet">Текст какой то</Col>
              </Row>
              <Row className="rows">
                <Col span={1} className='column'></Col>
                <Col span={1} className='column'></Col>
                <Col span={1} className='column'></Col>
                <Col span={1} className='column'></Col>
                <Col span={1} className='column column-action'><ClockCircleTwoTone /></Col>
                <Col span={1} className='column'></Col>
                <Col span={1} className='column'></Col>
                <Col span={17} className="font-bullet">Текст какой то</Col>
              </Row>
          </div>
        </div>
      </Content>
)};

const onChange = (key) => {
  console.log(key);
};

const tabItems = [
  {
    key: '1',
    label: 'Bullet',
    children: <Body t={'Tab 1'}/>,
  },
  {
    key: '2',
    label: 'Setting',
    children: <Body t={'Tab 2'}/>,
  },
  {
    key: '3',
    label: 'Calendar',
    children: <Body  t='Tab 3'/>,
  },
];

const App = () => {

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="logo-text">Bullet Journal</div>
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        /> */}
      </Header>

      <Tabs defaultActiveKey="1" items={tabItems} onChange={onChange} />


    </Layout>
  );
};
export default App;