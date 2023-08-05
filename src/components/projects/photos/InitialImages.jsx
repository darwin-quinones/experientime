import React from 'react';

const InitialImages = (props) => {
    const { getIndividualDataImage, initialImages } = props;
    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap' }} className='div_img_superior'>
                {
                    initialImages ?
                        (
                            initialImages.map((img, index) => (
                                <div key={index} className='div_imgs m-2' onClick={() => getIndividualDataImage(img.id)} data-bs-toggle="modal" data-bs-target="#createCarModal">
                                    <img src={img.urls.regular} className="list_imgs" alt="..."></img>
                                </div>
                            ))
                        ) :
                        ""
                }
            </div>
        </>
    );
}

export default InitialImages;
