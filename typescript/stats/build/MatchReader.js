"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
const CsvFileReader_1 = require("./CsvFileReader");
class MatchReader {
    constructor(dataReader) {
        this.dataReader = dataReader;
        this.matches = [];
    }
    static fromCsv(fileName) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(fileName));
    }
    load() {
        this.dataReader.read();
        this.matches = this.dataReader.data.map((row) => {
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    }
}
exports.MatchReader = MatchReader;
