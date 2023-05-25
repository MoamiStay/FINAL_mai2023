import useApi from "../../Hooks/useApi";
import { useState } from "react";
import { URL } from "../../Utils/constants";
import { venuesURL } from "../../Utils/constants";
import { Link } from "react-router-dom";
import { Col, Row, Card, Rate, Input, Divider } from "antd";
import { ImgContainer, Img } from "./styles";

const Listings = () => {
    const { data, isLoading, isError } = useApi(URL + venuesURL);
    console.log(data);
        const [ state, setState ] = useState({
        query: "",
        list: data
    })
    const [value, setValue] = useState(3);

  if (isLoading) {
    return (
      <div className="spinner">
        <img className="spinner" src="/loaderi.gif" alt="" />
      </div>
    );
  } 

   if (isError) {
    return <h1>An error occured</h1>;
  }

    const handleChange = (e) => { 
        const results = data.filter(item => {
            if (e.target.value === '') return data
            return ( 
              item.name.toLowerCase().includes(e.target.value.toLowerCase()) )
        })
        setState({
            query: e.target.value,
            list: results
        })
    };

    return (
        <>
        <form style={{ display: "flex", justifyContent: "center"}}>
        <Input style={{maxWidth: "70%", margin: "2.5rem 0 3.5rem 0"}} onChange={handleChange} value={state.query} type="search" placeholder="Search for venue by name"/>
        </form>
        <Divider style={{marginBottom: "2rem"}} />
          <Row gutter={[16, 16]}>
          {data !== [] && state.query === "" ? data.map(item => { 
            return (
              <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
              <Card title={item.name} bordered={false} >
              <Link className="copytext" to={`/VenueDetails/${item.id}`}>
                {item.media.length !== 0 ? <ImgContainer><Img src={item.media[0]} alt={item.name} /></ImgContainer>
                  :
                <ImgContainer>
                <Img src="/missingImg.jpg" alt={item.name} />
                </ImgContainer>
              }
                <Rate style={{display: "flex", justifyContent: "flex-end"}} disabled defaultValue={item.rating} />
                <p>Address: {item.location.address}</p>
                <p>Price per night: {item.price},-</p>
              </Link>
              </Card>
              </Col>
            )
          }) : state.list.map(item => {
            return (
              <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
              <Card title={item.name} bordered={false} >
              <Link className="copytext" to={`/VenueDetails/${item.id}`}>
                {item.media.length !== 0 ? <ImgContainer><Img src={item.media[0]} alt={item.name} /></ImgContainer>
                  :
                <ImgContainer>
                <Img src="/missingImg.jpg" alt={item.name} />
                </ImgContainer>
              }
                <Rate style={{display: "flex", justifyContent: "flex-end"}} disabled defaultValue={item.rating} />
                <p>Address: {item.location.address}</p>
                <p>Price per night: {item.price},-</p>
              </Link>
              </Card>
              </Col>
            )
          })}
          </Row>
        </>
    )
};

export default Listings;