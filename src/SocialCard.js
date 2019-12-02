import React from 'react';



function SocialCard(props) {

    let { imageUrl, title, description, url } = props;

    return (

        <div className="social-card">

            <img src={imageUrl} />

            <div className="social-card-text">

                <h3>{title}</h3>

                <p>{description}</p>

                <a href={url}>{url}</a>

            </div>

        </div>

    )

}



export default SocialCard;