import { useSetRecoilState } from "recoil";
import { Click, Hover } from "../../../Assets/Sounds";
import PlayerNameState from "../../../States/PlayerName";

export default function SelectName( props: any ): any {
    const SetName = useSetRecoilState( PlayerNameState );

    function SaveNameToLocal( Name: string ): void {
        SetName( Name );
        localStorage.setItem( "dokidoki-playername", JSON.stringify( Name ) );
        props.OnNewGame();
    }

    return (
        <div className="name" id="name">
            <div className="name-frame">
                <img src="./Assets/Images/UI/frame.png" alt="" />
                <div className="name-frame_input">
                    <p>
                        Write your name:
                    </p>

                    <input type="text" id="new-name" autoComplete="off" />

                    <p 
                        className="ok" 
                        onMouseOver={ () => Hover.Play() } 
                        onClick={ () => {
                            Click.Play();
                            const Name: string = ( document.getElementById( "new-name" ) as HTMLInputElement ).value;
                            if ( Name.length < 3 ) return;
                            SaveNameToLocal( Name );
                        }}>
                            Ok.
                    </p>

                    <audio src="./Assets/Audio/hover.ogg" id="ok-hover"></audio>
                </div>
            </div>
        </div>
    )
}