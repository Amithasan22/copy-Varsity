import React from 'react';
import './Footer.css'
const Footer = (props) => {
    // console.log(props.calculation)

    // const { names } = props;

    const { calculation } = props;
    let total = 0
    let names = [];
    for (const annualTotal of calculation) {
        total = total + annualTotal.annualBudgt;
        // names = names + annualTotal.name;
        names.push(annualTotal.name)
        console.log(names)
    }

    return (




        <div div className="main-footer" style={{
            display: ' grid', gridTemplateColumns: "1fr 3fr", height: 'auto',
        }}>
            <div className="footer">
                <h2>Total University Add: {props.calculation.length} </h2>
                <h3>Total Annual Cost: ${total}</h3>
                <p> name: {names.map(name => <li>{name}</li>)}</p>

                {/* <p>name:   <ul>
                    <li>{names}</li>
                </ul> </p> */}

            </div>
            <div>

                <p className="fotter-para">Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Delectus, exercitationem! Modi a . Molestiae maxime nulla reprehenderit   quidem facere aspernatur, a sequi obcaecati quos  numquam nemo provident accusantium ab aut culpa itaque doloribus.</p>
            </div>

        </div >

    );

};

export default Footer;