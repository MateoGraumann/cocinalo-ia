export default function Card({item, setShowModal, setCardSelected, setIngredientsCategory}){
    return(
        <div className="Card-container" onClick={() => {setShowModal(true); setCardSelected(`${item.name}`); setIngredientsCategory(item.ingredients)}}>
            <div className="Card-container-content">
                <div className="Card-description">
                    <p>{item.name}</p>
                </div>
                <div className="Card-image">
                    <img src={item.icon} alt={`imagen-de-${item.name}`}/>
                </div>
            </div>
        </div>
    )
}