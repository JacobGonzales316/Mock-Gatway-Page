import React from 'react';

function InfoTile(props) {
    return <div class="InfoTile">
        <div class="InfoTileImage">
            <img src={props.imageLocation} alt="Image Info" />
        </div>
        <div class="InfoTileText">
            <h3>{props.title}</h3>
            <p>{props.paragraph}</p>
            <br />
            <a href={props.link}>
                <u>VIEW MORE</u>
            </a>
        </div>
    </div>
}

export default InfoTile;