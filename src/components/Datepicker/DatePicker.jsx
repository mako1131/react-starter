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
            result.push({dayInMonth: date.getDate(), dayInWeek: date.getDay()})
            date.setDate(date.getDate() + 1);
        }
        return result;
    }

    componentDidMount(){
        var that = this;
        setInterval(function(){
            that.setState({
                currentMonth: (that.state.currentMonth + 1) % 12
            })
        },1000);
    }

    render() {
        const {children, className} = this.props;
        //prepare table
        const table = this.getDaysArray();
        while (table[0].dayInWeek != 0) //prepend empty days
            table.unshift({
                dayInMonth: "",
                dayInWeek: table[0].dayInWeek - 1
            });
        while (table.length < 42)
            table.push({
                dayInMonth: "",
                dayInWeek: table.length % 7
            });

        var rows = Array.apply(null, Array(6)).map((row, rowIndex) => <div className={styles.row} key={rowIndex}>
            {table.slice(rowIndex * 7, rowIndex * 7 + 7).map((item, index) => <div className={styles.day} key={index}>
                {item.dayInMonth}
            </div>)}
        </div>);

        return (
            <div className={styles.datepicker}>
                <h2>{this.state.currentMonth}</h2>
                <div className={styles.row} >
                    {this.state.dayNames.map((item, index) => <div className={styles.day} key={index}>{item.toUpperCase()}</div>)}
                </div>
                {rows}
            </div>
        )
    }
}

export default DatePicker;
