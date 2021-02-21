import React from "react"

function AddGallery(props) {
    if(props.isMobile) {
        return (
            <div className="gallery-box col-12">
                <a href={"https://www.instagram.com/p/"+ props.permalink} target="_blank"> 
                    <img className="gallery-box-image" src={props.media_url} loading="lazy"/>
                </a>
                <p>{props.caption}</p>
            </div>
        )
    }
    
    else {
        return (
            <div className="gallery-box col-4">
                <a href={"https://www.instagram.com/p/"+ props.permalink} target="_blank"> 
                    <img className="gallery-box-image" src={props.media_url} loading="lazy"/>
                    <div className="gallery-box-description-layer">
                        <p className="gallery-box-description">{props.caption}</p>
                    </div>
                </a>
            </div>
        )
    }
}

export default AddGallery;



