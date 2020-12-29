let register = require('./components/auth/Register.vue').default;
let login = require('./components/auth/Login.vue').default;
let logout = require('./components/auth/Logout.vue').default;
let forget = require('./components/auth/Forget.vue').default;
let home = require('./components/Home.vue').default;

// Salarié

let storeEmployee = require('./components/employee/create.vue').default;
let allEmployee = require('./components/employee/index.vue').default;


export const routes = [
    {path: '/', component: login, name:'login'},
    {path: '/register', component: register, name: 'register'},
    {path: '/logout', component: logout, name: 'logout'},
    {path: '/forget', component: forget, name: 'forget'},
    {path: '/home', component: home, name: 'home'},

    // Salarié
    {path: '/store-employee', component: storeEmployee, name: 'store-employee'},
    {path: '/all-employee', component: allEmployee, name: 'all-employee'}
]
    