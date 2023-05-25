import { DatePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;

// Dates to disable received from API
const disabledDatesFromAPI = ['2023-05-28', '2023-06-02', '2023-06-10'];

function disabledDate(current) {
  const formattedDate = current.format('YYYY-MM-DD');
  return disabledDatesFromAPI.includes(formattedDate);
}

function Calendar() {
  return (
    <div>
        <p>Unfinished: Disable busy days</p>
      <RangePicker disabledDate={disabledDate} />
    </div>
  );
}

export default Calendar;
