import { createContext, useState, useEffect } from "react";

const ActiveContext = createContext({
  activeSection: null,
  setActive: function (section) {},
});

export function ActiveContextProvider(props) {
  const [activeSectionState, setActiveSectionState] = useState();

  function setActiveHandler(section) {
    setActiveSectionState(section);
  }

  const context = {
    activeSection: activeSectionState,
    setActive: setActiveHandler,
  };
  return (
    <ActiveContext.Provider value={context}>
      {props.children}
    </ActiveContext.Provider>
  );
}

export default ActiveContext;
