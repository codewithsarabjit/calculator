import React from 'react';

import './cal-button.styles.scss';

const CalButton = ({symbol}) => {
    return (
        <div className='blocks'>{symbol}</div>
    );
}

export default CalButton;