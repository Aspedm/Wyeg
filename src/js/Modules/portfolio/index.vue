<template lang="jade">
    div.portfolioPage
        div.portfolioPage__list
            div.portfolioPage__item(v-for='item in reposList')
                div.repoName {{item.name}}
                div.repoDesc {{item.description}}
                div.repoLink
                    a(v-bind:href="''+item.html_url+''", target="_blank") View on 
                    i.fa.fa-github-alt
</template>

<script src="./index.js"></script>