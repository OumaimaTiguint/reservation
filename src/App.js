import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './App.css';
import moment from 'moment';
import Time from './time';

function App() {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <div className="App">
      <h2>予約日時をお選びください</h2>
      <Calendar 
        className="cal"
        value={dateState}
        onChange={changeDate}
      />
      <p>現在選択されている日付は <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
      <Time />
      <p>※予約サイトからはご利用2時間前までご予約いただけます。</p>
    </div>
  );
}

export default App;
