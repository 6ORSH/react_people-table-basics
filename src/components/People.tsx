import { useEffect, useState } from 'react';
import { Loader } from './Loader';
import { Person } from '../types';
import { PeopleTable } from './PeopleTable';

export const PeoplePage = () => {
  const [people, setPeople] = useState<Person[]>([]);

  async function getPople() {
    try {
      const res = await fetch(
        'https://mate-academy.github.io/react_people-table/api/people.json)',
      );

      if (!res.ok) {
        throw new Error('HTTP error ' + res.status);
      }

      const peopleData = await res.json();
      console.log(peopleData);
      return peopleData;
    } catch (error) {
      console.error('Fetch failed:', error);
    }
  }

  useEffect(() => {
    getPople().then((peopleFromServer: Person[]) => {
      setPeople(peopleFromServer);
    });
  }, []);

  return (
    <>
      <h1 className="title">People page</h1>

      <div className="block">
        <div className="box table-container">
          <Loader />

          <p data-cy="peopleLoadingError" className="has-text-danger">
            Something went wrong
          </p>

          <p data-cy="noPeopleMessage">There are no people on the server</p>

          <PeopleTable people={people} />
        </div>
      </div>
    </>
  );
};
