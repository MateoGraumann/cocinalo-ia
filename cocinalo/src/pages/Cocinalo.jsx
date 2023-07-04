import { useEffect } from 'react';
import { UseChatGPT } from '../hooks/ChatGPT';
import '../styles/Cocinalo.css'

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
            
        </div>
    )
}