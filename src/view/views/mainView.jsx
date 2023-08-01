import { useLoaderData, useNavigate } from "react-router-dom"

import { useEffect } from "react"


import NonUsed from './mainViewViews/nonUsed'
export default function MainView(){
    const {used} = useLoaderData()
    const navigator = useNavigate()
    useEffect(()=>{
        if(!used){
            navigator('/no-used')
        }
    })
    return(
        "uzywany"
    )
}