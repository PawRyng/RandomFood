// Components
import VegeComponent from "../Component/userPanel/vegeCompoent"
import DietComponent from "../Component/userPanel/dietCompoonent"
import CalloriesCompoent from "../Component/userPanel/caloriesComponent"
import DificultComponent from "../Component/userPanel/dificultComponent"
import FastMeal from "../Component/userPanel/fastMeal"

//liblary

import { useState } from "react"
import { redirect } from "react-router-dom";

//state
import { useAppState } from '../../Controllers/appState';

export default function MainView(){

    const [fast, setFast] = useState(false);
    const [hard, setHard] = useState(false);
    const [callories, setCallories] = useState();
    const [diet, setDiet] = useState();
    const [vege, setVege] = useState(false);


    
    const { appState, setAppState } = useAppState();

    const sendButtonHandler = ()=>{
        
        setAppState((prevState) => ({
        ...prevState,
        vege,
        diet,
        calories: callories,
        easyCooking:hard,
        fastCooking: fast
      }))
      console.log(appState)
      return redirect("/login");
    }
    return(
        <div className="">
            <h1>Przygotujmy posiłek!</h1>
            <div className="criteria">
                <VegeComponent setVege={setVege}/>
                <DietComponent setDiet={setDiet}/>
                <CalloriesCompoent setCallories={setCallories}/>
                <DificultComponent setHard={setHard}/>
                <FastMeal setFast={setFast}/> 

                <button onClick={sendButtonHandler}>Gotujmy!</button>
            </div>

        </div>
    )
}