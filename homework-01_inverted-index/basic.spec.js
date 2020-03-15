import glob from "glob";
import Searcher from "./searcher";

describe("Basic", () => {
    let searcher;

    beforeAll(() => {
        searcher = new Searcher(glob.sync("resources/*.txt"));
    });

    it("finds a single word", () => {
        expect(searcher.search("really")).toEqual(["resources/1.txt"]);
        expect(searcher.search("fine")).toEqual(["resources/1.txt", "resources/2.txt"]);
        expect(searcher.search("example")).toEqual(["resources/1.txt", "resources/2.txt", "resources/3.txt"]);
    });

    it("finds multiple words", () => {
        expect(searcher.search("fine example")).toEqual(["resources/1.txt", "resources/2.txt"]);
        expect(searcher.search("example fine")).toEqual(["resources/1.txt", "resources/2.txt"]);
        expect(searcher.search("fine example text")).toEqual(["resources/1.txt", "resources/2.txt"]);
    });

    it("is case-insensitive", () => {
        expect(searcher.search("Words")).toEqual(["resources/1.txt", "resources/2.txt"]);
    });

    it("does not explode when no results are found for a single word", () => {
        expect(searcher.search("blubbergurken")).toEqual([]);
    });

    it("does not find any results when not all words match", () => {
        expect(searcher.search("blubbergurken text")).toEqual([]);
        expect(searcher.search("text blubbergurken")).toEqual([]);
    });
});
