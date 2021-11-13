import ALinkedList from "./Model/ILinkedList";
import ListItem from "./Model/ListItem";
import AppSettings from "../../AppSettings";

export default class LinkedList<T> extends ALinkedList<T> {
    private List: Array<ListItem<T>> = [];
    private Iterator: number = 0;
    private readonly Settings: AppSettings = new AppSettings();

    public get Value(): T | null {
        if ( this.List.length !== 0 )
            return this.List[ this.Iterator ].Value;
        else 
            return null;
    }

    public get Previous(): T | null {
        if ( this.List.length !== 0 ) 
            return this.List[ this.Iterator ].Previous;
        else
            return null;
    }

    public get Next(): T | null  {
        if ( this.List.length !== 0 )
            return this.List[ this.Iterator ].Next;
        else 
            return null;
    }

    public Move = (): LinkedList<T> => {
        if ( this.List.length > this.Iterator )
            this.Iterator++;

        return this;
    }

    public Reset = (): LinkedList<T> => {
        this.Iterator = 0;

        return this;
    }

    public AddMultiple = ( Array: Array<T> ) => {
        Array.forEach( ( item: T )  => {
            this.Add( item );
        })
    }

    public Add = (Value: T): LinkedList<T> => {
        this.List.push( new ListItem<T>(Value) );
        this.Update();

        return this;
    }

    protected Update = (): void => {
        const LastIndex = this.List.length - 1;

        if ( this.List[ LastIndex - 1 ] !== undefined ) {
            this.List[ LastIndex - 1 ].Next = this.List[ LastIndex ].Value;
            this.List[ LastIndex ].Previous = this.List[ LastIndex - 1 ].Value;
        }
        
        if ( this.Settings.DevelopmentMode )
            this.Debug();
    }

    private Debug(): void {

        console.log(this.List)
        console.log("---------------------------");
        this.List.forEach( ( item: ListItem<T> )  => {
            console.log(
                `Previous: ${item.Previous}\n` + 
                `Value: ${item.Value}\n` +
                `Next: ${item.Next}\n`
            )
        })
        console.log("---------------------------")
    }
}