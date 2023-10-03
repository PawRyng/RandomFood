<<<<<<< HEAD
import { useLoaderData } from "react-router-dom"
import { useState } from "react";
=======
import { useLoaderData, useNavigate } from "react-router-dom"

import { useEffect } from "react"

>>>>>>> 4100ae887ca76a4344c47421934862d48f72c43d

import NonUsed from './mainViewViews/nonUsed'
import UsedView from './mainViewViews/usedView'

export default function MainView(){
<<<<<<< HEAD
    const {used} = useLoaderData();
    const [use, setUse] = useState(used)
    return(
        use ? <UsedView /> : <NonUsed setUsed={setUse}/>
=======
    const {used} = useLoaderData()
    const navigator = useNavigate()
    useEffect(()=>{
        if(!used){
            navigator('/no-used')
        }
    })
    return(
        "uzywany"
>>>>>>> 4100ae887ca76a4344c47421934862d48f72c43d
    )
}