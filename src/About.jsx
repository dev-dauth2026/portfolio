import React from 'react';
import Common from './Common';
import homeImage from '../src/Images/about.png';
const About=()=>{
    const title='About me ';
    const brand='Dauth Gurung';
    const msg='Experieced and Passionate Web Developer';
    const btnLabel='Find More';
    return(
        <>
        <Common name={title} brand={brand} img={homeImage} msg={msg} btnLabel={btnLabel} />

        </>
    )
}
export default About;