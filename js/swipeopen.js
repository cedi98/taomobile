
$( document ).on( "pageinit", "#demo-page", function() {
    $( document ).on( "swipeleft swiperight", "#demo-page", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#right-panel" ).panel( "open" );
            } else if ( e.type === "swiperight" ) {
                $( "#left-panel" ).panel( "open" );
            }
        }
    });
});


$( document ).on( "pageinit", "#Artists", function() {
    $( document ).on( "swipeleft swiperight", "#Artists", function( e ) {
        
        event.preventDefault();
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#right-panel" ).panel( "open" );
            } else if ( e.type === "swiperight" ) {
                $( "#artists_panel" ).panel( "open" );
            }
        }
    });
});

$( document ).on( "pageinit", "#ming_jing", function() {
    $( document ).on( "swipeleft swiperight", "#ming_jing", function( e ) {
        
        event.preventDefault();
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#right-panel" ).panel( "open" );
            } else if ( e.type === "swiperight" ) {
                $( "#ming_jing_panel" ).panel( "open" );
            }
        }
    });
});

$( document ).on( "pageinit", "#kailin", function() {
    $( document ).on( "swipeleft swiperight", "#kailin", function( e ) {
        
        event.preventDefault();
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#right-panel" ).panel( "open" );
            } else if ( e.type === "swiperight" ) {
                $( "#kailin_panel" ).panel( "open" );
            }
        }
    });
});

$( document ).on( "pageinit", "#song", function() {
    $( document ).on( "swipeleft swiperight", "#song", function( e ) {
        
        event.preventDefault();
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#right-panel" ).panel( "open" );
            } else if ( e.type === "swiperight" ) {
                $( "#song_panel" ).panel( "open" );
            }
        }
    });
});

$( document ).on( "pageinit", "#exhibitions", function() {
    $( document ).on( "swipeleft swiperight", "#exhibitions", function( e ) {
        
        event.preventDefault();
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#right-panel" ).panel( "open" );
            } else if ( e.type === "swiperight" ) {
                $( "#exhibitions_panel" ).panel( "open" );
            }
        }
    });
});

$( document ).on( "pageinit", "#recent_arivals", function() {
    $( document ).on( "swipeleft swiperight", "#recent_arivals", function( e ) {
        
        event.preventDefault();
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#right-panel" ).panel( "open" );
            } else if ( e.type === "swiperight" ) {
                $( "#recent_panel" ).panel( "open" );
            }
        }
    });
});





