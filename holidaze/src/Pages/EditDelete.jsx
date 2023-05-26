import Edit from "../Components/SideProfile/VenueManager/CRUD/Edit";
import Delete from "../Components/SideProfile/VenueManager/CRUD/Delete";
import VenueManager from "../Components/SideProfile/VenueManager/VenueManager";
import { Layout, theme, Button } from 'antd';
import React from 'react';
import { useNavigate } from "react-router-dom";
const { Content, Sider } = Layout;

const EditDelete = () => {
  const {
      token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

    return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        // onBreakpoint={(broken) => {
        //   console.log(broken);
        // }}
        // onCollapse={(collapsed, type) => {
        //   console.log(collapsed, type);
        // }}
      >
        <div className="demo-logo-vertical" />
       <VenueManager />
       <Button className="menuText" type="text" onClick={() => {navigate("/")}}>Home</Button>
      </Sider>

      <Layout>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
           <div>
            < Edit />
            < Delete />
           </div>
          </div>
        </Content>
      </Layout>
    </Layout>
    )
};

export default EditDelete;