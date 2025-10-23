import React from "react";
import '../assets/styles/Certs.scss';
import DL from '../assets/images/DataLiteracy.png';
import DAA from '../assets/images/DataAnalystAssociate.png';
import SQLA from '../assets/images/SQLAssociate.png';
import PDA from '../assets/images/PythonDataAssociate.png';


function Certs() {
    return (
    <section className="enable-animation" id="certificates">
        <div className="marquee-container">
            <h1>Certificates</h1>
            <div className="marquee-title">
                <ul className="marquee">
                    <div className="marquee-content">
                        <a href="https://www.datacamp.com/certificate/DAA0010749904281" target="_blank" rel="noreferrer">
                        <div className="marquee-item">
                            <img src={DAA} height="150px" width="100px" alt="Data Analyst Associate certification badge" /><br />
                        </div>
                        </a>
                        <a href="https://www.datacamp.com/certificate/PDA0012892901111" target="_blank" rel="noreferrer">
                        <div className="marquee-item">
                            <img src={PDA} height="150px" width="100px" alt="Python Data Associate certification badge" /><br />
                        </div>
                        </a>
                        <a href="https://www.datacamp.com/certificate/SQA0018388461209" target="_blank" rel="noreferrer">
                        <div className="marquee-item">
                            <img src={SQLA} height="150px" width="100px" alt="SQL Associate certification badge" /><br />
                        </div>
                        </a>
                        <a href="https://www.datacamp.com/skill-verification/DL0031684006784" target="_blank" rel="noreferrer">
                        <div className="marquee-item">
                            <img src={DL} height="150px" width="100px" alt="Data Literacy certification badge" /><br />
                        </div>
                        </a>
                    </div>

                    <div aria-hidden="true" className="marquee-content">
                        <a href="https://www.datacamp.com/certificate/DAA0010749904281" target="_blank" rel="noreferrer">
                        <div className="marquee-item">
                            <img src={DAA} height="150px" width="100px" alt="Data Analyst Associate certification badge" /><br />
                        </div>
                        </a>
                        <a href="https://www.datacamp.com/certificate/PDA0012892901111" target="_blank" rel="noreferrer">
                        <div className="marquee-item">
                            <img src={PDA} height="150px" width="100px" alt="Python Data Associate certification badge" /><br />
                        </div>
                        </a>
                        <a href="https://www.datacamp.com/certificate/SQA0018388461209" target="_blank" rel="noreferrer">
                        <div className="marquee-item">
                            <img src={SQLA} height="150px" width="100px" alt="SQL Associate certification badge" /><br />
                        </div>
                        </a>
                        <a href="https://www.datacamp.com/skill-verification/DL0031684006784" target="_blank" rel="noreferrer">
                        <div className="marquee-item">
                            <img src={DL} height="150px" width="100px" alt="Data Literacy certification badge" /><br />
                        </div>
                        </a>
                    </div>
                </ul>
            </div>
        </div>
    </section>
    );
}

export default Certs;