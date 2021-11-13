import IChoice from "./IChoice";

export default interface IMainCharacter {
    MainCharacterName: string;
    Choices: Array<IChoice>;
    CurrentStage: number;
    
    AddChoice: Function;
    SetCurrentStage: Function;
    RenameCharacter: Function;
}