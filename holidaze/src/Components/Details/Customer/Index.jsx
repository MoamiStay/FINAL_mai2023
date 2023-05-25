import CreateBooking from "./Createbooking/Index";
import Calendar from "./Calendar.jsx/Calendar";
import Info from "./Info/Info";

const CustomerDetails = (props) => {
    const data = props.data
    console.log(data);
    return (
        <>
        < Info data={data} />
        < CreateBooking data={data} />
        < Calendar data={data}/> 
        </>
    )
};

export default CustomerDetails;