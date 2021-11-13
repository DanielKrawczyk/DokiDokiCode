import Character from "../../Engine/Character/Character";

export default interface IStoryData {
    music: string;
    background: string;
    text: string;
    person: string;
    characters: Array<Character>;
}