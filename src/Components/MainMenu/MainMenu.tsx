import { useEffect, useState } from "react";

import Logo from "./Components/Logo";
import Menu from "./Components/Menu";
import MenuCharacters from "./Components/MenuCharacters";
import SelectName from "./Components/SelectName";
import Warning from "./Components/Warning";
import Background from "./Components/Background";
import { GetId } from "../../Handlers/DocumentHandlers";

export default function MainMenu(props: any) {

    const [ IsDone, SetIsDone ] = useState( false );

    function LoadBeforeMainContext() {
        const Logo: DOMTokenList = GetId( "logo" ).classList,
            Warning: DOMTokenList = GetId( "warning" ).classList,
            Main: DOMTokenList = GetId( "main-menu_final" ).classList;
        
        setTimeout(() => {
            Logo.add( "active" );

            setTimeout(() => {
                Logo.remove( "active" );

                setTimeout(() => {
                    Warning.add( "active" );
                }, 500);

                setTimeout(() => {
                    Warning.remove( "active" );

                    setTimeout(() => {
                        Main.add( "active" );
                    }, 500);

                }, 3000);

            }, 3000);

        }, 500);
    }

    useEffect(() => {
        LoadBeforeMainContext();
    });

    return (
        <div className="main-menu" id="main-menu">
            <audio id="mainmenu-audio" src="./Assets/Audio/1.ogg" autoPlay onEnded={ ( item ) => {
                item.currentTarget.currentTime = 22.1;
                item.currentTarget.play();
                
            }}></audio>
            <Logo />
            <Warning />
            <div className="main-menu_final" id="main-menu_final">
                <Background />
                <Menu 
                    OnNewGame={ () => props.OnStart() } 
                    OnHelp={ () => props.OnHelp() } 
                    OnTest={ () => props.OnTest() } 
                />
                <MenuCharacters />
                <SelectName OnNewGame={() => props.OnStart()} />
            </div>
        </div>
    )
}