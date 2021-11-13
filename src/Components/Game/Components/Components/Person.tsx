import { useEffect } from "react";
import Character from "../../../../Engine/Character/Character";

export default function Person( props: any ): any {
    const Person: Character = props.Person;

    useEffect(() => {
        Person.ResetPosition();
        Person.CheckPosition();
        Person.CheckEffects();
    })

    if ( Person.Images.head[0] === "none" ) {
        return (
            <div className="character" id={`character-${Person.CharacterName}`}>
                <img className="main" src={`./Assets/Images/${Person.CharacterName}/${Person.Images.body[0]}.png`} alt=""/>
            </div>
        )
    } else {
        return (
            <div className="character" id={`character-${Person.CharacterName}`}>
                {
                    Person.HeadPosition()
                }
                {
                    Person.BodyPosition()
                }
            </div>
        )
    }
}