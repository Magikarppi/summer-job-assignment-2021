import React, { useState } from 'react';

export const AvailabilityContext = React.createContext<any>(null);

const AvailabilityProvider: React.FC<React.ReactNode> = ({ children }) => {
  // const [hennex, setHennex] = useState([]);
  // const [ippal, setIppal] = useState([]);
  // const [okkay, setOkkay] = useState([]);
  // const [abiplos, setAbiplos] = useState([]);
  // const [niksleh, setNiksleh] = useState([]);
  // const [laion, setLaion] = useState([]);

  const [allAvailabilities, setAllAvailabilities] = useState([]);
  return (
    <AvailabilityContext.Provider
      value={{
        allAvailabilities,
        setAllAvailabilities,
      }}
    >
      {children}
    </AvailabilityContext.Provider>
  );
};

export default AvailabilityProvider;
// import React, { useState } from 'react';

// export const AvailabilityContext = React.createContext<any>(null);

// const AvailabilityProvider: React.FC<React.ReactNode> = ({ children }) => {
//   const [hennex, setHennex] = useState([]);
//   const [ippal, setIppal] = useState([]);
//   const [okkay, setOkkay] = useState([]);
//   const [abiplos, setAbiplos] = useState([]);
//   const [niksleh, setNiksleh] = useState([]);
//   const [laion, setLaion] = useState([]);

//   return (
//     <AvailabilityContext.Provider
//       value={{
//         hennex,
//         setHennex,
//         ippal,
//         setIppal,
//         okkay,
//         setOkkay,
//         abiplos,
//         setAbiplos,
//         niksleh,
//         setNiksleh,
//         laion,
//         setLaion,
//       }}
//     >
//       {children}
//     </AvailabilityContext.Provider>
//   );
// };

// export default AvailabilityProvider;
