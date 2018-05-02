import Vue from 'vue';
import VueRouter from 'vue-router';
import mainPage from './Modules/mainPage/index.vue';
import portfolio from './Modules/portfolio/index.vue';
import profile from './Modules/profile/index.vue';
import job from './Modules/job/index.vue';
import contacts from './Modules/contacts/index.vue';
import notFound from './Modules/errors/404error.vue';

const RouteList = [
    {path: '/', component: mainPage, name: 'Index'},
    {path: '/portfolio', component: portfolio, name: 'Portfolio'},
    {path: '/portfolio/:year', component: portfolio, name: 'Portfolio by years'},
    {path: '/profile', component: profile, name: 'Profile'},
    {path: '/job', component: job, name: 'Job'},
    {path: '/contacts', component: contacts, name: 'Contacts'},
    {path: '*', component: notFound, name: '404'}
];

Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history',
    routes: RouteList
});