import useApi from "../Hooks/useApi";
import { useParams, useNavigate } from "react-router-dom";
import { getVenuesURL } from "../Utils/constants";
import { URL } from "../Utils/constants";
import Details from "../Components/Details/Index";
import { Layout, theme, Button, Spin } from 'antd';
import React from 'react';
import VenueManager from "../Components/SideProfile/VenueManager/VenueManager";
import Customer from "../Components/SideProfile/Customer/Customer";
const { Content, Sider } = Layout;

const VenueDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useApi(URL + getVenuesURL + id)
  const {
      token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

    if (isLoading) {
    return <div>
      <Spin />
    </div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

    if (localStorage.getItem("authenticate") !== null && localStorage.getItem("venueManager") === "false") {
  return (
        <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="demo-logo-vertical" />
        <Customer />
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
    <Details data={data}/>
    <div>
    </div>
           </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}   else if (localStorage.getItem("authenticate") !== null && localStorage.getItem("venueManager") === "true") {
    return (
        <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
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
    <Details data={data}/>
    <div>
    </div>
           </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
} else 
    return (
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
    <Details data={data}/>
    <div>
    </div>
           </div>
          </div>
        </Content>
      </Layout>
  );
}

export default VenueDetails;
