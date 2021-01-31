import React from 'react';

import './cal-buttons-container.styles.scss';

import CalButton from '../cal-button/cal-button.component';

class CalButtonsContainer extends React.Component {
    constructor() {
        super();
        
        const buttonsArr = {
            'percent' : {
                'id' : 1,
                'symbol' : '%'
            },
            'ce' : {
                'id' : 2,
                'symbol' : 'CE'
            },
            'c' : {
                'id' : 3,
                'symbol' : 'C'
            },
            'backspace' : {
                'id' : 4,
                'symbol' : 'back'
            },
            'ratio' : {
                'id' : 5,
                'symbol' : '1/x'
            },
            'square' : {
                'id' : 6,
                'symbol' : 'x2'
            },
            'root2' : {
                'id' : 7,
                'symbol' : 'root 2'
            },
            'division' : {
                'id' : 8,
                'symbol' : '/'
            },
            'seven' : {
                'id' : 9,
                'symbol' : '7'
            },
            'eight' : {
                'id' : 10,
                'symbol' : '8'
            },
            'nine' : {
                'id' : 11,
                'symbol' : '9'
            },
            'multiply' : {
                'id' : 12,
                'symbol' : 'X'
            },
            'four' : {
                'id' : 13,
                'symbol' : '4'
            },
            'five' : {
                'id' : 14,
                'symbol' : '5'
            },
            'six' : {
                'id' : 15,
                'symbol' : '6'
            },
            'subtract' : {
                'id' : 16,
                'symbol' : '-'
            },
            'one' : {
                'id' : 17,
                'symbol' : '1'
            },
            'two' : {
                'id' : 18,
                'symbol' : '2'
            },
            'three' : {
                'id' : 19,
                'symbol' : '3'
            },
            'plus' : {
                'id' : 20,
                'symbol' : '+'
            },
            'plusminus' : {
                'id' : 21,
                'symbol' : '+/-'
            },
            'zero' : {
                'id' : 22,
                'symbol' : '0'
            },
            'dot' : {
                'id' : 23,
                'symbol' : '.'
            },
            'equalto' : {
                'id' : 24,
                'symbol' : '='
            }
        };

        this.state = { buttonsArr: Object.values(buttonsArr) };
    }

    render() {
        return (
            <div className="buttons-container">
                <div className='buttons-wrap'>
                    {this.state.buttonsArr.map(({id, ...otherBtnProps}) => (
                        <CalButton key={id} {...otherBtnProps} />
                    ))}
                </div>
            </div>
        );
    }
}

export default CalButtonsContainer;