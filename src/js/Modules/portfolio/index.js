import Header from '../../components/header.vue';
import {mapActions, mapGetters} from 'vuex';

export default {
    components: {
        'app-header': Header
    },
    computed: {
        yearsList() {
            return this.$store.state.portfolio.yearsList;
        },
        reposList() {
            let year = this.$route.params.year;
            if (year) {
                return this.$store.getters.reposByYears(year);
            } else {
                return this.$store.state.portfolio.allRepos;
            }
        }
    },
    methods: {
        ...mapActions(['getRepos'])
    },
    mounted: function() {
        this.getRepos();
    }
}