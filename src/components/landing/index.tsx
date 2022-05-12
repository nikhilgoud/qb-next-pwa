// import styles from "../styles/Home.module.css";
import Link from 'next/link';
import Skill from '@utils/models/skill';
import { useState, useEffect } from 'react';

export const Landing: React.FC = () => {
  // const router = useRouter();
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
    <div className={`flex-1 container my-8 max-w-screen-lg mx-auto p-5`}>
      <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}>
        {skills.map((s: Skill) => (
          <div key={s.name} className="col-span-1 rounded-md border border-gray-300 p-5" data-testid="container">
            <Link key={s.name} href="/skill/[id]" as={`/skill/${s.name}`}>
              <a href="" className={'card'}>
                <h3 className="text-xl font-semibold mb-2">{s.displayName || s.name} &rarr;</h3>
                <p className="m-0">{s.description}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
