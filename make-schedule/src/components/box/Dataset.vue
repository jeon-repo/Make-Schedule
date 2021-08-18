<template>
  <fieldset>
    <legend>입력된 정보</legend>
    <!-- <div :class="user.idx" v-for="user in user_info">
      <div class="name">{{ user.name }}</div>
      <div class="schedule">
        {{ user.schedule }}
        <button @click="remove_user">삭제</button>
      </div>
    </div> -->
    <div class="user-data">
      <div>홍길동,</div>
      <div>월10-20,화14-15,수18-20,금17-18 <button>삭제</button></div>
    </div>
    <div class="user-data">
      <div>김길동,</div>
      <div>월10-20,수18-20,금17-18 <button>삭제</button></div>
    </div>
    <div class="user-data">
      <div>박길동,</div>
      <div>월화금10-18 <button>삭제</button></div>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: "Dataset",
};
</script>