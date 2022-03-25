import state from "./state";

function links(state) {
  const { linksList } = state;

  return linksList;
}

let isServerSet = (state) => {
  const { activeServer } = state;

  return activeServer !== null && activeServer !== "";
};

export { links, isServerSet };
