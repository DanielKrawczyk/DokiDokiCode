import { GetId } from "../../Handlers/DocumentHandlers";
import IWriter from "./Model/IWriter";

export default class Writer implements IWriter {
    Index: number = 0;
    readonly Time: number = 30;
    Content: string = "";
    IsDone: boolean = false;

    Text: Array<string>;

    constructor( Text: Array<string> ) {
        this.Text = Text;
    }

    Write = ( TargetId: string ): void => this.WritingScript( GetId( TargetId ) );

    private WritingScript( Target: HTMLElement ): void {

        this.Content += this.Text[ this.Index ];

        Target.innerHTML = this.Content;

        this.Index++;

        if ( this.Index < this.Text.length && !this.IsDone ) {
            
            setTimeout(() => {
                this.WritingScript( Target );
            }, this.Time);

        } else if ( this.Index < this.Text.length && this.IsDone ) {

            this.WritingScript( Target );

        } else {

            this.IsDone = true;
            GetId( "arrow" ).classList.add( "active" );

        }
    }
}