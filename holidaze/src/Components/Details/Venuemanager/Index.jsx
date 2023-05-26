import { ImgContainer, Img } from "./styles";
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Card, Rate, Row, Col, Carousel } from "antd";
import '../Customer/Info/Info.css';

const VenueManagerDetails = (props) => {
    const data = props.data;
    const rating = typeof data?.rating === 'number' ? data.rating : 0;
    const media = data?.media && data.media.length > 0 ? data.media : null;
    
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

    return (
      <Card bordered={false} >
            <Carousel style={{width: "100%"}} autoplay afterChange={onChange}>
                {media?.map((item, index) => (
                    <div key={index}>
                        <ImgContainer>
                            <Img src={item} alt={data.name} />
                        </ImgContainer>
                    </div>
                ))}
            </Carousel>
        <div style={{display: "flex", justifyContent: "space-between", marginTop: "1rem", fontSize: "1.5rem", alignItems: "center"}}>
            <h1>{data.name}</h1>
            {/* <Rate style={{ display: "flex", justifyContent: "flex-end" }} disabled defaultValue={data?.rating} /> */}
            {data?.rating && <Rate style={{ display: "flex", justifyContent: "flex-end" }} disabled defaultValue={rating} />}
        </div >
        {data.location?.address !== "Unknown"  ? data.location?.address + ", " + data.location?.city + ", " + data.location?.country : <p>Address unknown</p>}
        <div>
        <h3>Description</h3>
        <p>{data.description}</p>
        </div>
        <Row gutter={[16, 16]}>
            <Col xs={24} md={10} lg={6}>
                <p>Wifi: </p>
                <p>{data.meta?.wifi ? <CheckOutlined /> : <CloseOutlined /> }</p>
            </Col>
            <Col xs={24} md={10} lg={6}>
                <p>Breakfast: </p>
                <p>{data.meta?.breakfast ? <CheckOutlined /> : <CloseOutlined /> }</p>
            </Col>
            <Col xs={24} md={10} lg={6}>
                <p>Parking: </p>
                <p>{data.meta?.parking ? <CheckOutlined /> : <CloseOutlined /> }</p>
            </Col>
            <Col xs={24} md={10} lg={6}>
                <p>Pets: </p>
                <p>{data.meta?.pets ? <CheckOutlined /> : <CloseOutlined /> }</p>
            </Col>
            <Col xs={24} md={10} lg={6}>
                <p>Maximim number of guests: </p>
                <p>{data.maxGuests}</p>
            </Col>
        </Row>
        <h3>Price per night {data.price} NOK</h3>
        <p style={{margin: "20px 0 0 0"}}>Please log in with a customer account to book a venue</p>
        </Card >
    );

}

export default VenueManagerDetails;