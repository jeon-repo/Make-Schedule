<template>
<div>
  <!-- <ModalInfo :modal_window="modal_window" /> -->
  <!-- <div class="black-bg" v-if="modal_window">
    <div class="white-bg content-left">
      <h4>{{ modal_info.title }}</h4>
      <p>상세 내용 : {{ modal_info.content }}</p>
      <p>가격 : {{ modal_info.price }}원</p>
      <button @click="close_modal">닫기</button>
    </div>
  </div> -->

  <!-- <div class="menu"> -->
    <!-- vue의 for문을 사용하면 ()안에 뒤에서부터 데이터가 나옴 -->
    <!-- dict인 경우 -> value, key, idx -->
    <!-- list인 경우 -> value, idx -->
    <!-- <a v-for="(menu, menu_idx) in menus" :key="menu_idx">{{ menu }}</a> -->
  <!-- </div> -->

  <div class="products">
    <div class="product" v-for="(info, product_id) in products" :key="product_id">
      <div class="room">
        <img :src="info.image" :alt="info.content" class="room-img">
        <div class="content-left">
          <h4 @click="show_modal(info)">제목 : {{ info.title }}</h4>
          <!-- <h4>내용 : {{ info.content }}</h4> -->
          <p>가격 : {{ info.price }}원</p>
          <!-- <button v-on:click="show_modal">구매하기</button> -->
          <!-- <button @click="add_신고">허위매물신고</button> <span>신고수: {{ data.complaint }}</span> -->
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import oneroom from '../assets/oneroom'

export default {
  name: 'Shop',
  data() {
    return {
      // modal_window: false,
      // modal_info: null,
      products: oneroom,
    }
  },

  // methods: {
  //   show_modal(info) {
  //     this.modal_window = true
  //     this.modal_info = info
  //   },

  //   close_modal() {
  //     this.modal_window = false
  //   },
  // },
}
</script>

<style scoped>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.room {
  width: 70%;
  margin-left: 15%;
}

.room-img {
  width: 100%;
}

.content-left {
  /* width: 65%; */
  text-align: left;
}
</style>
