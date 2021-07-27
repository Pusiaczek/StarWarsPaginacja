import './PageSelector.css';


function PageSelector(props) {

    const pages = (n) => {
        let listItems = [];
        for (let i = 1; i <= n; i++){
            let classes = "page-selector__item";

            if (i === props.page) {
                classes += " page-selector__item--current"
            }

            listItems.push(<li className={classes} 
                                key={i}
                                onClick={() => props.changePage(i)}
                                value={i}
                                >{i}
                            </li>);
        }
        return listItems;
    }

    return(
        <ul className='page-selector'>
            <li key="listPrev"  onClick={() => props.changePage("prev")}  className='page-selector__item'>{"<"}</li>
            {pages(props.totalPages)}
            <li key="listNext"  onClick={() => props.changePage("next")} className='page-selector__item'>{">"}</li>
        </ul>
    )
}

export default PageSelector;