import React from 'react';
import Common from './Common';
import homeImage from '../src/Images/home.png';
const Home=()=>{
    const title='Welcome to ';
    const brand='Dauth Gurung Protfolio';
    const msg='Experieced and Passionate Web Developer';
    const btnLabel='Get Started';
    
    return(
        <>
            <Common name={title} brand={brand} img={homeImage} msg={msg} btnLabel={btnLabel} />
        </>
    )
}
export default Home;