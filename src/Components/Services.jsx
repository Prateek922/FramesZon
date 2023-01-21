import * as React from "react";
import truck from "../assets/truckfasts.png";
export default function Service(props) {
    return (
        <>
            <div className="row px-24 my-sm-5">
                <div className="col-12 col-lg-4 mb-sm-5">
                    <div className="container-fluid text-left service-container">
                        <div className="row align-items-center">
                            <div className="col-10">
                                <h5 className="heading-font">Fast shipping</h5>
                                <p >We understand that you need your eyewear as soon as possible. That's why we offer fast shipping</p>
                            </div>
                            <div className="col-2 img-container">
                                <img src={truck} alt="icon"></img>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 mb-sm-5">
                    <div className="container-fluid text-left service-container">
                        <div className="row align-items-center">
                            <div className="col-10">
                                <h5 className="heading-font" >14 Day easy return & refund</h5>
                                <p >In case you are not satisfied with your purchase, we have an easy return and refund policy.</p>
                            </div>
                            <div className="col-2 img-container">
                                <img src={truck} alt="icon"></img>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 mb-sm-5">
                    <div className="container-fluid text-left service-container">
                        <div className="row align-items-center">
                            <div className="col-10">
                                <h5 className="heading-font">Secure payment gateway</h5>
                                <p >Our website is SSL certified and we use a secure payment gateway to ensure that your information is safe and protected.</p>
                            </div>
                            <div className="col-2 img-container">
                                <img src={truck} alt="icon"></img>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}