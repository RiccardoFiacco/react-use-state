import { useState } from 'react'
import { languages } from '../assets/languages'

export function Main(){
    console.log(languages)
    const [value, setValue] = useState(null)
    let lenguageClicked = languages[value];
    console.log(lenguageClicked)
        return(
        <div className='container'>
            <div className="row mt-5">{

            languages.map((language)=>{
                return(
                    <div className="col" onClick={()=>{setValue(language.id -1); console.log(language.id)}} key={language.id}>
                        <button type="button" className="btn btn-primary">{language.title}</button>
                    </div>               
                )              
            })
            }</div>
            {lenguageClicked ?
            <div className="row mt-5">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{lenguageClicked.title}</h5>
                        <p className="card-text">{lenguageClicked.description}</p>
                    </div>
                </div>
            </div> : <div className="row mt-5">Premi un bottone</div>}
        </div>
    )
}