function NotesView() {
}

NotesView.prototype = {
    render: function (notes) {
        //nice heading
        //form
        //loop through the notes and create the html
        return [
            "<h1>Note App</h1>",
            "<form id='note-form'>",
                "<input type='text' id='note-text'/>",
                "<input type='submit' value='Save'/>",
                "<input type='button' id='clean-button' value='Clear'/>",
            "</form>",
            notes.map(function(note) {
                return "<li style='color:" + note.color + "'>" + note.text + "</li>"
            }).join("")
        ].join("")
    },

    // bindAddNote: function (addNoteCallback) {
    //     var noteForm = document.getElementById('note-form');
    //     noteForm.addEventListener('submit', addNoteCallback);
    // },

    getNoteText: function () {
        return document.getElementById("note-text").value;
    },

    setNoteText: function(value) {
        document.getElementById("note-text").value = value;
    },

    getNoteForm: function () {
        return document.getElementById('note-form');
    },
    getCleanButton: function () {
        return document.getElementById('clean-button');
    }
};

