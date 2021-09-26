import React, { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import Information from '../UniversityInfo/Information';
import './Detail.css'
const Details = () => {

    const [informations, setInformations] = useState([]);
    const [calculation, setCalculation] = useState([])

    console.log(informations)

    // useEffect()

    useEffect(() => {
        fetch('./university.json')
            .then(res => res.json())
            .then(data => setInformations(data));

    }, [])

    const handleUniButton = (ranking) => {
        // console.log(ranking)
        const totalCalculation = [...calculation, ranking];
        setCalculation(totalCalculation)

    }


    return (
        <div>


            <div className="desain">
                {
                    informations.map(information => <Information pushInformation={information}
                        key={information.name}
                        handleUniButton={handleUniButton}
                    ></Information>)
                }
            </div>
            <div className="footer-container">
                <Footer calculation={calculation}

                >



                </Footer>
            </div>

        </div>
    );
};

export default Details;