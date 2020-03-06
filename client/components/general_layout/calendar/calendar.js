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

        const clickableDivs = document.getElementsByClassName(
          "react-calendar__month-view "
        );

        clickableDivs[0].lastElementChild.lastElementChild.className = "calendar-click-no-close"
    }    

    render(){
        const selectedDate = this.state.selectedDate.toString();
        const selectedDateArr = selectedDate.split(" ")
        const parsedSelectedDate = selectedDateArr[1] + " " + selectedDateArr[2] + ", "  + selectedDateArr[3]

        return (
          <div
            id="calendar-container"
            className="calendar-full-container-hidden calendar-click-no-close"
          >
            <p className="calendar-caret calendar-click-no-close">
              ▲
            </p>
            <Calendar
              onChange={selectedDate => {
                this.setState({ selectedDate });
              }}
              value={this.state.date}
              className="react-calendar-full calendar-click-no-close"
              onActiveDateChange={() => {
                this.appendToCalendar();
              }}
            />
          </div>
        );
    }

};

export default CalendarWidget;