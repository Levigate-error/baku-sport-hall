<template>
  <div id="social-icons">
    <div class="svg-items"><img src="@/assets/icons/vk.svg" svg-inline alt="Frame"></div>
    <div class="svg-items"><img src="@/assets/icons/facebook.svg" svg-inline alt="Frame"></div>
    <div class="svg-items"><img src="@/assets/icons/twitter.svg" svg-inline alt="Frame"></div>
    <div class="svg-items" @mouseenter="active = true" @mouseleave="active = false">
      <img v-if="active" src="@/assets/icons/IconHover.svg" svg-inline alt="Frame">
      <img v-else src="@/assets/icons/Icon.svg" svg-inline alt="Frame">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialIcons',
  data () {
    return {
      active: false
    }
  }
}
</script>

<style scoped lang="scss">
#social-icons {
  display: flex;
  flex-direction: row;
  align-items: center;
  .svg-items {
    margin-left: 15px;
    cursor: pointer;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-left: 40px;
      &:hover {

      }
    }
  }
}
</style>
