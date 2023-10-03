import { useState } from "react"

import dietCrytery from '../../../translactions/dietCrytery.json'

export default function DietComponent({setDiet}){
    

    const {data} = dietCrytery;
    const [dietState, setDietState] = useState(false);
    const [otherDietState, setOtherDietState] = useState(false);
    const generateOption = (item, key) =>{
        return(
            <option key={key} value={item}>{item}</option>
        )
    }

    const dietHandler = event =>{
        setDietState(event.target.checked);
        setOtherDietState(false)
    };

    const otherDietHandler = event => {
        setDiet(event.target.value)
    //     if(event.target.value === "other") {
    //     setOtherDietState(true)
    // }
    // else{
    //     setOtherDietState(false)}
    }
        
    return(
        <div className="diet">
            <p className="criteria__title">Stosujesz dietę?</p>
            <input type="checkbox" name="diet" id="diet" onChange={dietHandler}/>
            {dietState && <select name="" id="" onChange={otherDietHandler}>
                {data.map( (item, key) => generateOption(item, key))}
                {/* <option id="diet--other" value="other">inna</option> */}
            </select>
            }
            {/* {otherDietState && <input type="text" /> } */}
            
        </div>
    )
}