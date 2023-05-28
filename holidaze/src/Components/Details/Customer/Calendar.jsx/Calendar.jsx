import { DatePicker } from "antd";
import moment from "moment";
import { useParams } from "react-router-dom";
import { URL } from "../../../../Utils/constants";
import useApi from "../../../../Hooks/useApi";
import "antd/dist/antd.css";

const bookingsEndpoint = "/api/v1/holidaze/venues/";
const parameters = "?_bookings=true";

const { RangePicker } = DatePicker;

function Calendar({ onDateChange }) {
  const { id } = useParams();
  const { data, isLoading, isError } = useApi(URL + bookingsEndpoint + id + parameters);
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  const hasBookings = data && data.bookings && data.bookings.length > 0;

  const disabledDates = hasBookings
    ? data.bookings.map((booking) => {
        return moment(booking.dateFrom).format("YYYY-MM-DD");
      })
    : [];

  const disabledDatesFromAPI = disabledDates;

function disabledDate(current) {
  const formattedDate = current.format("YYYY-MM-DD");

  if (disabledDatesFromAPI.includes(formattedDate)) {
    return true;
  }

  if (
    data.bookings.some((booking) => {
      const bookingDateFrom = moment(booking.dateFrom).format("YYYY-MM-DD");
      const bookingDateTo = moment(booking.dateTo).format("YYYY-MM-DD");
      return formattedDate >= bookingDateFrom && formattedDate <= bookingDateTo;
    })
  ) {
    return true;
  }

  return current.isBefore(moment().startOf("day"));
}

  const maxGuests = data && data.maxGuests ? data.maxGuests : 0;

  return (
    <div>
      <RangePicker
        onChange={onDateChange}
        disabledDate={disabledDate}
        disabledDates={disabledDates}
        disabled={hasBookings && maxGuests <= 0}
      />
    </div>
  );
}

export default Calendar;
