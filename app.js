window.addEventListener('load', function () {

    var notesView = new NotesView();
    var note = Note;

    //create a controller
    //responsible for listening to submit events
    // - lets do that when we create the controller
    // - when event happens, create a note, then render the app again
    //create a note, then render the app again
    var controller = new NotesController(note, notesView, []);

    //load the initial state of app
   controller.updateDOM();

});
