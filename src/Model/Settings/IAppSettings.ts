import IPublicPath from "./IPublicPath";

export default interface IAppSettings {
    PublicPath: IPublicPath;
    MusicOn: boolean;
    MusicVolumeLevel: number;
    DevelopmentMode: boolean;
    AllowAutoSave: boolean;
    AllowSmallScreens: boolean;
    AllowTestingArea: boolean;
}