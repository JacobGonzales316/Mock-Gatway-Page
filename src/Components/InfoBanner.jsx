import React from "react";

function InfoBanner(props) {
    return <div className="InfoBanner">
        <h3>ADDRESS</h3>
        <p>{props.address}</p>
        <button>DIRECTIONS</button>

        <br />
        <br />
        <h3>TIMES</h3>
        <h5>SUNDAY</h5>
        <p>{props.times}</p>

        <br />

        <h3>PHONE</h3>
        <p>{props.phoneNumber}</p>
        <br />

        <h5>CAMPUS PASTOR</h5>
        <p>{props.campusPastor}</p>

        <button>CAMPUS EMAIL</button>

    </div>
}

export default InfoBanner;