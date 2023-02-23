
import { useState } from 'react';
import SignInForm from '../../components/authentication/SignInForm';
import SignUpForm from '../../components/authentication/SignUpForm';

function SignInPage(props) {
    const [isLoggedIn,setIsLoggedIn] =useState(true);
    const formProps={
        isLoggedIn,
        setIsLoggedIn
    }
    return (
        isLoggedIn ? <SignInForm {...formProps}/> : <SignUpForm {...formProps}/>
    )
}

export default SignInPage;