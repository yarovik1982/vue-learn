<script setup>
import { RouterView, RouterLink, useRouter, useRoute } from 'vue-router'
import { data } from './utils/data';
import { onMounted, provide, ref, watch } from 'vue';
const isModal = ref(false)
const isActive = ref(false)
const lifetime = ref('')
const isAuth = ref(!!localStorage.getItem('token'));
watch(() => localStorage.getItem('token'),
  (newToken) => {
    isAuth.value = !!newToken
  }
)
const handleClick = () => {
  isModal.value = !isModal.value
  setTimeout(() => {
    isActive.value = !isActive.value
  }, 300)
}

const exit = () => {
  localStorage.clear()
  isAuth.value = !isAuth.value
  router.push('/404')
}
const handleSubmit = () => {
  const token = `${lifetime.value} секунд`
  localStorage.setItem('token', token)
  isAuth.value = true
  setTimeout(() => exit(), lifetime.value * 1000)
  closeModal()
}

const closeModal = () => {
  isActive.value = !isActive.value
  lifetime.value = ''
  setTimeout(() => { isModal.value = !isModal.value }, 300)
}

const router = useRouter()
const route = useRoute()

const headerRef = ref(null)
const height = ref(null)
const accept = ref(false)
const showMobileMenu = ref(false)
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}
provide('headerHeight', height)
onMounted(() => {
  const header = headerRef.value
  const headerHeight = header.getBoundingClientRect().height
  height.value = headerHeight
})
const setAccept = () => {
  accept.value = true
}
</script>
<template>
  <Teleport to="body">
    <div class="layout" v-if="isModal" @click.self="closeModal">
      <div :class="['modal', { active: isActive }]">
        <form class="auth" id="auth" @submit.prevent="handleSubmit">
          <label for="inp">Срок для токена</label>
          <input type="text" id="inp" v-model="lifetime" placeholder="Кол-во секунд">
          <button class="auth-btn" type="submit">Send</button>
        </form>
      </div>
    </div>
  </Teleport>

  <Teleport to="body" v-if="!accept">
    <div class="cookie-banner">
      <p>Что-то про куки.</p>
      <button class="close-banner"
        @click="setAccept"
      >accept</button>
    </div>
  </Teleport>
  <!-- <div class="wrapper"> -->
    <div class="mobile__menu" :class="{show:showMobileMenu}" @click="toggleMobileMenu">
      <ul class="header__menu">
          <li class="header__menu-item" v-for="item in data.mainHeader" :key="item.to">
            <router-link :to="item.to" :class="['header__menu-link', { active: route.path === item.to }]">
              {{ item.label }}
            </router-link>
          </li>
        </ul>
    </div>
  <header class="header" ref="headerRef">
    <div class="container">
      <nav class="header__nav">
        <router-link to="/" class='header__logo base-color'>
          <h1>Logo</h1>
        </router-link>
        <ul class="header__menu">
          <li class="header__menu-item" v-for="item in data.mainHeader" :key="item.to">
            <router-link :to="item.to" :class="['header__menu-link base-color', { active: route.path === item.to }]">
              {{ item.label }}
            </router-link>
          </li>
        </ul>
        <div class="header__burger" @click="toggleMobileMenu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </div>
        <div class="header__auth" v-if="route.path != '/404'">
          <button class="header__auth-btn" @click="handleClick" v-if="!isAuth">Авторизация</button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" v-if="!isAuth" @click="handleClick"
            class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
            <path fill-rule="evenodd"
              d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
          </svg>
          <router-link to="/profile" class="header__menu-link header__profile-link" v-if="isAuth">Profile</router-link>
          <button class="header__auth-btn header__exit-btn" v-if="isAuth" @click="exit">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-box-arrow-right"
              viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
              <path fill-rule="evenodd"
                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
  <!-- </div> -->
</template>

<style scoped>
ul,li{
  list-style: none;
}
.layout {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
  backdrop-filter: blur(5px);
  overflow: hidden;
}
.mobile__menu{
  position: fixed;
  top: -100%;
  left: 0;
  width: 100vw;
  background-color: #333;
  padding: 2rem 0;
  height: fit-content;
  transition: top .3s ease-in-out;
}
.mobile__menu.show{
  top: 0;
}
.mobile__menu .header__menu{
  display: flex;
  flex-direction: column;

}
.cookie-banner {
  position: fixed;
  width: 95vw;
  padding: 1rem;
  background-color: #ccc;
  color: #333;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.close-banner {
  background-color: #333;
  color: #ccc;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  cursor: pointer;
  border: 0;
}
.bi-box-arrow-right {
  width: 1.5rem;
  aspect-ratio: 1;
}

.header__exit-btn {
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%, -400px);
  width: 300px;
  height: 300px;
  background-color: #ccc;
  transition: transform 0.3s ease-in-out;
  transition-delay: .3s;
}

.modal.active {
  transition: transform 0.3s ease-in-out;
  transition-delay: .3s;
  transform: translate(-50%, 0);
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}

.routerView {
  /* flex: 1 auto; */
  background-color: rgb(31, 0, 63);
}

.auth {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding: 1rem;
}

.auth-btn {
  display: block;
  width: fit-content;
  cursor: pointer;
  background-color: blue;
  color: #ccc;
  border: 0;
  border-radius: 6px;
  padding: 4px 8px;
}

.header {
  padding: 4px 0;
  background-color: #424242;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.header__nav {
  display: flex;
  align-items: center;
}

.header__menu {
  margin-left: 1rem;
  display: flex;
  align-items: center;
  flex: 50%;
}

.header__menu-item {
  padding: 0 8px;
}
svg.bi-list {
  display: none;
  width: 1.5rem;
  aspect-ratio: 1;
}
.header__menu-link.active {
  color: gold;
}

.header__auth {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.header__auth-btn {
  background-color: transparent;
  padding: 4px 8px;
  border-radius: 10px;
  border: 0;
  box-shadow: 0 0 1px 1px #ccc;
  color: #ccc;
  cursor: pointer;
}

.header__auth-btn:active {
  box-shadow: 0 0 1px 1px #ccc,
    inset 0 0 5px 1px #ccc;
}
.header__burger{
  display: none;
  flex: 1 auto;
}
.bi-box-arrow-in-right {
  margin: 0 auto;
  width: 1.5rem;
  aspect-ratio: 1;
  display: none;
}

@media(max-width:769px) {
  .header__nav {
    justify-content: space-between;
  }

  .header__nav>.header__menu {
    display: none;
  }

  svg.bi-list {
    display: block;
    margin: 0 auto;
    cursor: pointer;
    flex: 1 auto;
    width: 1.5rem;
    aspect-ratio: 1;
  }

  .header__auth-btn {
    display: none;
  }
.bi-box-arrow-in-right{display: block;}
  .header__burger{
    display: block;
    position: relative;
    z-index: 10;
  }
}
</style>