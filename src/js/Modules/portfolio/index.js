import {mapActions, mapGetters} from 'vuex';

export default {
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