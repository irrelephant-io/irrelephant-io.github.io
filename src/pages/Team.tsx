import React from 'react';

const TEAM = {
  // map over
};

const Team: React.FC = () => {
  return (
    <div id="team-members">
      <div>
        <svg
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true">
          <path
            fill-rule="evenodd"
            d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"></path>
        </svg>
        3 members
      </div>
      <ul className="member-listing">
        <li className="table-list-item">
          <a>
            <img
              className="avatar"
              src="https://avatars.githubusercontent.com/u/5710794?s=88&amp;v=4"
              width="44"
              height="44"
              alt="@marengohue"
            />
          </a>

          <div>
            <a>Eugene 'marengo_hue' Rebedailo</a> <span className="alias">marengohue</span>
          </div>
        </li>

        <li className="table-list-item">
          <a>
            <img
              className="avatar"
              src="https://avatars.githubusercontent.com/u/52937798?s=88&amp;v=4"
              width="44"
              height="44"
              alt="@ZnoGouDj"
            />
          </a>

          <div>
            <a>Egor</a> <span className="alias">ZnoGouDj</span>
          </div>
        </li>

        <li className="table-list-item">
          <a>
            <img
              className="avatar"
              src="https://avatars.githubusercontent.com/u/109045476?s=88&amp;v=4"
              width="44"
              height="44"
              alt="@Gxthh3ll"
            />
          </a>

          <div>
            <a>Gxthh3ll</a>{' '}
          </div>
        </li>
      </ul>

      <div className="paginate-container"></div>
    </div>
  );
};

export default Team;
