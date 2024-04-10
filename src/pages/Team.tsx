import React from 'react';

const team = [
  {
    name: "Eugene 'marengo_hue' Rebedailo",
    alias: 'marengohue',
    avatar: 'https://avatars.githubusercontent.com/u/5710794?s=88&amp;v=4',
  },
  {
    name: 'Egor',
    alias: 'ZnoGouDj',
    avatar: 'https://avatars.githubusercontent.com/u/52937798?s=88&amp;v=4',
  }
];

const Team: React.FC = () => {
  return (
    <div id="team-members">
      <div className="team-qty">{team.length} members</div>
      <ul className="member-listing">
        {team.map(({ name, alias, avatar }) => (
          <a href={`https://github.com/${alias || name}`} target="_blank" rel="noreferrer">
            <li className="table-list-item">
              <img className="avatar" src={avatar} width="44" height="44" alt={`@${alias}`} />

              <div>
                <p>{name}</p> <span className="alias">{alias}</span>
              </div>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Team;
