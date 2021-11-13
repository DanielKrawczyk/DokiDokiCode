import { useRecoilValue } from "recoil";
import PlayerNameState from "../../../States/PlayerName";
import { Click, Hover } from "../../../Assets/Sounds";
import { CloseWindow } from "../../../Handlers/CloseHandler";
import Settings from "../../../appsettings.json";

export default function Menu( props: any ): any {

    const PlayerName = useRecoilValue( PlayerNameState );

    const OnNewGame = (): void => props.OnNewGame(),
        OnLoadGame = (): void => window.alert( "In development" ),
        OnSettings = (): void => window.alert( "In development" ),
        OnHelp = (): void => props.OnHelp(),
        OnQuit = (): void => CloseWindow(),
        OnTest = (): void => props.OnTest();

    const MenuButtonsHover = ( element: any ): Promise<void> => ( element.currentTarget.children[0] as HTMLAudioElement ).play();

    return (
        <div className="menu">
            <div className="menu-background" id="menu-background">
                <img src="./Assets/Images/MainMenu/main_menu.png" alt="" />
            </div>
            <div className="menu-logo" id="menu-logo">
                <img src="./Assets/Images/MainMenu/logo.png" alt="" />
            </div>
            <div className="menu-list">
                <p 
                    onMouseOver={ (el) => MenuButtonsHover( el ) } 
                    onClick={ () => {
                        Click.Play();
                        if ( PlayerName === "" ) return ( document.getElementById( "name" ) as HTMLElement ).classList.add( 'active' );
                        OnNewGame();
                    }
                }>
                    New Game
                    <audio src={ Hover.Path }></audio>
                </p>
                <p 
                    onMouseOver={ (el) => MenuButtonsHover( el ) }
                    onClick={ () => {
                        Click.Play();
                        OnLoadGame();
                    }
                }>
                    Load Game
                    <audio src={ Hover.Path }></audio>
                </p>
                <p 
                    onMouseOver={ (el) => MenuButtonsHover( el ) }
                    onClick={ () => {
                        Click.Play();
                        OnSettings();
                    }
                }>
                    Settings
                    <audio src={ Hover.Path }></audio>
                </p>
                <p 
                    onMouseOver={ (el) => MenuButtonsHover( el ) }
                    onClick={ () => {
                        Click.Play();
                        OnHelp();
                    }
                }>
                    Help
                    <audio src={ Hover.Path }></audio>
                </p>
                <p 
                    onMouseOver={ (el) => MenuButtonsHover( el ) } 
                    onClick={ () => {
                        Click.Play();
                        OnQuit();
                    }
                }>
                    Quit
                    <audio src={ Hover.Path }></audio>
                </p>
                {
                    !Settings.AllowTestingArea ? "":                
                        <p 
                            onMouseOver={ (el) => MenuButtonsHover( el ) } 
                            onClick={ () => {
                                Click.Play();
                                OnTest();
                            }
                        }>
                            TEST
                            <audio src={ Hover.Path }></audio>
                        </p>
                }
            </div>
        </div>
    )
}