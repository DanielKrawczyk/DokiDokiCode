import Character from "../../../Engine/Character/Character"
import Person from "./Components/Person";

export default function Characters( props: any ): any {

    const Characters: Array<Character> = props.Characters.map( ( item: any ) => {

        return new Character( item.name, item.effects, item.position, item.images );
        
    })

    return (
        <div className="characters">
            {
                Characters.map( ( item: Character ) => {
                    return (
                        <Person key={item.CharacterName} Person={ item } />
                    )
                } )
            }
        </div>
    )
}