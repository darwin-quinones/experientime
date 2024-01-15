import React from 'react';

const ImagePreviewModal = (props) => {
    const {clickedImage, showModal, closeModal, downloadNormalImage} = props
    return (
        <>
            <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}  tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    {
                        clickedImage ?
                            (
                                <div className="modal-content">
                                    {
                                        clickedImage.user ?
                                            (
                                                <div className="modal-header">
                                                    <span className='span-user' style={{}}>
                                                        <img className='rounded-circle' alt='imagen del usuario' src={clickedImage.user.profile_image.small}></img>
                                                        <div className='div-user-info'>
                                                            <a href={clickedImage.user.links.html} className="link-name">{clickedImage.user.name} </a>
                                                            <div>
                                                                <a href={clickedImage.user.links.html} className='link-username'>{clickedImage.user.username}</a>
                                                            </div>

                                                        </div>
                                                    </span>
                                                    <div className='div-dropdown' style={{}}>
                                                        <button type="button" className="btn btn-success" onClick={() => downloadNormalImage(clickedImage.links.download_location)}>
                                                            Download
                                                        </button>
                                                        <button type="button" className="btn-close" onClick={ closeModal } ></button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="modal-header"> No data available</div>
                                            )
                                    }
                                    <div className="modal-body">
                                        <div className='row'>
                                            <div className='col-xl-12'>
                                                <center>
                                                    <div className='div-imgs-individual' >
                                                        {
                                                            clickedImage.urls && clickedImage.urls.regular ?
                                                                (
                                                                    <img src={clickedImage.urls.regular} className="list-imgs" alt="..."></img>
                                                                ) :
                                                                (
                                                                    <p>No image data available.</p>
                                                                )
                                                        }
                                                    </div>
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) :
                            (<p>No se encontrarons datos</p>)
                    }
                </div>
            </div>
        </>
    );
}

export default ImagePreviewModal;
