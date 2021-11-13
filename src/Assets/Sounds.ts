export class Hover {
    private static readonly _Path: string = "./Assets/Audio/hover.ogg";
    static get Path(): string {
        return Hover._Path;
    }

    private static readonly HoverSound: HTMLAudioElement = new Audio( Hover._Path );

    static Play = (): Promise<void> => Hover.HoverSound.play();
}

export class Click {
    private static readonly _Path: string = "./Assets/Audio/select.ogg";
    static get Path(): string {
        return Click._Path;
    }

    private static readonly ClickSound: HTMLAudioElement = new Audio( Click._Path );

    static Play = (): Promise<void> => Click.ClickSound.play();
}