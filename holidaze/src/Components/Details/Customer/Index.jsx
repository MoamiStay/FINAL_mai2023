import CreateBooking from "./Createbooking/Index";

const CustomerDetails = (props) => {
    const data = props.data
    console.log(data);
    return (
        <>
        <h1>{data.name}</h1>
        <img src={data.media} alt={data.name} />
        <p>View calendar</p>
        < CreateBooking data={data} />
        </>
    )
};

export default CustomerDetails;