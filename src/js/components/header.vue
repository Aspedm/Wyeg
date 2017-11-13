<template lang="jade">
    div
        div.header
            router-link(to="/" tag="a" class="logo") . ВYЕГ .

            div.mainMenu(v-if="showMenu" v-on:click="toggleMenu")
                div.mainMenu__line.top(v-bind:class="{rotate: menuState}")
                div.mainMenu__line.middle(v-bind:class="{displayNone: menuState}")
                div.mainMenu__line.bottom(v-bind:class="{rotateTwo: menuState}")
            
        transition(enter-active-class="animated fadeIn" leave-active-class="animated fadeOut")
            div.globalMenu(v-show="menuState")
                main-dash

</template>

<script>
    import {mapActions} from 'vuex';
    import Dashboard from './mainDash.vue';
    export default {
        computed: {
            showMenu () {
                return this.$route.name.toLowerCase() != 'index';
            },
            menuState () {
                return this.$store.state.header.menuOpen
            }
        },
        methods: {
            ...mapActions(['toggleMenu'])
        },
        components: {
            'main-dash': Dashboard
        }
    }
</script>