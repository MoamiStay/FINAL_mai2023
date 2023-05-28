import useApiAuth from "../../../../Hooks/useApiAuth";
import { URL } from "../../../../Utils/constants";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col, Collapse, Divider } from "antd";
import { ImgCard } from "./styles";

const ViewVenues = () => {
const getMyVenues = "/api/v1/holidaze/profiles/";
const username = localStorage.getItem("username");
const nameParam = username + "/venues?_bookings=true&_owner=true";
const { Panel } = Collapse;

if  (!username) {
    return <p>Loading...</p>
};

    const { data, isLoading, isError } = useApiAuth(URL + getMyVenues + nameParam);
    localStorage.setItem("myVenues", JSON.stringify(data));
    const parsedData = JSON.parse(localStorage.getItem("myVenues")); 

      return (
      <>
    {isLoading ? (
      <p>Loading...</p>
    ) : isError ? (
      <p>Error occurred while fetching data. Please try reloading the page.</p>
    ) : (
      <>
        <Row style={{justifyContent: "center"}}>
            {data.map((item, idx) => {
                return (
                    <Card title={item.name} bordered={false} key={idx} style={{width: "15rem", margin: "10px"}}>
                        <Col xs={24} sm={12} md={8} lg={6} key={item.id}></Col>
                        <Button type="text"><Link to={`/EditDelete/${item.id}`}>Edit</Link></Button>
                        <Button type="text"><Link to={`/VenueDetails/${item.id}`}>View Venue</Link></Button>
                        {item.media.length !== 0 ? <ImgCard src={item.media[0]} alt={item.name} />
                        :
                        <ImgCard src="/missingImg.jpg" alt={item.name} />
                        }

                        <Collapse>
                        <Panel header={"Bookings: " + item.bookings.length} key={idx}>
                        {item.bookings.map((booking, idx) => {
                        return (
                            <div key={idx}>
                                <Divider></Divider>
                                <p style={{margin: "5px 0 0 0"}}>{booking.guests} Guest(s)</p> 
                                <p style={{margin: "5px 0 0 0"}}>Start:  {booking.dateFrom.slice(0, 9)}</p>
                                <p style={{margin: "5px 0 0 0"}}> End:  {booking.dateTo.slice(0, 9)}</p>
                            </div>
                        )
                    })}
                    </Panel>
                    </Collapse>
                    <Col />
                 </Card>
                )
            })}
        </Row>
      </>
    )}
  </>
);
};

export default ViewVenues;
