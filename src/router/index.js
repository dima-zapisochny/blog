import Vue from 'vue'
import VueRouter from 'vue-router'
import contactList from '../components/contacts/contact-list'
import contactUserInfo from '../components/contacts/contact-user-info'
import usersList from '../components/users/chats-list'
import userChat from '../components/users/chat/user-chat'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'contacts',
    component: contactList
  },
  {
    path: '/contact',
    name: 'contact',
    component: contactUserInfo
  },
  {
    path: '/chats',
    name: 'chats',
    component: usersList
  },
  {
    path: '/chat',
    name: 'chat',
    component: userChat,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
