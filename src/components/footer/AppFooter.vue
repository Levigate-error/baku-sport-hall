<template>
  <div id="app-footer">
    <footer>
      <contacts></contacts>
    </footer>
  </div>
</template>

<script>
import Contacts from '@/components/footer/Contacts.vue'

export default {
  name: 'AppFooter',
  components: {
    Contacts
  }
}
</script>

<style scoped lang="scss">
#app-footer {
  width: 100%;
  height: 915px;
  background-color: #DBDBDB;
}
</style>
