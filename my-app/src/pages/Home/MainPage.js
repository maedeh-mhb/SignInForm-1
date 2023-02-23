import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import classes from './Home.module.scss';
import HomeImage from './HomeImage';
import SignInPage from './SignInPage';

function MainPage(props) {
    

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

   
    return (
        <div className={classes['main-container']}>
            <div className={classes['inner-container']}>
                {isMobile ?  (
                <SignInPage />):    
               (
                <>
                <SignInPage />
                <HomeImage/>
                </> 
                )
                
               }
            </div>
        </div>
    );
}

export default MainPage;