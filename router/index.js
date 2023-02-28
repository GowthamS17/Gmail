import {createRouter, createWebHistory } from 'vue-router'
import SignIn from '../src/components/SignIn.vue'
import PasswordPage from '../src/components/PasswordPage.vue'
import CreateAccount from '../src/components/CreateAccount.vue'
import AccountChange from '../src/components/AccountChange.vue'
import ForgotPassword from '../src/components/ForgotPassword.vue'
import FindMail from '../src/components/FindMail.vue'
import MainPage from '../src/components/MainPage.vue'
const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'SignIn',
            component: SignIn
        },
        {
            path: '/password/:id',
            name: 'password',
            component: PasswordPage
        },
        {
            path: '/create',
            name: 'create',
            component: CreateAccount
        },
        {
            path: '/change',
            name: 'change',
            component: AccountChange
        },
        {
            path: '/forgot',
            name: 'forgot',
            component: ForgotPassword
        },
        {
            path: '/find',
            name: 'find',
            component: FindMail
        },
        {
            path: '/gmail',
            name: 'gmail',
            component: MainPage
        }
    ]
})

export default router