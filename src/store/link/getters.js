import state from "./state";

export function links(state) {
  console.log("gettter", state);
  return state.linksList;
}
