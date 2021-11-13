export function CloseWindow(): void {

    if ( window.confirm(" Do you reaaaally want to quit the game? Yuri will miss you... ") ) {
        
        window.alert( "Don't forget to send support and tons of love to Team Salvato! <3" );
        window.location.replace( "https://ddlc.moe/" );

    }
        
}