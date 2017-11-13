import Api from '../Api/index';
import Config from '../config/index';

const gitHub = new Api();

const state = {
    user: {}
};

const actions = {
    getUser: ({commit}) => {
        gitHub.get({
            url: `https://api.github.com/users/${Config.defaultUser}`
        }).then(resp => {
            return resp || Promise.reject(`Invalid response from server.`)
        }).then(resp => {
            commit('receiveUser', resp);
        }).catch(error => console.error(error));
    }
};

const mutations = {
    receiveUser: (state, user) => {
        state.user = user;
    }
};

export default {
    state,
    actions,
    mutations
}