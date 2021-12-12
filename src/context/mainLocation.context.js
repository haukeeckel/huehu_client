import { createContext, useState } from 'react';

const tabs = [
  { name: 'Home', to: '/', current: true },
  { name: 'Discover Cards', to: '/cards', current: false },
  { name: 'Discover Sets', to: '/', current: false },
];

const MainLocationContext = createContext();

function MainLocationProviderWrapper(props) {
  const [mainLocation, setMainLocation] = useState(tabs);

  return (
    <MainLocationContext.Provider value={{ mainLocation, setMainLocation }}>
      {props.children}
    </MainLocationContext.Provider>
  );
}

export { MainLocationContext, MainLocationProviderWrapper };
