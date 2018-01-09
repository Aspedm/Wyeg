import Vue from 'vue';
import Vuex from 'vuex';
import common from './common';
import header from './header';
import user from './user';
import portfolio from './portfolio';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        common,
        header,
        user,
        portfolio
    }
})