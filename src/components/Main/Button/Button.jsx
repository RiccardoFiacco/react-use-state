export function Button({title = '', callback}){
    return(
        <button type="button" className="btn btn-primary" onClick={callback}>{title}</button>//al click del bottono andiamo delegare al genitore l'esecuzione della funzione che lui ci ha passato
    )
}