import { Menu } from '@headlessui/react';
import Skill from '@utils/models/skill';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const TopDownSkillMenu: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    router.query.id && setSelectedSkill(router.query.id as string);
    console.log('r', router.query);
  }, [router.query]);

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
    <Menu as="div" className="relative visible md:invisible">
      <Menu.Button
        className={`text-xs leading-5 font-semibold bg-slate-400/10 rounded-full py-1 px-3 
                    flex items-center space-x-2 hover:bg-slate-400/20 dark:highlight-white/5`}
      >
        {selectedSkill ? `Selected: ${selectedSkill}` : 'Select Skill'}
        <svg width="6" height="3" className="ml-2 overflow-visible" aria-hidden="true">
          <path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </Menu.Button>
      <Menu.Items
        className={`absolute top-full mt-1 py-2 w-40 rounded-lg bg-white shadow ring-1 ring-slate-900/5 text-sm 
                  leading-6 font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:highlight-white/5`}
      >
        {skills.map((s: Skill) => (
          <Menu.Item key={s.name}>
            {({ active }) => (
              <a
                href={`/skill/${s.name}`}
                className={`block px-3 py-1 ${
                  active && 'bg-slate-50 text-slate-900 dark:bg-slate-600/30 dark:text-white'
                }`}
              >
                {selectedSkill === s.name ? (
                  <span className="flex items-center justify-between text-sky-500 dark:text-sky-400">
                    {s.description || s.name}
                    <svg width="24" height="24" fill="none" aria-hidden="true">
                      <path
                        d="m7.75 12.75 2.25 2.5 6.25-6.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                ) : (
                  s.description || s.name
                )}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default TopDownSkillMenu;
