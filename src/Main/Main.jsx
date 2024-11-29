import { languages } from '../assets/languages'

export function Main(){
    return(
        <div className='container'>
            <div className="row">{
            languages.map((language)=>{
                return(
                    <div className="col" key={language.id}>
                        <button type="button" className="btn btn-primary">{language.title}</button>
                    </div>               
                )
                
            })
            }</div>
        </div>
    )
}