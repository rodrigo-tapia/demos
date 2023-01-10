import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable{
name: string;
location:{
  lat: number;
  lgt: number;
};
color: 'red';

constructor(){
   this.name = faker.name.findName();
   this.location = {
     lat: parseFloat(faker.address.latitude()),
     lgt: parseFloat(faker.address.longitude())
   }
}

markerContent(): string{
  return `User Name: ${this.name}`;
}

}