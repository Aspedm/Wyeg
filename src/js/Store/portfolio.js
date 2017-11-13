import Api from '../Api/index';
import Config from '../config/index';

const gitHub = new Api();


const state = {
    allRepos: [],
    yearsList: []
};

const actions = {
    getRepos: ({commit}) => {
        gitHub.get({
            url: `https://api.github.com/users/${Config.defaultUser}/repos`
        }).then(resp => {
            return resp || Promise.reject(`Invalid response from server.`)
        }).then(resp => {
            let allYears = [];
            resp.forEach(item => allYears.push(new Date(item.pushed_at).getFullYear()));
            commit('receiveYears', allYears);
            return resp;
        }).then(resp => {
            commit('receiveRepos', resp);
        }).catch(error => console.error(error));
    }
}

const mutations = {
    receiveRepos: (state, repos) => {
        state.allRepos = repos;
    },
    receiveYears: (state, years) => {
        state.yearsList = years;
    }
}

const getters = {
    reposByYears: state => (year) => {
        let repos = [];
        state.allRepos.forEach( item => {
            let currentYear = new Date(item.pushed_at).getFullYear();
            if (currentYear === parseInt(year)) repos.push(item);
        });
        return repos;
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}