<template lang="jade">
    div.mainDash.mainDash-center
        router-link(to="/portfolio" tag="div" class="mainDash__item portfolio")
            .cardBackground
            .cardName
                Портфолио
        router-link(to="/profile" tag="div" class="mainDash__item profile")
            .cardBackground
            .cardInfo
                .cardInfo__item
                    {{user.name}}
                .cardInfo__item
                    i.fa.fa-map-marker
                    {{user.location}}
            .cardName
                Био
        router-link(to="/job" tag="div" class="mainDash__item jobs")
            .cardBackground
                // .sun
                .cloud.cloud-first
                .cloud.cloud-second
                .lake
                    .vawe.vawe-first
                    .vawe.vawe-second
                    .vawe.vawe-third
                .boat
                    ul
                        ul.fume
                            li.fume-first
                            li.fume-second
                            li.fume-third
                        li.boat-funnel
                            .funnelTop
                            .funnelMiddle
                        li.boat-deck
                        ul.boat-windows
                            li
                            li
                            li
                        li.boat-body
            .cardName
                Работа
        router-link(to="/contacts" tag="div" class="mainDash__item contacts")
            .cardBackground
            .cardName
                Связаться
</template>

<script>
export default {
    computed: {
        user() {
            return this.$store.state.user.user
        }
    }
}
</script>