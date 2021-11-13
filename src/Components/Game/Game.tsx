import { useState, useEffect } from "react";
import MainCharacter from "../../Engine/MainCharacter/MainCharacter";
import Story from "../../Engine/Story/Story";
import { GetId, GetQuery } from "../../Handlers/DocumentHandlers";
import Background from "./Components/Background";
import Characters from "./Components/Characters";
import Debug from "./Components/Debug";
import Storybar from "./Components/Storybar";

import { useRecoilValue } from "recoil";
import PlayerNameState from "../../States/PlayerName";

export default function Game( props: any ): any {

    const [ DataCount, SetDataCount ] = useState(0);
    const Data: Story = new Story( props.Data[ DataCount ] );
    const Player: MainCharacter = new MainCharacter( useRecoilValue( PlayerNameState ) );
    Player.SetCurrentStage(DataCount);

    function FadeInAndOutBlackscreen(): void {
        const EStory: DOMTokenList = GetId( "story" ).classList,
            EBlackscreen: DOMTokenList = GetQuery( "blackscreen" ).classList,
            EStoryBar: DOMTokenList =  GetId( "storybar" ).classList;
        
        EStory.add( "hide" );

        setTimeout(() => {

            EBlackscreen.add('active');
            EStory.add('fade-out');

            setTimeout(() => {

                SetDataCount( DataCount + 1 );
                EStory.remove("fade-out");

                setTimeout(() => {

                    setTimeout(() => {
                        EBlackscreen.remove('active');
                    }, 500);

                    setTimeout(() => {
                        EStoryBar.remove('hide');
                    }, 1000);

                }, 1000);

            }, 500);

        }, 300);
    }

    function Next(): void {
        let temp = DataCount;
        temp++;
        SetDataCount( temp );
    }

    useEffect(() => {

        setTimeout(() => {
            GetQuery( "blackscreen" ).classList.remove( "active" );

            setTimeout(() => {
                const Storybar = GetId( "storybar" );
                if (Storybar !== null)
                    Storybar.classList.remove( "hide" );
            }, 1000);

        }, 1000);

    })

    if ( Data.Text === "fade-black" ) {
        FadeInAndOutBlackscreen();
    } else if ( Data.Text === "location-reload" ) {
        props.OnBackToMenu();
    }

    return (
        <div className="story" id="story">
            <Background Image={ Data.Background } />
            <Characters Characters={ Data.Characters } />
            <div className="storybar hide" id="storybar">
                <Storybar
                    Person={ Data.Person }
                    Text={ Data.Text }
                    OnNext={() => {
                        if ( DataCount === props.Data.length - 1 ) return window.alert( "Rest of the story is under development" );
                        Next();
                    }}
                />
            </div>
            {
                Data.Music === "" ? "":<audio src={`./Assets/Audio/${Data.Music}.ogg`} autoPlay loop></audio>
            }
            {
                !props.Debug ? "":
                    <Debug 
                        State={ DataCount }
                        Player={ Player }
                        ProceedTo={ ( value: number ) => {
                            if ( value < 0 || value > props.Data.length - 1 ) return;
                            SetDataCount( value );
                        }}
                        OnBackToMenu={ () => props.OnBackToMenu() }
                    />
            }
        </div>
    )
}