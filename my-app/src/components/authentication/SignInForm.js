import React from 'react';
import classes from './SignInForm.module.scss';
import { useEffect, useState } from 'react';
import Button from '../../components/buttons/Button';
import RadioButton from '../../components/buttons/RadioButton';
import Input from '../../components/input/Input';
import google from '../../assets/icons/google.svg';
import facebook from '../../assets/icons/facebook.svg';

function SignInForm(props) {
    const[isChecked,setIsChecked] = useState('1');
    const{setIsLoggedIn} = props;

    function radioHandler(e) {
        const {value}=e.target;
        if (value === isChecked) {
            setIsChecked("");
          } else {
            setIsChecked(value);
          }
      
    };
    
    function submitHandler(e) {
        e.preventDefault();
        setIsLoggedIn(false)
    }

    return (
        <main className={classes['form-container']}>
        <form onSubmit={submitHandler}>
        <header>
            <h1 className={classes['form-header']}>Login</h1>
        </header>
            <div className={classes['form-control']}>
                <label>Email*</label>
                <Input 
                autoFocus
                name="new-email"
                id="new-email"
                autoComplete="new-email"
                />
            </div>
            <div className={classes['form-control']}>
                <label>Password*</label>
                <Input 
                 name="new-password"
                 id="new-password"
                 autoComplete="new-password"
               />
            </div>
            <div className={classes['remember-container']}>
                <div className={classes['radio-container']}>
                <label>Remember me</label>
                <RadioButton 
                type="radio"
                name="remember"
                id="remember"
                value={'1'}
                checked={isChecked === '1'}
                onClick={radioHandler}
                onChange={radioHandler}/>
                
                </div>
                <span>Forgot Password?</span>
            </div>
           <footer>
            <Button  className={'primary'}>
                Login
            </Button>
            <Button  className={'secondary'} type={'submit'} dataText={'Register'}/>
        
           </footer>
           <div className={classes['login-buttons']}>
           <Button  className={'blank'} icon={google}>
                Sign In With Google
            </Button>
            <Button  className={'blank'} icon={facebook}>
                Sign In With Facebook
            </Button>
           </div>
        </form>
    </main>
    );
}

export default SignInForm;