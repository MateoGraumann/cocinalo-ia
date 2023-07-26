import CloseIcon from "../../media/icons/close.png"

export default function Modal({isActive, setShowModal, cardSelected}){
    return(
        <>
            {isActive &&
                <div className="Overlay">
                    <div className="Modal-container">
                        <div className="Modal-content">
                            <div className="Modal-header">
                                <div className="Modal-p">{cardSelected}</div>
                                <div className="Modal-close" onClick={() => setShowModal(false)}>
                                    <img src={CloseIcon} alt={"close-modal"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}