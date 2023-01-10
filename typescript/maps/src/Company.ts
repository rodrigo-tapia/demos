import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable{
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lgt: number;
  }
  color: 'red';

  constructor(){
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lgt: parseFloat(faker.address.longitude())
    }

  }

  markerContent(): string{
    return `
      <div>
        <h1>Company name: ${this.companyName}</h1>
        <h3>Catch Phrase: ${this.catchPhrase}</h3> 
      </div>`;
  }
}