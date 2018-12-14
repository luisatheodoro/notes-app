function NotesController(note, notesView, notes) {
    this.note = note;
    this.notesView = notesView;
    this.notes = notes;
}

NotesController.prototype = {
    // binds the view with the controller functions
    _bind: function() {
        var self = this;
        var noteForm = self.notesView.getNoteForm();
        noteForm.addEventListener('submit', function (event) {
            self.addNote(event);
        });

        // this.notesView.bindAddNote(this.addNote);

        var cleanButton = this.notesView.getCleanButton();
        cleanButton.addEventListener('click', function (event) {
            event.preventDefault();
            self.notesView.setNoteText('');
        });
    },

    addNote: function(event) {
        event.preventDefault();
        var noteText = this.notesView.getNoteText();
        this.notes.push(new this.note(noteText, "#"+Math.floor(Math.random()*16777215).toString(16)));
        // this.notes.push("noteText");
        this.updateDOM();
    },

    updateDOM: function () {
        // this.renderer.render('app', this.notesView.render(this.notes));
        document.getElementById('app').innerHTML = this.notesView.render(this.notes);
        this._bind();
    }
};
