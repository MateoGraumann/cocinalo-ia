import { useState } from 'react';
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
    const [igredientsCategory, setIngredientsCategory] = useState([]);
    const [ingredientsSelected, setIngredients] = useState([]);
    const [menuHour, setMenuHour] = useState([]);
    const [menuType, setMenuType] = useState([]);

    const categories = [
        {
            id: 1,
            name:"Frutas y Vegetales",
            icon: VegetalesIcon,
            ingredients: [
                "zanahoria",
                "espinaca",
                "brócoli",
                "cebolla",
                "tomate",
                "pepino",
                "morrón",
                "coliflor",
                "calabacín",
                "remolacha",
                "apio",
                "repollo",
                "berenjena",
                "calabaza",
                "papa",
                "batata",
                "rúcula",
                "maíz",
                "hinojo",
                "puerro",
                "lechuga",
                "acelga",
                "perejil",
                "rabanito",
                "achicoria",
                "manzana",
                "banana",
                "naranja",
                "limón",
                "uva",
                "frutilla",
                "arándano",
                "frambuesa",
                "ananá",
                "mango",
                "sandía",
                "melón",
                "kiwi",
                "granada",
                "ciruela",
                "pera",
                "durazno",
                "melocotón",
                "mandarina",
                "guayaba",
                "higo",
                "cerezas",
                "moras",
                "palta"
            ]
        },
        {
            id: 2,
            name:"Proteínas",
            icon: ProteinIcon,
            ingredients: [
                "Pollo",
                "Pescado",
                "Carne de res",
                "Pavo",
                "Huevos",
                "Tofu",
                "Camarones",
                "Cangrejo",
                "Sardinas",
                "Anchoas",
                "Pechuga de pavo",
                "Carne de cerdo",
                "Carne de cordero",
                "Hígado",
                "Ternera",
                "Jamón",
                "Albóndigas",
                "Salchichas",
                "Salmón",
                "Bacalao",
                "Pulpo",
                "Calamares",
            ]
        },
        {
            id: 3,
            name:"Condimentos",
            icon: SpicesIcon,
            ingredients: [
                "Sal",
                "Pimienta",
                "Ajo en polvo",
                "Cebolla en polvo",
                "Cúrcuma",
                "Pimentón dulce",
                "Pimentón picante",
                "Comino",
                "Orégano",
                "Tomillo",
                "Romero",
                "Albahaca",
                "Perejil",
                "Cilantro",
                "Nuez moscada",
                "Canela",
                "Clavo de olor",
                "Jengibre en polvo",
                "Curry en polvo",
                "Mostaza en polvo",
                "Salsa de soja",
                "Salsa de tomate",
                "Mayonesa",
                "Mostaza",
                "Salsa picante",
                "Salsa barbacoa",
            ]
        },
        {
            id: 4,
            name:"Granos y legumbres",
            icon: LegumesIcon,
            ingredients: [
                "Arroz",
                "Lentejas verdes",
                "Lentejas rojas",
                "Lentejas pardinas",
                "Lentejas beluga",
                "Lentejas amarillas",
                "Garbanzos normales",
                "Garbanzos negros",
                "Garbanzos verdes",
                "Arbejas",
                "Habas",
                "Maiz",
                "Porotos blancos",
                "Porotos negros",
                "Avena",
                "Quinoa",
                "Mijo",
            ]
        },
        {
            id: 5,
            name:"Lácteos",
            icon: DairyIcon,
            ingredients: [
                "Leche",
                "Yogur",
                "Yogur natural",
                "Crema",
                "Leche condensada",
                "Leche en polvo",
                "Leche de almendras",
                "Leche de soja",
                "Leche de coco",
                "Leche descremada",
                "Leche entera",
                "Queso crema",
                "Queso cremoso",
                "Queso rallado",
                "Queso azul",
                "Queso feta",
                "Queso cottage",
                "Queso ricotta",
                "Queso parmesano",
                "Queso suizo",
                "Queso brie",
                "Manteca",
                "Crema batida",
                "Leche condensada azucarada",
                "Leche condensada sin azúcar",
                "Margarina",
            ]
        },
        {
            id: 6,
            name:"Ingredientes básicos",
            icon: ShelvesIcon,
            ingredients: [
                "Harina",
                "Azúcar",
                "Levadura",
                "Levadura en polvo",
                "Aceite de oliva",
                "Aceite de girasol",
                "Vinagre",
                "Miel",
                "Azúcar moreno",
                "Vainilla",
                "Cacao en polvo",
                "Bicarbonato de sodio",
                "Polvo de hornear",
                "Gelatina",
                "Caldo de pollo",
                "Caldo de verduras",                
            ]
        },
    ]

    const handleMakeQuery = () => {
        let query = `Tengo los siguientes ingredientes: ${ingredientsSelected.join(", ")} ${menuHour.length > 0 ? ". Quiero que me realices un menu para mi: " + menuHour + "." : ".Quiero que me realices un menu con los ingredientes propuestos."} ${menuType.length>0 ? "Mi menu debe ser apto para: " + menuType : ""}`

        UseChatGPT(query).then((p)=>{
            if(!p.error){
                console.log(p.data)
            }
        })
    
    };

    const handleMenuHour = (momentoftheday) => {
        if(menuHour.includes(momentoftheday)){
            setMenuHour(prevMenuHour => prevMenuHour.filter(item => item !== momentoftheday))
        }else{
            setMenuHour(prevMenuHour => [...prevMenuHour, momentoftheday])
        }
    };

    const handleMenuType = (type) => {
        if(menuType.includes(type)){
            setMenuType(prevMenuType => prevMenuType.filter(item => item !== type))
        }else{
            setMenuType(prevMenuType => [...prevMenuType, type])
        }
    };

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
                                    item={item}
                                    setShowModal={setShowModal}
                                    setCardSelected={setCardSelected}
                                    setIngredientsCategory={setIngredientsCategory}
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
                                Desayuno <input type='checkbox' name='desayuno' onChange={(e)=>handleMenuHour(e.target.name)}/><br/>
                                Almuerzo <input type='checkbox' name='almuerzo' onChange={(e)=>handleMenuHour(e.target.name)}/><br/>
                                Merienda <input type='checkbox' name='merienda' onChange={(e)=>handleMenuHour(e.target.name)}/><br/>
                                Cena <input type='checkbox' name='cena' onChange={(e)=>handleMenuHour(e.target.name)}/><br/>
                            </div>
                            <div className="Checkbox-2">
                                <h4>Tipo de menu?</h4>
                                Vegano <input type='checkbox' name='vegano' onChange={(e)=>handleMenuType(e.target.name)}/><br/>
                                Vegetariano <input type='checkbox' name='vegetariano' onChange={(e)=>handleMenuType(e.target.name)}/><br/>
                                Celiaco <input type='checkbox' name='celiaco' onChange={(e)=>handleMenuType(e.target.name)}/><br/>
                                Diabetico <input type='checkbox' name='diabetico' onChange={(e)=>handleMenuType(e.target.name)}/><br/>
                                Sin Tacc <input type='checkbox' name='sin-tacc' onChange={(e)=>handleMenuType(e.target.name)}/><br/>
                            </div>
                        </div>
                        <div className={ingredientsSelected.length === 0 ? "Cocinar-button-container-disabled" : "Cocinar-button-container"} onClick={handleMakeQuery}>
                            <div className={ingredientsSelected.length === 0 ? "Cocinar-button-disabled" : "Cocinar-button"}>Cocinar!</div>
                        </div>
                    </div>
                </div>
                <Modal isActive={showModal} setShowModal={setShowModal} cardSelected={cardSelected} ingredients={igredientsCategory} setIngredients={setIngredients} ingredientsSelected={ingredientsSelected}/> 
            </div>
        </>
    )
}