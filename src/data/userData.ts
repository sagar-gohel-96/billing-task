import { UserSchemaEntity } from '../model/userModel';
const dummyImageURL = 'https://via.placeholder.com/150';

export interface User extends UserSchemaEntity {
  id: Number;
}

export const users = <User[]>[
  {
    id: 1,
    age: 20,
    gender: 'male',
    image: dummyImageURL,
    mobileNo: '1234646545',
    name: 'Sam',
    billNo: 'INV46795'
  },
  {
    id: 2,
    age: 25,
    gender: 'female',
    image: dummyImageURL,
    mobileNo: '9876543210',
    name: 'Alice',
    billNo: 'INV47897'
  },
  {
    id: 3,
    age: 30,
    gender: 'male',
    image: dummyImageURL,
    mobileNo: '5555555555',
    name: 'John',
    billNo: 'INV89896'
  },
  {
    id: 4,
    age: 22,
    gender: 'female',
    image: dummyImageURL,
    mobileNo: '9999999999',
    name: 'Emily',
    billNo: 'INV5698'
  }
];
