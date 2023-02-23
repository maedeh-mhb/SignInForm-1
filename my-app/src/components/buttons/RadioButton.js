import classes from './Button.module.scss'

function RadioButton(props) {
    return (
        <div className={classes.container}>
            <input
            {...props}
            />
        </div>
    );
}

export default RadioButton;