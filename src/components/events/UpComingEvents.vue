<template>
  <div id="up-coming-events">
    <div class="title">
      <p>Ближайшие события</p>
    </div>
    <div class="content">
      <div class="item" v-for="(item, index) in items" :key="index">
        <div class="item-title">
          <p>{{ item.title }}</p>
        </div>
        <hr>
        <div class="item-date">
          <p>{{ item.date }}</p>
        </div>
        <div class="item-image" v-if="item.img">
          <img :src="getImgUrl(item.img)" alt="event image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpComingEvents',
  data () {
    return {
      items: [
        {
          title: 'Турнир по карате "Арпачай"',
          date: '20.01.2022-23.01.2022',
          img: 'up-coming-event-item-image1'
        },
        {
          title: 'Турнир по Самбо "Гара Каплан"',
          date: '01.01.2021-05.01.2021',
          img: 'up-coming-event-item-image2'
        },
        {
          title: 'Концерт по тематике "Дружба народов"',
          date: '15.03.2020',
          img: 'up-coming-event-item-image3'
        },
        {
          title: 'SOON...',
          date: '',
          img: ''
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
#up-coming-events {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 75px;
  .title {
    height: 170px;
    width: 80%;
    background-color: #232323;
    margin: 0 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 48px;
      line-height: 56px;
      letter-spacing: 0.05em;
      color: #FFFFFF;
      @media (max-width: 800px) {
        font-size: 32px;
        line-height: 36px;
        text-align: center;
      }
    }
  }
  .content {
    display: grid;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    width: 80%;
    margin-top: 75px;
    @media (max-width: 1100px) {
      grid-template-columns: 1fr 1fr;
      margin-bottom: 10px;
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      margin-bottom: 10px;
    }
    .item {
      width: 240px;
      height: 500px;
      background-color: #DBDBDB;
      margin: 0 8px 10px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      .item-title {
        font-style: normal;
        font-weight: 300;
        font-size: 30px;
        line-height: 35px;
        text-align: center;
        letter-spacing: 0.13em;
        height: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      hr {
        height: 2px;
        width: 30%;
        background-color: #FFF;
        border-radius: 5px;
        border-color: #FFF;
      }
      .item-date {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        letter-spacing: 0.13em;
        color: #000000;
        margin-top: 50px;
        margin-bottom: 40px;
      }
      .item-image {
        width: 176px;
        margin: 0 auto 18px;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
