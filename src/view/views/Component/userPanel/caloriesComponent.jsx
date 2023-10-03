export default function CalloriesCompoent({setCallories}){

    const calloriesHandler = event =>{
        setCallories(event.target.value)

    }
    return(
        <div className="calories">
            <p className="criteria__title">Ile +/- ma miec kalorii posiłek?</p>
            <input type="number" onChange={calloriesHandler}/>
        </div>
    )
}