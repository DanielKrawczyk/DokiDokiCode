export default interface ICharacter {
    CharacterName: string;
    TempEffects: Array<Object>;
    Position: string;
    Images: Object;

    HeadPosition: Function;
    BodyPosition: Function;
    ResetPosition: Function;
    CheckEffects: Function;
    ImplementEffect: Function;
    CheckPosition: Function;
}