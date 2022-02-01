<template>
<div id="what-we-offer">
  <div class="title">
    <p>Что мы предлагаем?</p>
  </div>
  <div class="content reveal">
    <div class="item" v-for="(item, index) in cards" :key="index">
      <div class="image">
        <img :src="getImgUrl(item.img)" alt="offer image">
      </div>
      <div class="text">
        <p>
          <span class="bold-text" v-if="item.bold">{{ item.bold }}</span>
          {{ item.title }}
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'WhatWeOffer',
  data () {
    return {
      cards: [
        {
          title: 'Аренда помещений для спорт. кружков',
          bold: '',
          img: 'offer-test-image'
        },
        {
          title: 'Проведение мероприятий',
          bold: '',
          img: 'offer-test-image'
        },
        {
          title: 'Спортзал',
          bold: 'VIP',
          img: 'offer-test-image'
        },
        {
          title: 'Активный отдых',
          bold: '',
          img: 'offer-test-image'
        }
      ]
    }
  },
  methods: {
    getImgUrl (name) {
      const images = require.context('@/assets/images/', false, /\.png$/)
      return images('./' + name + '.png')
    }
  }
}
</script>

<style scoped lang="scss">
#what-we-offer {
  margin-top: 110px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  .title{
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: 0.05em;
    font-style: normal;
    color: #FFF;
    margin-bottom: 110px;
    @media (max-width: 800px) {
      font-size: 32px;
      line-height: 36px;
      text-align: center;
    }
  }
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 80%;
    justify-content: space-around;
    align-content: center;
    justify-items: center;
    overflow-x: hidden;
    @media (max-width: 1100px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
    .item {
      width: 240px;
      height: 404px;
      background-color: #DBDBDB;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      margin: 0 8px 10px;
      .image {
        width: 100%;
        transition: 1s all;
        img {
          width: 100%;
        }
      }
      .image:hover {
        width: 220px;
      }
      .text {
        padding: 0 5px;
      }
    }
  }
}
</style>
