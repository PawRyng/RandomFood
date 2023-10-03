import { useLoaderData } from "react-router-dom"

import { useAppState } from '../../Controllers/appState';

export default function ElementView(){
    const {respond} = useLoaderData();
    const { appState, setAppState } = useAppState();
    console.log(appState)
    return(

        <div className="element">element</div>
    )
}