import classes from './Button.module.scss'

function Button(props) {
    const {className,dataText,icon} = props;
    console.log(props)
    return (
       icon ?  <div className={classes['iconButton-container']}>
                <span className={classes['icon-container']}>
                    <img src={icon}/>
                </span>
                <div {...props} 
                className={classes[className]}>
                    {props.children}
                </div>
             </div>
             :
            <div className={classes['button-container']}>
                <button {...props}
                data-text={dataText}
                className={classes[className]}>
                    {props.children}
                </button>
            </div>
            
    
    );
}

export default Button;