import React from 'react';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <div className="text-center py-5 bg-gray-800">
      <a
        href="https://github.com/nikhilgoud"
        target="_blank"
        className="block mb-3"
        data-testid="ldvm-logo"
        rel="noopener noreferrer"
      >
        <Image data-test="icon" src="/icons/ldvm-logo.svg" alt="NG" width="140" height="28" color="#fff" />
      </a>

      <ul className="flex justify-center list-none p-0 m-0" data-testid="icons-container">
        <li className="mx-3">
          <Image data-test="icon" src="/icons/github-icon.svg" alt="github" width="28" height="29" />
        </li>
        <li className="mx-3">
          <Image data-test="icon" src="/icons/twitter-icon.svg" alt="nextjs" width="28" height="28" />
        </li>
        <li className="mx-3">
          <Image data-test="icon" src="/icons/youtub-icon.svg" alt="youtube" width="28" height="29" />
        </li>
        <li className="mx-3">
          <Image data-test="icon" src="/icons/linkedin-icon.svg" alt="linkedin" width="28" height="32" />
        </li>
      </ul>
    </div>
  );
};
