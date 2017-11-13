<template lang="jade">
    div.jobPage.page
        app-header

        | 404
</template>

<script>
    import Header from '../../components/header.vue';

    export default {
        components: {
            'app-header': Header
        }
    }
</script>