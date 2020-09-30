import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Companies from "./views/Companies.vue";
import AddCompany from "./views/AddCompany.vue";
import EditCompany from "./views/EditCompany.vue"
Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/companies",
            name: "companies",
            component: Companies,
        },
        {
            path: "/add-company",
            name: "addCompany",
            component: AddCompany,
        },
        {
            path: "/edit-company/:_id",
            name: "editCompany",
            component: EditCompany,
        },
    ],
});
