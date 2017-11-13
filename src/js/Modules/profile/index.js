import Header from '../../components/header.vue';

export default {
    components: {
        'app-header': Header
    },
    computed: {
        user() {
            return this.$store.state.user.user
        }
    }
}