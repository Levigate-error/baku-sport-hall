<template>
  <div id="navigation">
    <nav>
<!--      <button class="header__content__gmb" @click="toggleMobileMenu()">-->
<!--        <div class="header__content__gmb-line"></div>-->
<!--        <div class="header__content__gmb-line"></div>-->
<!--        <div class="header__content__gmb-line"></div>-->
<!--      </button>-->
      <div class="navigation-items" v-for="(item, key) in navigations" :key="key">
        <a :href="item.link">{{ item.name }}</a>
      </div>
    </nav>
    <div
      class="header__bottom"
      :class="{ active: menuActive }"
      v-show="menuActive"
    >
      <div class="navigation-items-mobile" v-for="(item, key) in navigations" :key="key">
        <a :href="item.link">{{ item.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      menuActive: false,
      navigations: [
        {
          name: 'Главная',
          link: '#'
        },
        {
          name: 'События',
          link: '#up-coming-events'
        },
        {
          name: 'Услуги',
          link: '#app-service'
        },
        {
          name: 'О нас',
          link: '#what-we-offer'
        },
        {
          name: 'Контакты',
          link: '#contacts'
        }
      ]
    }
  },
  methods: {
    toggleMobileMenu () {
      this.menuActive = !this.menuActive
    }
  }
}
</script>

<style scoped lang="scss">
nav{
  display: flex;
  flex-direction: row;
  a {
    text-decoration: none;
    color: #444444;
  }
  .navigation-items{
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    margin-right: 35px;
    @media (max-width: 600px) {
      display: none;
    }
    &:last-child{
      margin-right: 0;
    }
  }
}
.header__content__gmb {
  display: none;
  width: 30px;
  border: none;
  @media (max-width: 600px) {
    display: block;
  }
  &-line {
    width: 100%;
    height: 3px;
    background: #3f455e;
    margin-bottom: 4px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
.navigation-items-mobile {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  margin-right: 35px;
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: #444444;
  }
}

.header__bottom {
  background: white;
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 1;
  border-top: 1px solid rgba(255, 255, 255, 0.7);

  &.active,
  &:hover {
    transform: translateY(100%);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
  }
}
</style>
