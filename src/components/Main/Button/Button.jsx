export function Button({title = '', callback}){
    return(
        <button type="button" className="btn btn-primary" onClick={callback}>{title}</button>      
    )
}