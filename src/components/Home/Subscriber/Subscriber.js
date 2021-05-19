import React from 'react';
import './Subscriber.css';
const Subscriber = () => {
    return (
        <div className="subscriber-area   mt-5">
            <section className="container">
                <div className="d-flex justify-content-between py-5">
                    <div>
                        <h5 className="text-light">NEWSLETTER</h5>
                        <h1 className="text-light">Subscribe for Newsletter</h1>
                    </div>
                    <div>
                         <button className="btn btn-light mt-3 fs-4" style={{color: '#73B925' }}>SUBSCRIBER</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Subscriber;