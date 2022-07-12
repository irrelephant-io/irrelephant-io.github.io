import React from 'react';

const projects = [
  {
    name: 'Altantis',
    img: '',
    description:
      'This project is an RTS game set on a remote world of Atlantis IV - an ocean planet engulfed in fires of conflict. You are a commander of the naval fleet fighting for dominance over the islands and archipelagos scattered around the planet and you fight to secure the last bits of remaining land for your nation.',
    team: [
      'Lead developer and game designer: @marengohue',
      'Gameplay and UI developer: @znogoud',
      '3d and environment artist: @gxthhell3',
      'Writer and moral support guy: @dio_dao',
    ],
  },
  {
    name: 'Project2',
    img: '',
    description:
      'This project is an RTS game set on a remote world of Atlantis IV - an ocean planet engulfed in fires of conflict. You are a commander of the naval fleet fighting for dominance over the islands and archipelagos scattered around the planet and you fight to secure the last bits of remaining land for your nation.',
    team: [
      'Lead developer and game designer: @marengohue',
      'Gameplay and UI developer: @znogoud',
      '3d and environment artist: @gxthhell3',
      'Writer and moral support guy: @dio_dao',
    ],
  },
  {
    name: 'Project3',
    img: '',
    description:
      'This project is an RTS game set on a remote world of Atlantis IV - an ocean planet engulfed in fires of conflict. You are a commander of the naval fleet fighting for dominance over the islands and archipelagos scattered around the planet and you fight to secure the last bits of remaining land for your nation.',
    team: [
      'Lead developer and game designer: @marengohue',
      'Gameplay and UI developer: @znogoud',
      '3d and environment artist: @gxthhell3',
      'Writer and moral support guy: @dio_dao',
    ],
  },
  {
    name: 'Project4',
    img: '',
    description:
      'This project is an RTS game set on a remote world of Atlantis IV - an ocean planet engulfed in fires of conflict. You are a commander of the naval fleet fighting for dominance over the islands and archipelagos scattered around the planet and you fight to secure the last bits of remaining land for your nation.',
    team: [
      'Lead developer and game designer: @marengohue',
      'Gameplay and UI developer: @znogoud',
      '3d and environment artist: @gxthhell3',
      'Writer and moral support guy: @dio_dao',
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <div className="project__container">
      {projects.map(({ name, img, description, team }) => (
        <div className="project">
          <h2>{name}</h2>
          {img ? <img src={img} alt={name} /> : <div className="square"></div>}
          <p>{description}</p>
          <ul>
            {team.map(e => (
              <li>{e}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Projects;
