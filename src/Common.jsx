import React from 'react';

const Common=(props)=>{
    return(
        <>
        <div className='container-fluid my-5'>
            <div className='row'>
                <div className='col-md-5 mx-auto d-flex justify-content-center align-item-center flex-column p-5'>
                <h1>{props.name}  </h1> 
                <h1 className="brand text-warning">{props.brand} </h1>
                <h4>{props.msg} </h4><br/>
                <button className='btn-get-started btn-outline-primary rounded-pill p-1 w-50'> {props.btnLabel} </button>
                
                </div>
                <div className='col-md-5 mx-auto d-flex justify-content-center align-item-center p-5'>
                <img src={props.img} alt='{props.img}' />
                </div>
            </div>
        </div>

        </>
    )
}
export default Common;