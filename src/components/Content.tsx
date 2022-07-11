import React from 'react';
import ProjectBlock from './Blocks/ProjectBlock';
import TeamBlock from './Blocks/TeamBlock';

const Content: React.FC = () => {
  return (
    <div className="wrapper">
      <ProjectBlock />
      <TeamBlock />
    </div>
  );
};

export default Content;
