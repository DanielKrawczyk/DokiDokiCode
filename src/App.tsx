import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import MainMenu from "./Components/MainMenu/MainMenu";
import Warning from "./Components/Warning";
import Game from "./Components/Game/Game";
import PlayerNameState from './States/PlayerName';
import { GetId, GetQuery } from "./Handlers/DocumentHandlers";
import StoryData from "./Data/story.json";
import AboutData from "./Data/about.json";
import TestData from "./Data/test.json";
import AppSettings from "./AppSettings";

export default function App( props: any ): any {

    const Settings: AppSettings = new AppSettings();

    const [ GameState, SetGameState ] = useState(1),
        PlayerName = useRecoilValue( PlayerNameState );

    function StartNewGame( Stage: number = 2 ): void {
        
        GetQuery( "blackscreen" ).classList.add( "active" );
        GetId( "main-menu" ).classList.add( "fade-out" );

        setTimeout(() => {
            SetGameState( Stage );
        }, 3000);
    }

    function FadeAfterWarning(): void {

        GetId( "storybar" ).classList.add( "hide" );
        GetId( "warn" ).classList.add( "hide" );
        GetQuery( "button" ).classList.add( "hide" );

        setTimeout(() => {
            SetGameState( 1 );
        }, 3000);
        
    }

    function GoBackToMenu() {

        GetQuery( "blackscreen" ).classList.add( "active" );

        setTimeout(() => {
            SetGameState( 1 );
            GetQuery( "blackscreen" ).classList.remove( "active" );
        }, 500);

    }

    const Components = [
        <Warning OnNext={ () => FadeAfterWarning() } />,
        <MainMenu OnStart={ () => StartNewGame() } OnHelp={ () => StartNewGame( 3 ) } OnTest={ () => StartNewGame( 4 ) } />,
        <Game Data={ StoryData } Debug={ Settings.DevelopmentMode } OnBackToMenu={ () => GoBackToMenu() } />,
        <Game Data={ AboutData } OnBackToMenu={ () => GoBackToMenu() } Debug={ Settings.DevelopmentMode } />,
        <Game Data={ TestData } OnBackToMenu={ () => GoBackToMenu() } Debug={ Settings.DevelopmentMode } />
    ]

    useEffect(() => {
        if ( PlayerName === "" ) SetGameState( 0 );
    }, [ props, PlayerName ]);

    return (
        <div className="game">
            {
                Components[ GameState ]
            }

            <div className="blackscreen"></div>
        </div>
    )
}