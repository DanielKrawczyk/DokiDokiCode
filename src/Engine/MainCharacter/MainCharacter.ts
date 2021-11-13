import IMainCharacter from './Model/IMainCharacter';
import IChoice from './Model/IChoice';

export default class MainCharacter implements IMainCharacter {

    private _MainCharacterName: string;
    get MainCharacterName(): string {
        return this._MainCharacterName;
    }

    private _Choices: Array<IChoice> = [];
    get Choices(): Array<IChoice> {
        return this._Choices;
    }

    private _CurrentStage: number = 0;
    get CurrentStage(): number {
        return this._CurrentStage;
    }

    constructor( MainCharacterName: string, CurrentStage: number = 0, Choices: Array<IChoice> = [] ) {
        this._MainCharacterName = MainCharacterName;
        this._CurrentStage = CurrentStage;
        this._Choices = Choices;
    }

    AddChoice = ( value: IChoice ): number => this._Choices.push( value );

    SetCurrentStage = ( value: number ): number => this._CurrentStage = value;

    RenameCharacter = ( value: string ): string => this._MainCharacterName = value;
}