import React from 'react';
import Card from './Card';
import Sdata from './Sdata';


const Portfolio = () => {
    
    return (
        <>
            <div className="portfolio_div my-5">
                <h1 className="text-center ">My Portfolio</h1><hr className="mb-5 col-md-6 mx-auto" />
                <div className="row gx-0 gy-5 ">
                       {
                           Sdata.map((val,ind)=>{
                               return <Card key={ind} index={val.ind} title={val.title} img={val.img} desc={val.desc} link={val.link} />
                           })
                       }   
                </div>
            </div>

        </>
    )
}
export default Portfolio;