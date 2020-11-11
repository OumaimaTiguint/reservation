import React from 'react';
import './App.css';

const Am = ["11:00", "11:10", "11:20", "11:30", "11:40", "11:50"]
const Pm = ["12:00", "12:10", "12:20", "12:30", "12:40", "12:50", "01:00", "01:10", "01:20", "01:30", "01:40",
 "01:50", "02:00", "02:10", "02:20", "02:30", "02:40", "02:50","03:00", "03:10", "03:20", "03:30", "03:40", "03:50",
 "04:00", "04:10", "04:20", "04:30", "04:40", "04:50", "05:00", "05:10", "05:20", "05:30", "05:40", "05:50",
 "06:00", "06:10", "06:20", "06:30", "06:40", "06:50", "07:00", "07:10", "07:20", "07:30", "07:40", "07:50"]

export default class Time extends React.Component {
    
    render() {
        return (
            <div className="time">
                <h3>午前</h3>
                <div className="am">
                    {Am.map((t, key) => {
                        return (
                            <button key={key} value={t} name={t}>{t}</button>
                        )
                    })}
                </div>
                <h3>午後</h3>
                <div className="pm">
                    {Pm.map((t, key) => {
                        return (
                            <button key={key} value={t} name={t}>{t}</button>
                        )
                    })}
                </div>
            </div>
        )
    }
}