import React from 'react';
import styles from './DatePicker.scss'

class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: (new Date()).getDate(),
            currentMonth: (new Date()).getMonth(),
            currentYear: (new Date()).getFullYear(),
            selectedDay: (new Date()).getDay(),
            dayNames: [
                'sun',
                'mon',
                'tue',
                'wed',
                'thu',
                'fri',
                'sat'
            ],
            monthNames: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ]
        };
    }

    getDaysArray(year = this.state.currentYear, month = this.state.currentMonth + 1) {
        var date = new Date(year, month - 1, 1);
        var result = [];
        while (date.getMonth() == month - 1) {
            result.push({
                dayInMonth: date.getDate(),
                dayInWeek: date.getDay()
            })
            //}  date.getDate() + "-" + this.state.dayNames[date.getDay()]);
            date.setDate(date.getDate() + 1);
        }
        return result;
    }

    render() {
        const {children, className} = this.props;
        //prepare table
        const table = this.getDaysArray();
        while(table[0].dayInWeek != 0) table.unshift({dayInMonth: "-", dayInWeek: table[0].dayInWeek - 1})
        while(table[table.length-1].dayInWeek < this.state.dayNames.length-1 && table.length < 100){ console.log(table[table.length-1].dayInWeek, this.state.dayNames.length-1);    table.push({dayInMonth: "", dayInWeek: table[table.length-1].dayInWeek + 1})}
        console.log(table)
        //spravit stvorcek, dat kazdy riadok do divu
        return (
            <div className={styles.datepicker}>
                {this.state.dayNames.map((item, index) => <div className={styles.day} key={index}>{item}</div>)}



                {table.map((item, index) => <div className={styles.day} key={index}>{item.dayInMonth}</div>)}
            </div>
        )
    }
}

export default DatePicker;
