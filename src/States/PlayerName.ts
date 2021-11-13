import { atom } from "recoil";

let Name: string = "";

if ("dokidoki-playername" in localStorage) {
    Name = JSON.parse( ( localStorage.getItem( "dokidoki-playername" ) as string ) );
}

const PlayerNameState = atom({
    key: "Player character name state",
    default: Name
});

export default PlayerNameState;