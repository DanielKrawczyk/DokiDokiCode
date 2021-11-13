import MainCharacter from "../Engine/MainCharacter/MainCharacter";

export function SaveGame( MainCharacter: MainCharacter ): void {
    // Under development
    let SavesStorage: Array<MainCharacter> = LoadGame();
    SavesStorage.push( MainCharacter );

    localStorage.setItem( "dokidoki-savedgames", JSON.stringify( SavesStorage ) );
}

export function LoadGame(): Array<MainCharacter> {
    // Under development
    let SavesStorage: Array<MainCharacter> = [];

    if ("dokidoki-savedgame" in localStorage) {
        SavesStorage = JSON.parse(localStorage.getItem("dokidoki-savedgames") as string);
    }

    return SavesStorage;
}