<template lang="jade">
  .loaderWrapper(v-if="showLoader")
    .preloader.loading
        span.slice
        span.slice
        span.slice
        span.slice
        span.slice
        span.slice
</template>

<script>
    import {mapMutations} from 'vuex';

    export default {
        computed: {
            showLoader() {
                return this.$store.state.common.pageLoad
            }
        }
    }
</script>

