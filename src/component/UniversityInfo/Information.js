import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'

import './Information.css'
const Information = (props) => {


    const { name, annualBudgt, chancellorNmae, image, internationalStudents, status } = props.pushInformation;
    const element = <FontAwesomeIcon icon={faUniversity} />


    return (
        <div className="cart-desain">
            <img className="image-size" src={image} alt="" />
            <h1> <small>Institute Name</small>  : {name}</h1>
            <h3> University Chancelor: {chancellorNmae}</h3>
            <h4> <span>Status :</span> {status}</h4>
            <h4> <span>International Students :</span>  {internationalStudents}</h4>
            <h4> <span>Annual Budgt:</span>  {annualBudgt}</h4>
            <button onClick={() => props.handleUniButton(props.pushInformation)}> {element} Calculate Budegt</button>


        </div>
    );
};

export default Information;