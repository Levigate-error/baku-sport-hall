<template>
  <div id="header">
    <header>
      <app-navigation></app-navigation>
      <social-icons></social-icons>
    </header>
  </div>
</template>

<script>
import AppNavigation from '@/components/header/AppNavigation.vue'
import SocialIcons from '@/components/header/SocialIcons.vue'

export default {
  name: 'Header',
  components: {
    AppNavigation,
    SocialIcons
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  height: 100%;
}
#header{
  background-color: #F8F8F8;
  width: 100%;
  height: 85px;
  position: fixed;
  top: 0;
  z-index: 100;
}
</style>
