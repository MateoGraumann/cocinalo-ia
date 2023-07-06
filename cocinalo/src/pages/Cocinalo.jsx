import { useEffect } from 'react';
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

export default function Cocinalo(){

    const units = ["Kg", "Unidad", "gramos"];
    const ingredients = [
        {
            name:"Harina",
            quantity:1,
            unity: 'Kg'
        },
        {
            name:"Tomate",
            quantity:1,
            unity: 'Unidad'
        },
        {
            name:"Arvejas",
            quantity:0,
            unity: 'Lata'
        }
    ];

    const categories = [
        {
            name:"Vegetales",
            icon: VegetalesIcon
        },
        {
            name:"Proteínas",
            icon: ProteinIcon
        },
        {
            name:"Condimentos",
            icon: SpicesIcon
        },
        {
            name:"Granos y legumbres",
            icon: LegumesIcon
        },
        {
            name:"Lácteos",
            icon: DairyIcon
        },
        {
            name:"Ingredientes básicos",
            icon: ShelvesIcon
        },
    ]

    const auxiliarIngredients = []
    let query = 'Tengo los siguientes ingredientes: '

    for (let i = 0; i < ingredients.length; i++) {
        if(ingredients[i].quantity > 0){
        auxiliarIngredients.push(ingredients[i]) 
        } 
    }

    for (let i = 0; i < auxiliarIngredients.length; i++) {
        query = query + auxiliarIngredients[i].name + ': ' +auxiliarIngredients[i].quantity + ' ' + auxiliarIngredients[i].unity + ', '
    }

    useEffect(() => {
        UseChatGPT("Quien es messi").then((p)=>{
            if(!p.error){
                console.log(p.data)
            }
        })
    })

    return(
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
                            />
                        ))}
                    </div>
                    <div className="Right-div">
                        <h3>Ingredientes seleccionados:</h3>
                    </div>
                </div>
                <div className="Cocinar-button-container">
                    <div className="Cocinar-button">Cocinar!</div>
                </div>
            </div>
        </div>
    )
}