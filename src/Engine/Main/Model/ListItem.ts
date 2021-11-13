export default class ListItem<T> {
    public Previous: T | null = null;
    public readonly Value: T;
    public Next: T | null = null;

    constructor(Value: T) {
        this.Value = Value;
    }
}