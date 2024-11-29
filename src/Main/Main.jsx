import { useState } from "react";
import { languages } from "../assets/languages";
import { Button } from "./Button/Button.jsx";
import { Card } from "./Card/Card.jsx";
export function Main() {
  console.log(languages);
  const [value, setValue] = useState(null);// setto a null per non impostare automaticamente una card
  let lenguageClicked = languages[value];

  return (
    <div className="container">
      <div className="row mt-5">
        {languages.map((language) => {
          return (
            <div className="col" key={language.id}>
              <Button 
               callback={() => setValue(language.id - 1)} //passo una callback che poi riverra eseguita qui
               title={language.title} 
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
