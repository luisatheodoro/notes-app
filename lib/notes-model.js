function Note(text, color) {
    this.text = text;
    this.color = color;
}

Note.prototype.returnText = function () {
    return this.text;
};

