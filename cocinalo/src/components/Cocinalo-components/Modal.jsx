import CloseIcon from "../../media/icons/close.png"

export default function Modal({isActive, setShowModal, cardSelected, ingredients, setIngredients, ingredientsSelected}){

    const handleClassName = (item) => {
        if(ingredientsSelected.includes(item)){
            return "Modal-item dark-blue"
        }
        return "Modal-item";
    };

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
                            <div className="Modal-body">
                                {ingredients.map((item, index) => (
                                    <div className={handleClassName(item)} onClick={() => setIngredients(prevIngredients => [...prevIngredients, item])} key={index}>
                                        <p className="Modal-body-p">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="Modal-btn-container" onClick={() => setShowModal(false)}>
                                <div className="Modal-btn">Confirmar</div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}