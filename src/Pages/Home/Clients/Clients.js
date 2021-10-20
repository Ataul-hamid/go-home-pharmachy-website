import React from 'react';

const Clients = () => {
    return (
        <div className="mt-5 mb-5 ms-5 me-5">
            <h1 className="mb-5">OUR AWESOME CLIENTS</h1>

            <div className="row service-container  ms-5 me-5">
                <div className="col card m-3 p-3 service">
                    <img className="rounded-circle mb-5" src="https://imedical-theme.firebaseapp.com/assets/images/testimonial/01.jpg" alt="" />
                    <br />
                    <h5 >Name: Sayed Alaul</h5>
                    <p><strong>Comment:</strong>
                     This is wonderful site.They help me so much. I am very happy with their service</p>


                </div>
                <div className="col card m-3 p-3 service">
                    <img className="rounded-circle mb-5" src="https://imedical-theme.firebaseapp.com/assets/images/testimonial/02.jpg" alt="" />
                    <br />
                    <h5>Name: Nadia Jahan</h5>
                    <p><strong>Comment:</strong>
                     This is wonderful site.They help me so much. I am very happy with their service</p>

                </div>
                <div className="col card m-3 p-3 service">
                    <img className="rounded-circle mb-5" src="https://imedical-theme.firebaseapp.com/assets/images/testimonial/03.jpg" alt="" />
                    <br />
                    <h5>Name: Sadia Jahan</h5>
                    <p><strong>Comment:</strong>
                     This is wonderful site.They help me so much.They are very helpful</p>


                </div>

            </div>

        </div>
    );
};

export default Clients;