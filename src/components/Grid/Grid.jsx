import React from 'react';
import styles from './Grid.scss'

function cmap(className, style){
    return className ? className.split(' ')
    .map( item => styles[item] )
    .join(' ')
    : "";
}

export class Col extends React.Component{
    render(){
        const {children, className} = this.props;
        return(
            <div className={cmap(className, styles) + " " + styles.col}>
                {children}
            </div>
        )
    }
}

export class Container extends React.Component{
    render(){
        const {children, className} = this.props;
        return(
            <div className={cmap(className, styles) + " " + styles.container}>
                {children}
            </div>
        )
    }
}

export class Row extends React.Component{
    render(){
        const {children, className} = this.props;
        return(
            <div className={cmap(className, styles) + " " + styles.row}>
                {children}
            </div>
        )
    }
}
