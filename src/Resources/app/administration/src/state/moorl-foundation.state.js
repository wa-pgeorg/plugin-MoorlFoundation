Shopware.State.registerModule('moorlFoundationState', {
    namespaced: true,

    state: {
        unlocked: false,
        plugins: [],
    },

    mutations: {
        setPlugins(state, plugins) {
            state.plugins = plugins;
        },
        toggleUnlocked(state) {
            state.unlocked = !state.unlocked;
        }
    },

    actions: {},
});