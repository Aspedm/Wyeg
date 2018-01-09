const state = {
    pageLoad: true
};

const mutations = {
    loader: (state, action) => {
        state.pageLoad = action;
    }
};

export default {
    state,
    mutations
}