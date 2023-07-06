import DropdownArrow from '../../media/icons/down-arrow.png'

export default function Card({name,icon}){
    return(
        <div className="Card-container">
            <div className="Card-container-content">
                <div className="Card-description">
                    <p>{name}</p>
                </div>
                <div className="Card-image">
                    <img src={icon} alt={`imagen-de-${name}`}/>
                </div>
            </div>
            <div className="Dropdown-icon">
                <img src={DropdownArrow} alt={"dropdown-arrow"}/>
            </div>
        </div>
    )

}