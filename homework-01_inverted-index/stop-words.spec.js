import glob from "glob";
import Searcher from "./searcher";

describe("Stop Words", () => {
    let searcher;

    beforeAll(() => {
        searcher = new Searcher(glob.sync("resources/*.txt"));
    });

    it("are ignored", () => {
        expect(searcher.search("an example")).toEqual(["resources/1.txt", "resources/2.txt", "resources/3.txt"]);
        expect(searcher.search("example an")).toEqual(["resources/1.txt", "resources/2.txt", "resources/3.txt"]);
    });
});
