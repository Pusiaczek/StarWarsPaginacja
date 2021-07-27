import './SWPlanets.css'

function SWPlanets(props) {

    return(
        <div>
            <h2>Page {props.page}</h2>
            <ul className='planet-list'>
                {props.data.map( item => <li className='planet-list__item' key={item.created}>{item.name}</li>)}
            </ul>
        </div>
    )
}


export default SWPlanets;