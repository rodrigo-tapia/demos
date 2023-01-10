import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader';

export interface DataReader{
  read(): void;
  data: string[][];
}

export class MatchReader{
  static fromCsv(fileName: string): MatchReader{
    return new MatchReader(new CsvFileReader(fileName));
  }

  matches: MatchData[] = [];
  constructor(public dataReader: DataReader){}

  load():void{
    this.dataReader.read()
    this.matches = this.dataReader.data.map((row: string[]): MatchData => {
      return[
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6]
      ]
    });
  }

}