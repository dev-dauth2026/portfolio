import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
const Card = (props) => {
    return (
        <>
            <div className="card col-lg-5 col-md-5 col-sm-12  mx-auto" >
                <img src={props.img} className="card-img-top w-100 " style={{height:"15rem"}} alt="{props.img}" />
                <div className="card-body">
                    <h4 className="card-title font-weight-bold">{props.title} </h4>
                    <p className="card-text"><strong>Programmings:</strong>  {props.desc} </p>
                    <a href={props.link} className="btn btn-primary"><GitHubIcon/> Visit Github  </a>
                </div>
            </div>

        </>
    )
}
export default Card;