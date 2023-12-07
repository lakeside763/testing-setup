interface Person {
  id: number;
  name: string
}

const people: Person[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bolu' }
];
const peopleById = people.reduce((acc, person) => {
  acc[person.id] = person;
  return acc;
}, {} as Record<number, Person>);