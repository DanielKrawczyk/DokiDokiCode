import { useState, useEffect } from "react";
import Storybar from "./Game/Components/Storybar";
import Button from "./Game/Components/Button";
import { GetId } from "../Handlers/DocumentHandlers";
import Warn from "../Data/warning.json";

export default function Warning( props: any ): any {
    const [ WarningStage, SetWarningStage ] = useState(0),
        WarningText = Warn[ WarningStage ];

    useEffect(() => {
        GetId( "storybar" ).classList.remove( "hide" );
    });

    return (
        <div className="story" id="main-warning">
            <img src="./Assets/Images/Warning/warning2.png" className="second" alt="" />
            <img src="./Assets/Images/Warning/warning.png" id="warn" className="first" alt="" />

            {
                WarningText.btn.map( ( item: any ): any => {
                    return (
                        <Button ButtonText={ item.text } OnNext={ () => props.OnNext() } />
                    )
                })
            }

            <Storybar 
                Person="" 
                Text={ WarningText.text } 
                OnNext={ () => {
                    if ( WarningStage === 2 ) return;
                    SetWarningStage( WarningStage + 1 );
                }}
            />

        </div>
    )
}