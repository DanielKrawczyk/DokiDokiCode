import ICharacter from "./Model/ICharacter";
import IImages from './Model/IImages';
import { GetId } from "../../Handlers/DocumentHandlers";
import PositionList from "./Features/PositionList";

export default class Character implements ICharacter {

    public readonly CharacterName: string;
    public readonly TempEffects: Array<string>;
    public readonly Position: string;
    public readonly Images: IImages;

    constructor( CharacterName: string, TempEffects: Array<string>, Position: string, Images: IImages ) {
        this.CharacterName = CharacterName;
        this.TempEffects = TempEffects;
        this.Position = Position;
        this.Images = Images;
    }

    Element = (): DOMTokenList => { return GetId( `character-${this.CharacterName}` ).classList };

    HeadPosition(): any {

        const { head } = this.Images;
        
        if ( head.length === 2 ) {
            return (
                <div className="head">
                    <img alt="" src={`./Assets/Images/${this.CharacterName}/${head[0]}.png`} className="head" />
                    <img alt="" src={`./Assets/Images/${this.CharacterName}/${head[1]}.png`} className="add" />
                </div>
            )
        } else {
            return (
                <div className="head">
                    <img alt="" src={`./Assets/Images/${this.CharacterName}/${head[0]}.png`} className="main" />
                </div>
            )
        }
    }

    BodyPosition(): any {

        const { body } = this.Images;

        if ( body.length === 2 ) {
            return (
                <div className="body">
                    <img alt="" className="left" src={`./Assets/Images/${this.CharacterName}/${body[0]}.png`} />
                    <img alt="" className="right" src={`./Assets/Images/${this.CharacterName}/${body[1]}.png`} />
                </div>
            )
        } else {
            return (
                <div className="body">
                    <img alt="" className="main" src={`./Assets/Images/${this.CharacterName}/${body}.png`} />
                </div>
            )
        }
    }

    ResetPosition = (): void => PositionList.PositionList.forEach( ( position: string ) => this.Element().remove( position ) );

    CheckEffects = (): void => this.TempEffects.forEach( ( effect: string ) => this.ImplementEffect( effect ) );

    ImplementEffect( effect: string ): void {
        
        switch( effect ) {

            case 'fade-in':
                this.Element().add( 'fade-in' );
                break;

            case 'fade-out':
                this.Element().remove('fade-in');
                this.Element().remove('fade-left', 'fade-right');
                break;

            case 'push-down':
                this.Element().add('push-down');
                break;

            case 'push-back':
                this.Element().remove('push-down');
                break;

            case 'jump':
                this.Element().remove('push-down');
                this.Element().add('jump');
                break;

            case 'fade-from-left':
                this.Element().add('fade-from-left')
                break;

            case 'fade-left':
                this.Element().add('fade-left');
                break;

            case 'fade-left-away':
                this.Element().remove('fade-left');
                break;

            default:
                break;
        }
    }

    CheckPosition(): void {

        switch( this.Position ) {
            case 'center':
                this.Element().add('pos-center');
                break;
            case 'center-left':
                this.Element().add('pos-center-left');
                break;
            case 'center-right':
                this.Element().add('pos-center-right');
                break;
            case 'left':
                this.Element().add('pos-left');
                break;
            case 'right':
                this.Element().add('pos-right');
                break;
            case 'left-center':
                this.Element().add('pos-left-center');
                break;
            case 'right-center':
                this.Element().add('pos-right-center');
                break;
            case 'behind-left-center':
                this.Element().add('pos-behind-left-center');
                break;
            default:
                break;
        }

        const { body } = this.Images;

        if ( this.CharacterName === "Natsuki" )
            if ( body[0] === "3" || body[0] === "3b" )
                this.Element().add( "natsuki-head-fix" );
    }
}