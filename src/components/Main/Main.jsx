import { useState } from "react";
import { languages } from "../../assets/languages.js";
import { Button } from "./Button/Button.jsx";
import { Card } from "./Card/Card.jsx";

export function Main() {
  console.log(languages);
  const [value, setValue] = useState(null);// setto a null per non impostare automaticamente una card
  let lenguageClicked = languages[value]; //cosi andiamo a prendere l'elemento cliccato dal nostro array di oggetti

  function clickHandle(valueId){
    setValue(valueId - 1); 
  }


  return (
    <div className="container">
      <div className="row mt-5">
        {languages.map((language,i) => {
          return (
            <div className="col" key={language.id}>
              <Button 
               callback={() => clickHandle(language.id)} //passo una callback che poi riverra eseguita qui
               title={language.title} 
               //bgColor = {i=== lenguageClicked ? style.active : ''}
              />
            </div>
          );
        })}
      </div>
      {lenguageClicked ? 
        <Card
          title={lenguageClicked.title}
          description={lenguageClicked.description}
        />
       : 
        <div className="row mt-5">Premi un bottone</div>
      }
    </div>
  );
}
