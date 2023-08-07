import React from 'react';
const InitialImages = (props) => {
    const { getIndividualDataImage, initialImages } = props;
    return (
        <>
            <div className="gallery">
                <div className="img-card">
                    {
                        initialImages ?
                            (
                                initialImages.map((img, index) => (
                                        <img key={index} src={img.urls.regular} className="" alt={img.alt_description} onClick={() => getIndividualDataImage(img.id)} data-bs-toggle="modal" data-bs-target="#createCarModal"></img>
                                ))
                            ) :
                            ""
                    }
                </div>

            </div>
        </>
    );
}

export default InitialImages;
