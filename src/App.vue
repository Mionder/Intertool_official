<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './reset.css';
import "./media.scss";
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style lang="scss">
#app {

}
</style>
