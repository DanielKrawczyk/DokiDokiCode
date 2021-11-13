export default interface IWriter {
    Index: number;
    Time: number;
    Content: string;
    IsDone: boolean;
    Text: Array<string>;

    Write: Function;
}