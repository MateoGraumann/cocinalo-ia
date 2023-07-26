import { useEffect, useState } from 'react';
import { UseChatGPT } from '../hooks/ChatGPT';

// ICONS
import VegetalesIcon from '../media/icons/vegetables.png'
import ProteinIcon from '../media/icons/protein.png'
import SpicesIcon from '../media/icons/spice.png'
import LegumesIcon from '../media/icons/legumes.png'
import ShelvesIcon from '../media/icons/shelves.png'
import DairyIcon from '../media/icons/dairy.png'

import '../styles/Cocinalo.css'
import Card from '../components/Cocinalo-components/Card';
import Modal from '../components/Cocinalo-components/Modal';

export default function Cocinalo(){

    const [showModal, setShowModal] = useState(false);
    const [cardSelected, setCardSelected] = useState("");

    // const units = ["Kg", "Unidad", "gramos"];
    // const ingredients = [
    //     {
    //         name:"Harina",
    //         quantity:1,
    //         unity: 'Kg'
    //     },
    //     {
    //         name:"Tomate",
    //         quantity:1,
    //         unity: 'Unidad'
    //     },
    //     {
    //         name:"Arvejas",
    //         quantity:0,
    //         unity: 'Lata'
    //     }
    // ];

    const categories = [
        {
            id: 1,
            name:"Vegetales",
            icon: VegetalesIcon
        },
        {
            id: 2,
            name:"Proteínas",
            icon: ProteinIcon
        },
        {
            id: 3,
            name:"Condimentos",
            icon: SpicesIcon
        },
        {
            id: 4,
            name:"Granos y legumbres",
            icon: LegumesIcon
        },
        {
            id: 5,
            name:"Lácteos",
            icon: DairyIcon
        },
        {
            id: 6,
            name:"Ingredientes básicos",
            icon: ShelvesIcon
        },
    ]

    // const auxiliarIngredients = []
    // let query = 'Tengo los siguientes ingredientes: '

    // for (let i = 0; i < ingredients.length; i++) {
    //     if(ingredients[i].quantity > 0){
    //     auxiliarIngredients.push(ingredients[i]) 
    //     } 
    // }

    // for (let i = 0; i < auxiliarIngredients.length; i++) {
    //     query = query + auxiliarIngredients[i].name + ': ' +auxiliarIngredients[i].quantity + ' ' + auxiliarIngredients[i].unity + ', '
    // }

    // useEffect(() => {
    //     UseChatGPT("Quien es messi").then((p)=>{
    //         if(!p.error){
    //             console.log(p.data)
    //         }
    //     })
    // })

    return(
        <>
            <div className="Cocinalo-container">
                <div className="Content-container">
                    <div className="Cocinalo-header">
                        <h3 className='Cocinalo-text'>Cocinalo</h3>
                    </div>
                    <div className="Divs-container">
                        <div className="Left-div">
                            {categories.map((item)=>(
                                <Card 
                                    name={item.name}
                                    icon={item.icon}
                                    setShowModal={setShowModal}
                                    setCardSelected={setCardSelected}
                                    key={item.id}
                                />
                            ))}
                        </div>
                        <div className="Right-div">
                            <h3>Historial de recetas</h3>
                        </div>
                    </div>
                    <div className="Cocinalo-footer">
                        <div className="Cocinalo-checkbox">
                            <div className="Checkbox-1">
                                <h4>Momento del dia?</h4>
                                Desayuno <input type='checkbox' name='breakfast'/><br/>
                                Almuerzo <input type='checkbox' name='launch'/><br/>
                                Merienda <input type='checkbox' name='snack'/><br/>
                                Cena <input type='checkbox' name='dinner'/><br/>
                            </div>
                            <div className="Checkbox-2">
                                <h4>Tipo de menu?</h4>
                                Vegano <input type='checkbox' name='vegan'/><br/>
                                Vegetariano <input type='checkbox' name='vegetarian'/><br/>
                                Celiaco <input type='checkbox' name='celiac'/><br/>
                                Diabetico <input type='checkbox' name='diabetic'/><br/>
                                Sin Tacc <input type='checkbox' name='not-tacc'/><br/>
                            </div>
                        </div>
                        <div className="Cocinar-button-container">
                            <div className="Cocinar-button">Cocinar!</div>
                        </div>
                    </div>
                </div>
                <Modal isActive={showModal} setShowModal={setShowModal} cardSelected={cardSelected}/> 
            </div>
        </>
    )
}