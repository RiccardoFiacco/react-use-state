import { useState } from 'react'
import { languages } from '../assets/languages'

export function Main(){
    const [value, setValue] = useState(null)

        return(
        <div className='container'>
            <div className="row mt-5">{

            languages.map((language)=>{
                return(
                    <div className="col" onClick={()=>{setValue(language.id)}} key={language.id}>
                        <button type="button" className="btn btn-primary">{language.title}</button>
                    </div>               
                )              
            })
            }</div>
            <div className="row mt-5">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">asf</h5>
                    <p className="card-text">fasdfgasdgsadgasdgasdf</p>
                </div>
                </div>
            </div>
        </div>
    )
}