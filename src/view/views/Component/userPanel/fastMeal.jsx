export default function FastMeal({setFast}){
    
    const fastHandler = event=> setFast(event.target.checked)

    return(
        <div className="time-to-make">
        <p className="criteria__title">Szybkie do zrobiona?</p>
            <input type="checkbox" name="fast" id="fast" onChange={fastHandler} />
        </div>
    )
}