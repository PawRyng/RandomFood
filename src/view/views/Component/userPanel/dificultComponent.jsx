export default function DificultComponent({setHard}){
    const cookingLevelHandler = event=> event.target.value ==="Easy" ? setHard(false) : setHard(true)
    return(
        <div className="cooking-level">
            <p className="criteria__title">Jaki poziom trudności przygotowania?</p>
            <label htmlFor="Easy">Easy</label>
            <input type="radio" value="Easy" name="cooking-level" id="Easy" onChange={cookingLevelHandler} defaultChecked/>
            <label htmlFor="Harnd">Harnd</label>
            <input type="radio" value="Harnd" name="cooking-level" id="Harnd" onChange={cookingLevelHandler}/>
            </div>
    )
}