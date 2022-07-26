import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';

import { User } from '../types';

export const userFactory = Factory.define<User>(() => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  phone: faker.phone.number(),
  age: faker.datatype.number(70),
  email: faker.internet.email(),
  address: faker.address.city(),
  status: 1,
}));
