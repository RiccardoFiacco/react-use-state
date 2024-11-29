import { useState } from "react";
import { languages } from "../assets/languages";
import { Button } from "./Button/Button.jsx";
import { Card } from "./Card/Card.jsx";
export function Main() {
  console.log(languages);
  const [value, setValue] = useState(null);
  let lenguageClicked = languages[value];

  console.log(lenguageClicked);
  
  return (
    <div className="container">
      <div className="row mt-5">
        {languages.map((language) => {
          return (
            <div
              className="col"
              onClick={() => {
                setValue(language.id - 1);
                console.log(language.id);
              }}
              key={language.id}
            >
              <Button title={language.title} />
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
