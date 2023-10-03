export default function VegeComponent({setVege}){
    return(
        <div className="vege">
                    <p className="criteria__title">
                        Posiłek ma być wegetrarianski?
                    </p>
            <input className="radio" type="checkbox" name="choice" id="yes" onChange={event => setVege(event.target.checked)}/>
        </div>
    )
}