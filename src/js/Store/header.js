const state = {
    menuOpen: false
};

const actions = {
    toggleMenu ({commit}) {
        commit('changeMenuVisible');
    }
};

const mutations = {
    changeMenuVisible (state) {
        state.menuOpen = !state.menuOpen;
    }
};

export default {
    state,
    actions,
    mutations
}