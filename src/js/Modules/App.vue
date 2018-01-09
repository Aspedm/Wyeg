<template lang="jade">
    #app.container
        app-header
        app-loader
        keep-alive
            router-view
</template>

<script>
import Header from '../components/header.vue';
import Preloader from '../components/preloader.vue'

export default {
    components: {
        'app-header': Header,
        'app-loader': Preloader
    }
}
</script>