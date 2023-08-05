import React from 'react';

const ObteinedImages = (props) => {
    const { getIndividualDataImage, obtainedImages } = props;
    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap' }} className='div_img_superior'>
                {
                    obtainedImages ?
                        (
                            obtainedImages.map((img, index) => (
                                <div key={index} className='div_imgs m-2' onClick={() => getIndividualDataImage(img.id)} data-bs-toggle="modal" data-bs-target="#createCarModal">
                                    <img src={img.urls.regular} className="list_imgs" alt="..."></img>
                                </div>
                            ))
                        ) : ""
                }
            </div>
        </>
    );
}

export default ObteinedImages;
