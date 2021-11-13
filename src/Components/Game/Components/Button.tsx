import { useState } from "react";
import { Click, Hover } from "../../../Assets/Sounds";

export default function Button( props: any ): any {
    
    const [ ButtonState, SetButtonState ] = useState( 0 );

    const ButtonStates = [
        <img src="./Assets/Images/UI/choice_idle_background.png" alt="" />,
        <img src="./Assets/Images/UI/choice_hover_background.png" alt="" />
    ]

    return (
        <div className="button">
            <div className="button-btn">
                {
                    ButtonStates[ ButtonState ]
                }
            </div>
            <div 
                className="button-text"
                onMouseOver={ () => {
                    Hover.Play();
                    SetButtonState( 1 );
                }}
                onMouseOut={ () => SetButtonState( 0 ) }
                onClick={ () => {
                    Click.Play();
                    props.OnNext();
                }}
            >
                {
                    props.ButtonText
                }
            </div>
        </div>
    )
}