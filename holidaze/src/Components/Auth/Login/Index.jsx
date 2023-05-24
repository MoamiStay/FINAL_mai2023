import Login from "./Login";
import { Layout, Space } from 'antd';
import { Img } from "./styles";
import Sider from "antd/es/layout/Sider";

const contentStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#dba838',
  width: "65%",
};

const siderStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#dba838',
  width: "35%",
  paddingTop: "10%",
};

const LoginIndex = () => {
    return (
        <>
        <Space direction="vertical" style={{ width: "100%"}} size={[0, 48]}>
      <Layout hasSider>
        <div style={contentStyle} >
            <Img src="/photo-1535827841776-24afc1e255ac.avif" alt="hey"/>
        </div>
        <div style={siderStyle}><Login /></div>
      </Layout>
    </Space>
        </>
    )
};

export default LoginIndex;