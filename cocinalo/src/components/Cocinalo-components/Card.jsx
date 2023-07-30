import DropdownArrow from '../../media/icons/down-arrow.png'

export default function Card({item, setShowModal, setCardSelected, setIngredientsCategory}){
    return(
        <div className="Card-container">
            <div className="Card-container-content">
                <div className="Card-description">
                    <p>{item.name}</p>
                </div>
                <div className="Card-image">
                    <img src={item.icon} alt={`imagen-de-${item.name}`}/>
                </div>
            </div>
            <div className="Dropdown-icon">
                <img src={DropdownArrow} alt={"dropdown-arrow"} onClick={() => {
                    setShowModal(true); 
                    setCardSelected(`${item.name}`)
                    setIngredientsCategory(item.ingredients)
                }}/>
            </div>
        </div>
    )
}