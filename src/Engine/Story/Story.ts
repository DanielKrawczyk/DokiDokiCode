import IStoryData from "../../Data/Model/IStoryData";
import Character from "../Character/Character";
import IStory from "./Model/IStory";

export default class Story implements IStory {
    public readonly Music: string;
    public readonly Background: string;
    public readonly Text: string;
    public readonly Person: string;
    public readonly Characters: Array<Character>;

    constructor( Data: IStoryData ) {
        this.Music = Data.music;
        this.Background = Data.background;
        this.Text = Data.text;
        this.Person = Data.person;
        this.Characters = Data.characters;
    }
}