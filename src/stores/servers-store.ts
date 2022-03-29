import { defineStore } from 'pinia';
import { api, setBaseURL } from 'boot/axios';
import { $t } from 'boot/i18n';
import { /* LocalStorage, */ SessionStorage, Notify } from 'quasar';

export interface Server {
  id: number;
  name: string;
  caption?: string;
  scheme: string;
  host: string;
  port: number;
}

export interface ServersList {
  linksList: Array<Server>;
  active: string;
}

export const useServersStore = defineStore({
  id: 'servers',

  state: () => {
    let active = '';
    const id = SessionStorage.getItem('activeServerID');
    const linksList = [
      {
        id: 1,
        name: 'Dev server',
        caption: 'localhost',
        scheme: 'http',
        host: 'localhost',
        port: 9000,
      },
      {
        id: 2,
        name: 'Test server',
        caption: 'localhost',
        scheme: 'http',
        host: 'localhost',
        port: 9001,
      },
    ];

    if (id) {
      const server = linksList.find((res) => res.id === id);

      if (server) {
        active = `${server.scheme}://${server.host}:${server.port}`;
      }
    }

    return {
      linksList,
      active,
    } as ServersList;
  },

  getters: {
    findServerByID: (state) => {
      return (id: number) => state.linksList.find((res) => res.id === id);
    },

    getLink: (state) => {
      return (id: number) => {
        const server = state.linksList.find((res) => res.id === id);

        if (!server) {
          return 'error://not_found_server';
        }

        return `${server.scheme}://${server.host}:${server.port}`;
      };
    },

    isServerSet(state) {
      const { active } = state;

      return active !== null && active !== '';
    },
  },

  actions: {
    findById(id: number) {
      return this.linksList.find((item) => item.id === id);
    },

    setActiveLink(id: number) {
      const server = this.findById(id);

      if (!server) {
        return;
      }

      const link = `${server.scheme}://${server.host}:${server.port}`;

      setBaseURL(link);

      return api
        .post('/ping')
        .then((response) => {
          if (response.status === 200) {
            this.active = link;
            SessionStorage.set('activeServerID', id);

            return true;
          }
        })
        .catch(() => {
          Notify.create({
            type: 'negative',
            message: $t('server.connectError'),
          });
          this.active = '';

          return false;
        });
    },
  },
});
