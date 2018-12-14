describe("notes-model", function () {

    it("returns note text", function () {
        var text = new Note("Buy milk");
        expect(text.returnText()).toEqual("Buy milk");
    });

    it("returns note text", function () {
        var text = new Note("Buy milk");
        expect(text.returnText()).toEqual("Buy milk");
    })

});
