import ALinkedList from "./Model/ILinkedList";
import ListItem from "./Model/ListItem";

export default class LinkedList<T> extends ALinkedList<T> {
    private List: Array<ListItem<T>> = [];
    private Iterator: number = 0;

    public get Value(): T | undefined {
        return this.GetValue();
    }

    public GetPrevious = (): T | null | undefined => {
        if ( this.List.length === 0 ) return;
        return this.List[this.Iterator].Previous;
    }

    public GetNext = (): T | null | undefined => {
        if ( this.List.length === 0 ) return;
        return this.List[this.Iterator].Next;
    }

    public GetValue = (): T | undefined => {
        if ( this.List.length === 0 ) return;
        return this.List[this.Iterator].Value;
    }

    public Next = (): LinkedList<T> => {
        if ( this.List.length >= this.Iterator )
            this.Iterator++;

        return this;
    }

    public Reset = (): LinkedList<T> => {
        this.Iterator = 0;

        return this;
    }

    public Add = (Value: T): LinkedList<T> => {
        this.List.push( new ListItem<T>(Value) );
        this.UpdateAll();

        return this;
    }

    protected UpdateAll = (): void => {

        for (let i: number = 0; i < this.List.length; i++) {

            if ( this.List[i - 1] !== undefined ) {
                this.List[i].Previous = this.List[i - 1].Value;
            }
            if ( this.List[i + 1] !==  undefined ) {
                this.List[i].Next = this.List[i + 1].Value;
            }
        }
    }
}