// Import the <Link/> component
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Skill from '@utils/models/skill';
import { Button } from '@components/button';

// This could be a page component
export const SkillNav: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  useEffect(() => {
    fetch(`/api/skills`)
      .then((response) => {
        if (!response.ok) {
          // create error object and reject if not a 2xx response code
          const err = new Error('HTTP status code: ' + response.status);
          // err.response = response;
          // err.status = response.status;
          throw err;
        }
        return response.json();
      })
      .then((sk: Skill[]) => {
        setSkills(sk);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  return (
    <nav
      className={`invisible md:visible flex flex-row flex-nowrap justify-center place-items-center 
                  items-stretch hover:overflow-x-auto mb-3`}
    >
      <div key={'all'} className={`text-lg px-1`}>
        <Link href="/questions" as={`/questions`}>
          <Button
            className={`hover:bg-slate-50 hover:text-slate-900 hover:dark:bg-slate-600/30 hover:dark:text-white`}
            type="button"
          >
            All
          </Button>
        </Link>
      </div>
      {skills.map((s: Skill) => (
        <div key={s.name} className={`text-lg px-1`}>
          <Link href="/skill/[id]" as={`/skill/${s.name}`}>
            <Button
              className={`hover:bg-slate-50 hover:text-slate-900 hover:dark:bg-slate-600/30 hover:dark:text-white`}
              type="button"
            >
              {s.displayName || s.name}
            </Button>
          </Link>
        </div>
      ))}
    </nav>
  );
};
