import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const randomId = () => {
    return (
        Math.random()
            .toString(36)
            .substring(2, 15) +
        Math.random()
            .toString(36)
            .substring(2, 15)
    );
};

export default new Vuex.Store({
    state: {
        companies: [
            {
                _id: 1,
                maxSpend: 800,
                minSpend: 20,
                companyName: "Firmam 1",
            },
            {
                _id: randomId(),
                maxSpend: 1000,
                minSpend: 10,
                companyName: "Firmam 2",
            },
            {
                _id: randomId(),
                maxSpend: 900,
                minSpend: 500,
                companyName: "Firmam 3",
            },
        ],
    },
    getters: {
        getCompanyById: (state) => (_id) => {
            return state.companies.filter((item) => {
                if (item._id == _id) {
                    return item;
                }
            });
        },
    },
    mutations: {
        addNewCompany: (state, newCompanyObj) => {
            state.companies = [...state.companies, { _id: randomId(), ...newCompanyObj }];
        },
        editCompany: (state, companyObj) => {
            let index = state.companies.findIndex((item) => {
                if (item._id == companyObj._id) {
                    return item;
                }
            });
            let copiedState = [...state.companies];
            copiedState[index] = companyObj;
            state.companies = copiedState;
        },
    },
});
