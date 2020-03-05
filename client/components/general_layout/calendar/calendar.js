import React, { Component } from 'react';
import Calendar from "react-calendar";
import calendarCSS from './calendar.css';

class CalendarWidget extends Component{

    constructor(props) {
        super(props)
        this.state = {
            selectedDate: new Date()
        }

    }

    componentDidMount() {
        this.appendToCalendar();
    }

    appendToCalendar() {
        const calendarEle = document.getElementsByClassName(
            "react-calendar__month-view__weekdays"
        );
        const calendarDivider = document.createElement("div")
        calendarDivider.className = 'calendar-divider'
        calendarEle[0].parentElement.appendChild(calendarDivider);
    }    

    render(){

        console.log(this.state.selectedDate);

        return(
            <div className="calendar-full-container">
                <p className="calendar-caret">▲</p>
                <Calendar
                    onChange={selectedDate => {
                        this.setState({ selectedDate });
                    }}
                    value={this.state.date}
                    className="react-calendar-full"
                    onActiveDateChange={() => {
                        this.appendToCalendar();
                    }}
                />    
            </div>        
        );
    }

};

export default CalendarWidget;