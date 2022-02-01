<template>
  <div id="app-title">
    <img class="top-svg" src="@/assets/icons/Rectangle6.svg" svg-inline alt="Frame">
    <div :style="{height:  `${size}`}" class="content">
      <p class="reveal" :style="{ fontSize: `${size}`}">{{ title }}</p>
    </div>
    <img class="bottom-svg" src="@/assets/icons/Rectangle6.svg" svg-inline alt="Frame">
  </div>
</template>

<script>
export default {
  name: 'AppTitle',
  props: ['title', 'size']
}
</script>

<style scoped lang="scss">
#app-title {
  text-align: center;
  font-weight: 800;
  line-height: 100%;
  color: #FFF;
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .top-svg {
    padding-left: 50px;
  }

  .bottom-svg {
    padding-right: 50px;
  }
}
</style>
