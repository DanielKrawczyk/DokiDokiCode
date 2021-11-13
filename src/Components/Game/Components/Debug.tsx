import { GetId } from "../../../Handlers/DocumentHandlers";

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
        </div>
    )
}