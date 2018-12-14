function NoteView() {
}

NoteView.prototype = {
  render: function (note) {
      return [
          "<div>",
          "<p style='color:" + note.color + "'>" + note.text + "</p>",
          "</div>"
      ].join('')
  }
};
