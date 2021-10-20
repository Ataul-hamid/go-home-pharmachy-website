import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Features.css'

const Features = () => {
    return (
        <div className=" mb-5 mt-5">
            <h1 className="text-success">Our Features</h1>
            <h3 class="text-warning">Why Choose Us?</h3>

            <div className="ms-5 me-5" >
                <div className="row service-container ">
                    <div className="col card ms-3 me-3 px-3 py-3 service">
                        <i class="fas fa-stethoscope"></i>
                        <br />
                        <h6 className="mx-5">Internal Medicine</h6>
                        <br />
                        <p className="mx-3">Proin nec lacus lacus. Sed vitae consectetur est, et mattis felis. Fusce lacinia nibh vitae fermentum finibus.</p>
                    </div>
                    <div className="col card ms-3 me-3 px-3 py-3 service">
                        <i class="fas fa-lungs-virus"></i>
                        <br />
                        <h6>Respiratory</h6>
                        <br />
                        <p>Proin nec lacus lacus. Sed vitae consectetur est, et mattis felis. Fusce lacinia nibh vitae fermentum finibus.</p>
                    </div>
                    <div className=" col card ms-3 me-3 px-3 py-3 service">
                        <i class="fas fa-head-side-virus"></i>
                        <br />
                        <h6>
                            Neurology
                    </h6>
                        <br />
                        <p>Proin nec lacus lacus. Sed vitae consectetur est, et mattis felis. Fusce lacinia nibh vitae fermentum finibus.</p>
                    </div>
                </div>
                <br />
                <div className="row service-container ">
                    <div className="col  card ms-3 me-3 px-3 py-3 service">
                        <i class="fas fa-dna"></i>
                        <br />
                        <h6>Genetics Service</h6>
                        <br />
                        <p>Proin nec lacus lacus. Sed vitae consectetur est, et mattis felis. Fusce lacinia nibh vitae fermentum finibus.</p>
                        <br />
                    </div>
                    <div className="col card ms-3 me-3 px-3 py-3 service">
                        <i class="fas fa-microscope"></i>
                        <br />
                        <h6>Oncology Care</h6><br />
                        <p>Proin nec lacus lacus. Sed vitae consectetur est, et mattis felis. Fusce lacinia nibh vitae fermentum finibus.</p>
                    </div>
                    <div className="col card ms-3 me-3 px-3 py-3 service">
                        <i class="fas fa-tooth"></i>
                        <br />
                        <h6>
                            Dental Care
                    </h6>
                        <br />
                        <p>Proin nec lacus lacus. Sed vitae consectetur est, et mattis felis. Fusce lacinia nibh vitae fermentum finibus.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;