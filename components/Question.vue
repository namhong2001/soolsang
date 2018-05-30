<template>
<div>
  <div class="question-container">
    <span class="question-mark">질문</span>
    <div class="main">
      <div class="info-header">
        <span class="submit-date">{{questionDate}}</span>
        <span class="report">신고</span>
      </div>
      <p class="content">{{questionContent}}</p>
    </div>
  </div>
  <div class="answer-container">
    <span class="answer-mark">답변</span>
    <div class="main">
      <div class="info-header">
        <span class="submit-date">{{answerDate}}</span>
        <span class="report">신고</span>
      </div>
      <p class="content">{{answerContent}}</p>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "question",
  props: ["questionDate", "questionContent", "answerDate", "answerContent"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.question-mark,
.answer-mark {
  color: black;
  padding: 3px;
  white-space: nowrap;
}

.question-mark {
  background-color: orangered;
}
.answer-mark {
  background-color: greenyellow;
}

.question-container,
.answer-container {
  display: flex;
  align-items: center;
  width: 100%;
  > * {
    margin: 5px;
  }
}

.answer-container {
  padding-left: 30px;
}
.main {
  width: inherit;

  .info-header {
    display: flex;
    justify-content: space-between;
    width: inherit;

    .submit-date,
    .report {
      font-size: 0.8em;
    }
  }
}
</style>
