import Vue from 'vue';
import Vuex from 'vuex';
import header from './header';
import user from './user';
import portfolio from './portfolio';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        header,
        user,
        portfolio
    }
})