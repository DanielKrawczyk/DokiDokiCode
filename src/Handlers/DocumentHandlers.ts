export function GetId( ElementId: string ): HTMLElement {
    return ( document.getElementById( ElementId ) as HTMLElement );
}

export function GetQuery( Element: string ): HTMLElement {
    if (Element[0] !== ".") Element = "." + Element;
    return ( document.querySelector( Element ) as HTMLElement );
}
