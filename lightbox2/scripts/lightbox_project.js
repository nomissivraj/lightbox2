/* PSEUDO CODE & 
*   Individual modules that launch 
*   Work out how i'm going to detect mode - try not to go overly complicated with this:
        CSS Classes (specific images)
        Self detection (All single images if mode is set to all images)
        Data Attributes should only be used for extra relate info that can be pulled - not to be used as an identifyer
*/

//variables
var mode = 'image'; //temporary variable for testing
//Main functions

function modeCheck() {
    //switch case
    switch(mode) {
        case 'image':
            imageBox()
            break;
        case 'gallery':
            galleryBox()
            break;
        case 'modal':
            modalBox();
        case 'iframe':
            iframeBox();
        default:
            lightbox();
    }
    
}

function lightbox() {
    console.log('lit up');
}

function imageBox() {
    lightbox();
    console.log('image box');
    //image specific stuff here
}

function galleryBox() {
    lightbox();
    console.log('gallery box');
    //gallery specific stuff here
}

function modalBox() {
    lightbox();
    console.log('modal box');
    //modal specific stuff here
}

function iframeBox() {
    lightbox();
    console.log('iframe box');
    //iframe specific stuff here
}

//other handler functions

//behaviour

//tab restrictions - accessibility


window.onload = function() {
    console.log('test');
}