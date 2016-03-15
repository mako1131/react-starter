import React from 'react'
import className from 'classnames';

import styles from './App.scss';
import colors from '../shared/colors.scss'
import Button from '../Button/Button.jsx'

export default React.createClass({
    render(){
        let buttonClassName = className(styles.danger)
        return(
            <div>
                <h1>Test2</h1>
                <Button text="Mako" className="btn-red"/>
                <Button text="Ahoj" className="btn-blue"/>
                <Button text="Toto je super" className="btn-purple"/>
                <Button text="Dansko a fuinsko" className="btn btn-inline"/>
                <Button className="btn-green"/>
                <Button text="krvavy danger" className="btn-red"/>
            </div>
        )
    }
})
