import Settings from "./appsettings.json";
import IAppSettings from "./Model/Settings/IAppSettings";
import IPublicPath from "./Model/Settings/IPublicPath";

export default class AppSettings implements IAppSettings {

    public readonly PublicPath: IPublicPath = Settings.PublicPath;
    public readonly MusicOn: boolean = Settings.MusicOn;
    public readonly MusicVolumeLevel: number = Settings.MusicVolumeLevel;
    public readonly DevelopmentMode: boolean = Settings.DevelopmentMode;
    public readonly AllowAutoSave: boolean = Settings.AllowAutoSave;
    public readonly AllowSmallScreens: boolean = Settings.AllowSmallScreens;
    public readonly AllowTestingArea: boolean = Settings.AllowTestingArea;

}