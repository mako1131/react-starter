import React from 'react';
import styles from './Panel.scss'

class Panel extends React.Component{
    render(){
        const {children, className} = this.props;
        return(
            <div className={styles.panel}>
                {children}
            </div>
        )
    }
}

export default Panel;
