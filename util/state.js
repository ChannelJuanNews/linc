function getInitState() {
  // run some logic to do a request to localStorage
  return {
    lang: "us",
  };
}

function setLocalState(state) {
  // run some logic to save state to localStorage
}

export { getInitState, setLocalState };
