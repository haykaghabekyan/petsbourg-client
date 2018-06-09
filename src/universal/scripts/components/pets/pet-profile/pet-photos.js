import React from "react";
import ImageGallery from "react-image-gallery";

const PetPhotos = () => {

    const images = [
        {
            original: "/media/images/fake-dog/1.jpeg",
            thumbnail: "/media/images/fake-dog/1.jpeg",
            originalClass: "vle"
        },
        {
            original: "/media/images/fake-dog/2.jpeg",
            thumbnail: "/media/images/fake-dog/2.jpeg"
        },
        {
            original: "/media/images/fake-dog/3.jpeg",
            thumbnail: "/media/images/fake-dog/3.jpeg"
        }
    ];

    return (
        <div className="pet-profile">
            <h3 className="pet-profile-title">Pet Photos</h3>

            <div>
                <ImageGallery items={ images } showPlayButton={ false } showFullscreenButton={ false } />
            </div>
        </div>
    );
};

export default PetPhotos;