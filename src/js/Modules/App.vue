<template lang="jade">
    #app.container
        app-header
        keep-alive
            router-view
</template>

<script>
import Header from '../components/header.vue';

export default {
    components: {
        'app-header': Header
    }
}
</script>