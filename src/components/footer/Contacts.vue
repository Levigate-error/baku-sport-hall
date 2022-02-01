<template>
  <div id="contacts">
    <div class="container">
      <div class="title">
        <p>Контакты</p>
      </div>
      <div class="content">
        <div class="item" v-for="(item, index) in items" :key="index">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-content">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacts',
  data () {
    return {
      items: [
        {
          title: 'Адрес:',
          content: 'Проспект нефтяников, 26а'
        },
        {
          title: 'Email:',
          content: 'info@mysite.ru'
        },
        {
          title: 'Телефон:',
          content: '+994 (50) 326 2326'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
#contacts {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  .container {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .title {
      font-style: normal;
      font-weight: bold;
      font-size: 55px;
      line-height: 67px;
      letter-spacing: 0.09em;
      color: #1D1B25;
      margin-bottom: 110px;
    }
    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      @media (max-width: 600px) {
        flex-direction: column;
      }
      .item {
        @media (max-width: 600px) {
          margin-bottom: 10px;
        }
        .item-title {
          font-style: normal;
          font-weight: bold;
          font-size: 26px;
          line-height: 30px;
          letter-spacing: 0.09em;

          color: #000000;
          margin-bottom: 10px;
        }
        .item-content {
          font-style: normal;
          font-weight: normal;
          font-size: 13px;
          line-height: 15px;
          letter-spacing: 0.045em;

          color: #000000;
        }
      }
    }
  }
}
</style>
