<template>
  <div id="main-content-text">
    <app-title title="Бакинский Дворец Спорта" size="24px"></app-title>
    <div class="content reveal">
      <p>
        Дворец спорта, известный также как Дворец Ручных Игр — спортивная арена, расположенная в городе Баку, столице Азербайджана.
        Арена вмещает около 2000 зрителей. Дворец ручных игр был построен в 1974 году.
        На протяжении всей истории и по сей день, во дворце проводятся различные внутренние и международные соревнования по спортивному снаряжению, таким как бадминтон, дзюдо, карате, гандбол, самбо, ушу-санда, кикбоксинг, футзал, борьба, настольный теннис, тхэквондо и волейбол.
        Для покупки билетов и ознакомления с расписанием предстоящих мероприятий свяжитесь с нами по телефону, указанному в шапке профиля.
      </p>
    </div>
  </div>
</template>

<script>
import AppTitle from '@/components/global/AppTitle.vue'

export default {
  name: 'MainContentText',
  components: {
    AppTitle
  }
}
</script>

<style scoped lang="scss">
#main-content-text{
  width: 35%;
  @media (max-width: 1000px) {
    width: 90%;
    margin-bottom: 10px;
  }
  .content {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    text-align: justify;

    color: #FFFFFF;
  }
}
</style>
