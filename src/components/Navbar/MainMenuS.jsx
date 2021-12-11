import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';

function MainMenuS() {
  return (
    <>
      <div className="pt-2 pb-3 space-y-1">
        {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
        <Disclosure.Button className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
          <Link to="/">Home</Link>
        </Disclosure.Button>
        <Disclosure.Button className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
          <Link to="/">Getting started</Link>
        </Disclosure.Button>
        <Disclosure.Button className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
          <Link to="/">About</Link>
        </Disclosure.Button>
      </div>
    </>
  );
}

export default MainMenuS;
