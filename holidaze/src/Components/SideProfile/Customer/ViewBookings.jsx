import { URL } from "../../../Utils/constants";
import useApiAuth from "../../../Hooks/useApiAuth";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button, Rate, Divider } from "antd";
import { ImgCard } from "./styles";

const daysTotal = (date1, date2) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

  return diffDays;
}

const priceTotal = (date1, date2, price, guests) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  const Total = (diffDays * price) * guests;
  return Total
}


const ViewBookings = () => {
const username = localStorage.getItem("username");
const myBookingsUrl = "/api/v1/holidaze/profiles/"
const myBookingsUrlName =  "/bookings?sortOrder=desc&_venue=true";

if  (!username) {
    return <p>Loading...</p>
};
          const { data, isLoading, isError } = useApiAuth(URL + myBookingsUrl + username +  myBookingsUrlName);

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
                         <Button type="text"><Link to={`/VenueDetails/${item.venue.id}`}>View venue page</Link></Button>
                        {item.venue.media.length !== 0 ? <ImgCard src={item.venue.media[0]} alt={item.name} />
                        :
                        <ImgCard src="/missingImg.jpg" alt={item.name} />
                        }
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                         <h3 style={{maxWidth: "50%", lineHeight: "16px"}}>{item.venue.name}</h3>
                         <Rate style={{ fontSize: "smaller", maxWidth: "50%"}} disabled defaultValue={item.venue.rating} />
                         </div>
                         <p>{item.guests} Guest(s), {daysTotal(item.dateFrom.slice(0, 10), item.dateTo.slice(0, 10)) + " Day(s)"}</p>
                         <p>Total: {priceTotal(item.dateFrom.slice(0, 10), item.dateTo.slice(0, 10), item.venue.price, item.guests)},-</p>
                         <Divider />
                         <p>From {item.dateFrom.slice(0, 9)} until {item.dateTo.slice(0, 9)}</p>
                         <p>Address: {item.venue.location.address}, {item.venue.location.city}, {item.venue.location.country}</p>
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

export default ViewBookings;
