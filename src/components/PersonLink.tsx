import { Person } from '../types';

type Props = {
  person: Person;
};

export const PersonLink = ({ person }: Props) => {
  return (
    <tr data-cy="person">
      <td>
        <a href="#/people/jan-van-brussel-1714">{person.name}</a>
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>

      <td>
        {person.mother ? (
          <a className="has-text-danger" href="#/people/emma-de-milliano-1876">
            {/* {person.mother} */}
          </a>
        ) : (
          '-'
        )}
      </td>

      <td>
        {person.father ? (
          <a href="#/people/emma-de-milliano-1876">
            {/* {person.father} */}
          </a>
        ) : (
          '-'
        )}
      </td>
    </tr>
  );
};
