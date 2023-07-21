import { useLoaderData } from "react-router-dom"


import NonUsed from './mainViewViews/nonUsed'
export default function MainView(){
    const {used} = useLoaderData()
    return(
        used ? "uzywany" : <NonUsed/>
    )
}