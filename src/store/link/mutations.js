export const updateLinkState = (state, data) => {
  data.map((item) => {
    item.link = `${item.scheme}://${item.host}:${item.port}`;

    return item;
  });

  state.linksList = data;
};
