<template lang="jade">
    div.profilePage.page
        app-header

        div.page__name Коротенечко о ...
        p(class="page__text").
            {{user.bio}}
</template>

<script src="./index.js"></script>