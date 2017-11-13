import Vue from 'vue';
import App from './Modules/App.vue';
import router from './__router';
import store from './Store/index';
import {mapActions} from 'vuex';

window.onload = () => {
    var app = new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App),
        methods: {
            ...mapActions(['getUser','toggleMenu'])
        },
        mounted: function () {
            this.getUser();
        },
        watch: {
            '$route'() {
                if (this.$store.state.header.menuOpen) this.toggleMenu();
            }
        }
    });
}
