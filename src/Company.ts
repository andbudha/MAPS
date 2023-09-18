import { faker } from "@faker-js/faker";

export class Company {
  companyName: string;
  catchPhase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }
  }
}