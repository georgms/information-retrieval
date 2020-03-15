import glob from "glob";
import Searcher from "./searcher";

describe("Word Delimiter", () => {
    let searcher;

    beforeAll(() => {
        searcher = new Searcher(glob.sync("resources/*.txt"));
    });

    it("finds hyphenated words exactly when searching with hyphen", () => {
        expect(searcher.search("text-search")).toEqual(["resources/3.txt"]);
    });

    it("finds hyphenated words and others when searching without hyphen", () => {
        expect(searcher.search("text search")).toEqual(["resources/1.txt", "resources/3.txt"]);
    });
});
