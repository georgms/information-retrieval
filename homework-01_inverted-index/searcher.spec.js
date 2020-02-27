import glob from "glob";
import Searcher from "./searcher";

describe("Searcher", () => {
    let searcher;

    beforeAll(() => {
        searcher = new Searcher(glob.sync("resources/*.txt"));
    });

    it("finds multiple words in multiple files", () => {
        expect(searcher.search("this text")).toEqual(["resources/1.txt", "resources/2.txt", "resources/3.txt"]);
    });

    it("finds multiple words in a single file", () => {
        expect(searcher.search("another text")).toEqual(["resources/2.txt"]);
    });

    it("is case-insensitive", () => {
        expect(searcher.search("Words")).toEqual(["resources/1.txt"]);
    });

    it("does not explode when no results are found for a single word", () => {
        expect(searcher.search("blubbergurken")).toEqual([]);
    });

    it("does not find results when not all words match", () => {
        expect(searcher.search("blubbergurken text")).toEqual([]);
    });
});
