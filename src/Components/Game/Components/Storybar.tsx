import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import Writer from "../../../Engine/Story/Writer";
import { GetId } from "../../../Handlers/DocumentHandlers";
import PlayerNameState from "../../../States/PlayerName";

export default function Storybar( props: any ): any {

    const { Person, Text } = props;
    const PlayerName: string = useRecoilValue( PlayerNameState );
    const NewText: Array<string> = CheckForDollar();
    const Writing: Writer = new Writer( NewText );
    
    function SpaceToProceed(): void {
        document.body.onkeyup = (key: KeyboardEvent) => {
            if ( key.keyCode === 32 ) ProceedWhenDone();
        }
    }

    function CheckForDollar(): Array<string> {
        let FilteredText = [];

        if ( Person !== "" ) FilteredText.push( '"' );

        for (let i: number = 0; i < Text.length; i++ ) {

            if ( Text[i] === "$" ) FilteredText.push( PlayerName );
            else FilteredText.push( Text[i] );

        }

        if ( Person !== "" ) FilteredText.push( '"' );
        
        return FilteredText;
    }

    function RightClickStorybar( element: any ): void {
        element.preventDefault();
        const EStoryBar: DOMTokenList = GetId( "storybar" ).classList;

        if ( EStoryBar.contains( "hide" ) ) 
            EStoryBar.remove( "hide" );
        else 
            EStoryBar.add( "hide" );
    }

    function ProceedWhenDone(): void {
        if ( Writing.IsDone ) 
            props.OnNext();
        else 
            Writing.IsDone = true;
    }

    useEffect(() => {
        GetId( "arrow" ).classList.remove( "active" );
        
        if ( Text === "fade-black" || Text === "location-reload" ) return;
        
        SpaceToProceed();
        Writing.Write( "write-text" );
    })

    return (
        <div 
            className="storybar hide" 
            id="storybar"
            onClick={ () => ProceedWhenDone() }
            onContextMenu={ ( event: any ) => RightClickStorybar( event ) }
        >
            <div className="storybar-frame">
                <img src="./Assets/Images/Story/textbox.png" className="frame" alt="" />
                {
                    Person === "" ? "":<img src="./Assets/Images/Story/namebox.png" className="name" alt="" />
                }
                <img src="./Assets/Images/Story/ctc.png" className="arrow" id="arrow" alt="" />

                <div className="storybar-frame_person">
                    <p>
                        {
                            Person === "$" ? PlayerName : Person
                        }
                    </p>
                </div>
                <div className="storybar-frame_text" id="write-text">

                </div>
                <div className="storybar-frame_options">

                </div>
            </div>
        </div>
    )
}