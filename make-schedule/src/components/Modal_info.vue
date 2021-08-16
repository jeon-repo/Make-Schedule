<template>
  <div class="black-bg" v-if="modal_window">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>상세 내용</p>
      <button @click="modal_window">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal_info',
  props: {
    modal_window: Boolean
  }
}
</script>
  
<style>
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
</style>