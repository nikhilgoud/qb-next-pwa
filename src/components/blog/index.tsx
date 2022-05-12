import React from 'react';
export const Blog: React.FC = () => {
  return (
    <div className="flex-1 container my-8 max-w-screen-lg mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
        {[{ name: 'new', description: 'description' }].map((i) => (
          <div key={i.name} className="col-span-1 rounded-md border border-gray-300 p-5" data-testid="container">
            <h2 className="text-xl font-semibold mb-2">{i.name}</h2>
            <p className="m-0">{i.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
