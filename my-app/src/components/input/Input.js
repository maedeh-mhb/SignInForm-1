import React from 'react';
import classes from './Input.module.scss';

function Input(props) {
    const {type,value,style,onChange,id,name} = props;
    
    return (
        <div className={classes['input-container']}>
            <input
            type={type}
            id={id}
            value={value}
            name={name}
            onChange={onChange}
            {...style}
            {...props}
            />
                
        </div>
    );
}

export default Input;