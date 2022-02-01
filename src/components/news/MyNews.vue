<template>
  <div id="my-news">
    <div class="container">
      <div class="title reveal">
        <p>Новости</p>
      </div>
      <div class="content reveal">
        <div class="item" v-for="(item, index) in items" :key="index">
          <div class="item-title">
            <p>{{ item.title }}</p>
          </div>
          <div class="arrow">
            <img src="@/assets/icons/arrow.svg" svg-inline alt="Frame">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyNews',
  data () {
    return {
      items: [
        {
          title: 'Бизнес'
        },
        {
          title: 'Спорт'
        },
        {
          title: 'Культура'
        },
        {
          title: 'Стиль жизни'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
#my-news {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  overflow-x: hidden;
  .container {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-bottom: 115px;
    .title {
      text-align: center;
      font-style: normal;
      font-weight: bold;
      font-size: 78px;
      line-height: 91px;
      letter-spacing: 0.05em;
      color: #FFFFFF;
      @media (max-width: 800px) {
        font-size: 49px;
        line-height: 58px;
      }
    }
    .content {
      display: grid;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      justify-items: center;
      @media (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 500px) {
        grid-template-columns: 1fr;
      }
      transition: 1s all;
      margin-top: 130px;
      .item {
        position: relative;
        width: 230px;
        height: 270px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: #DBDBDB;
        transition: 0.5s all;
        margin-bottom: 20px;
        .item-title {
          margin-top: 55px;
          font-style: normal;
          font-weight: 300;
          font-size: 33px;
          line-height: 39px;
          text-align: center;
          color: #000000;
        }
        .arrow {
          margin-bottom: 25px;
          opacity: 0;
          transition: 1s all;
        }
      }
      .item:hover {
        transform: translateY(-10px);
        .arrow {
          opacity: 1;
        }
      }
    }
  }
}
</style>
