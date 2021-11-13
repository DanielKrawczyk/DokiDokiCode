import { GetId } from "../../../Handlers/DocumentHandlers";
import { SaveGame, LoadGame } from "../../../Handlers/SaveGameHandler";

export default function Debug( props: any ): any {
    return (
        <div className="debug">
            <p>
                Current state: { props.State }
            </p>
            <input type="number" id="debug-input" />
            <button onClick={ () => props.ProceedTo( ( GetId( "debug-input" ) as HTMLInputElement ).value ) }>
                Proceed.
            </button>
            <button onClick={ () => props.OnBackToMenu() }>
                Back to menu.
            </button>
            <button onClick={ () => SaveGame( props.Player ) } >
                TEST SaveGame
            </button>
            <button onClick={ () => {
                console.log(LoadGame());
            }}>
                TEST LoadGame
            </button>
        </div>
    )
}