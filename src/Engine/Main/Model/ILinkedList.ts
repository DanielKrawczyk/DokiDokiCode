import LinkedList from "../LinkedList";

export default abstract class ALinkedList<T> {

    protected abstract UpdateAll(): void;
    protected abstract GetValue: () => T | undefined;
    public abstract GetPrevious: () => T | null | undefined;
    public abstract GetNext: () => T | null | undefined;
    public abstract Next: () => LinkedList<T>;
    public abstract Reset: () => LinkedList<T>;
    public abstract Add: ( arg: T ) => LinkedList<T>;
}