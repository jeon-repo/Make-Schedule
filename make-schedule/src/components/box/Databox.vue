<template>
  <fieldset>
    <legend>회원 정보</legend>
    <div class="box">
      <div class="label">이름</div>
      <div class="data"><input type="text" name="name" id="name" /></div>
    </div>
    <div class="box">
      <div class="label">전화번호</div>
      <div class="data">
        <input type="number" name="phone" id="phone" />
      </div>
    </div>
    <div class="box">
      <div class="label">진행횟수</div>
      <div class="data">
        <input type="number" name="playcount" id="playcount" />
      </div>
    </div>
    <div class="box">
      <div class="label">가능 요일, 시간</div>
      <div class="data">
        <ul>
          <li>
            <label for="monday">월요일</label>
            <input type="checkbox" name="possday" id="monday" checked />
            <input
              type="text"
              name="posstime-mon"
              id="posstime-mon"
              placeholder="24시간 단위 (ex. 9-23)"
            />
          </li>
          <li>
            <label for="thuesday">화요일</label>
            <input type="checkbox" name="possday" id="thuesday" checked />
            <input
              type="text"
              name="posstime-thu"
              id="posstime-thu"
              placeholder="24시간 단위 (ex. 9-23)"
            />
          </li>
          <li>
            <label for="wednesday">수요일</label>
            <input type="checkbox" name="possday" id="wednesday" checked />
            <input
              type="text"
              name="posstime-wed"
              id="posstime-wed"
              placeholder="24시간 단위 (ex. 9-23)"
            />
          </li>
          <li>
            <label for="thursday">목요일</label>
            <input type="checkbox" name="possday" id="thursday" checked />
            <input
              type="text"
              name="posstime-thr"
              id="posstime=thr"
              placeholder="24시간 단위 (ex. 9-23)"
            />
          </li>
          <li>
            <label for="friday">금요일</label>
            <input type="checkbox" name="possday" id="friday" checked />
            <input
              type="text"
              name="posstime-fri"
              id="posstime-fri"
              placeholder="24시간 단위 (ex. 9-23)"
            />
          </li>
          <li>
            <label for="saturday">토요일</label>
            <input type="checkbox" name="possday" id="saturday" />
            <input
              type="text"
              name="posstime-sat"
              id="posstime-sat"
              placeholder="24시간 단위 (ex. 9-23)"
            />
          </li>
          <li>
            <label for="sunday">일요일</label>
            <input type="checkbox" name="possday" id="sunday" />
            <input
              type="text"
              name="posstime-sun"
              id="posstime-sun"
              placeholder="24시간 단위 (ex. 9-23)"
            />
          </li>
        </ul>
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: "Databox",
};
</script>