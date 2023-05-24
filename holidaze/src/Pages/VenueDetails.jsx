import useApi from "../Hooks/useApi";
import { useParams, useNavigate } from "react-router-dom";
import { getVenuesURL } from "../Utils/constants";
import { URL } from "../Utils/constants";
import Details from "../Components/Details/Index";
import { Layout, theme } from 'antd';
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

    if (localStorage.getItem("authenticate") !== null && localStorage.getItem("venueManager") === "false") {
  return (
    // <>
    // <Details data={data}/>
    // <div>
    //   <p>Venue Details</p>
    // </div>
    // </>

        <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="demo-logo-vertical" />
        <Customer />
       <button onClick={() => {navigate("/")}}>Home</button>
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
      <p>Venue Details</p>
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
       <button onClick={() => {navigate("/")}}>Home</button>
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
      <p>Venue Details</p>
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
      <p>Venue Details</p>
    </div>
           </div>
          </div>
        </Content>
      </Layout>
  );
}

export default VenueDetails;
