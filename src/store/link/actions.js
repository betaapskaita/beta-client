export function getLinks({ commit }) {
  commit("updateLinkState", [
    {
      name: "Dev server",
      caption: "localhost",
      scheme: "http",
      host: "localhost",
      port: 9000,
    },
    {
      name: "Test server",
      caption: "localhost",
      scheme: "http",
      host: "localhost",
      port: 9001,
    },
  ]);
}
