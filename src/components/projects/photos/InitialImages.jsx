import React from 'react';
const InitialImages = (props) => {
    const { getIndividualDataImage, initialImages } = props;
    return (
        <>
            <div id='gallery' className="gallery">
                <div id='img-card' className="img-card">
                    {
                        initialImages ?
                            (
                                initialImages.map((img, index) => (
                                        <img key={index} src={img.urls.regular} className="" alt={img.alt_description} onClick={() => getIndividualDataImage(img.id)}></img>
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
