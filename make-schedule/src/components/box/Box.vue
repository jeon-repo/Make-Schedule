<template>
  <div>
    <div class="black-bg" v-if="modal_window">
      <div class="white-bg content-left">
        <h4>테스트</h4>
        <p>컨텐츠</p>
        <button @click="close_modal">닫기</button>
      </div>
    </div>

    <div class="dataset">
      <Dataset />
    </div>
    <div class="trainerbox">
      <Trainerbox />
    </div>
    <div class="databox">
      <Databox />
    </div>
    <div class="addbtn">
      <button @click="add_member">회원 추가</button>
    </div>
    <div class="calbtn">
      <button @click="show_modal">스케줄 계산</button>
    </div>
    <div class="banner-position" />
    <div class="banner">광고 배너</div>
  </div>
</template>

<script>
import Dataset from "@/components/box/Dataset.vue";
import Trainerbox from "@/components/box/Trainerbox.vue";
import Databox from "@/components/box/Databox.vue";

export default {
  name: "Box",
  data() {
    return {
      modal_window: false,
    };
  },

  methods: {
    add_member() {
      alert("홍길동 회원 추가");
    },

    show_modal() {
      this.modal_window = true;
      // this.modal_info = info
    },

    close_modal() {
      this.modal_window = false;
    },
  },
  components: {
    Dataset,
    Trainerbox,
    Databox,
  },
};
</script>

<style>
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0px;
  top: 0px;
  padding: 10rem 2rem 0 2rem;
}

.white-bg {
  width: 100%;
  height: 30rem;
  background: white;
  border-radius: 8px;
  padding: 20px;
  text-align: left;
}

div {
  box-sizing: border-box;
}

.addbtn > button,
.calbtn > button {
  width: 100%;
  height: 2.5rem;
  font-size: 1rem;
}

.banner-position {
  width: 100%;
  height: 4.5rem;
}

.banner {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 5rem;
  background-color: red;
}

fieldset {
  font-size: 1.2rem;
}

legend {
  font-size: 1.2rem;
}

input {
  height: 1.5rem;
  font-size: 1.2rem;
}

ul {
  margin-top: 0.2rem;
}

.box {
  margin: 1.4rem 1.4rem 1.4rem 0;
}

.label {
  text-align: left;
  margin-bottom: 0.2rem;
}

.data {
  text-align: left;
}

@media screen and (min-width: 640px) {
  fieldset, legend, input, ul {
    font-size: 1.8rem;
  }

  input {
    height: 2rem;
  }

  .addbtn > button,
  .calbtn > button {
    height: 3.5rem;
    font-size: 1.4rem;
  }

  .banner-position {
    height: 5.5rem;
  }

  .banner {
    height: 6rem;
  }
}
</style>