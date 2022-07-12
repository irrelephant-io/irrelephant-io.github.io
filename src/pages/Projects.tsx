import React from 'react';

const projects = [
  {
    name: 'Altantis',
    img: 'https://i.pinimg.com/originals/be/27/8d/be278d1e4e2b29712ee8d5a9a18d3213.jpg',
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
    name: 'Project_2',
    img: 'https://playminigames.ru/content/gameimagecontent/rampart_aac1fb5c-fca7-4ea7-a581-417ebc8494e2.jpg',
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
    name: 'Project_3',
    img: 'https://image.winudf.com/v2/image1/Y29tLmZ1bi5tb2JpbGUuc2hpcC5zaW11bGF0b3IuZ2FtZXNfc2NyZWVuXzE2XzE1NjE2MTE0MDZfMDAz/screen-16.jpg?fakeurl=1&type=.webp',
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
    name: 'Project_4',
    img: 'https://qph.cf2.quoracdn.net/main-qimg-6caaf50305beada48cfe27964cf23be1-lq',
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
          <div className="img_desc_wrap">
            {img ? <img className="square" src={img} alt={name} /> : <div className="square"></div>}
            <div className="desc_auth_wrap">
              <p className="description">{description}</p>
              <ul className="authors">
                {team.map(e => (
                  <li>{e}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
