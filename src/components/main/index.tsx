import React from 'react';

import { Button, SkillNav } from '@components';

interface MainProps {
  header?: string;
  hideSkillNav?: boolean;
}
export const Main: React.FC<MainProps> = ({ header, hideSkillNav = false, ...props }) => (
  <div className="text-center font-light py-5 bg-gray-700">
    <div className="container mx-auto">
      {!hideSkillNav && <SkillNav />}

      <h1 data-test="main-heading" className="text-white text-2xl mb-2">
        {header}
      </h1>
      {!header && (
        <p className="text-lg text-white mb-3">
          Created with superplate with NextJS as Progressive Web Application. <br />
          Get started by selecting category Skill
        </p>
      )}
    </div>
  </div>
);
