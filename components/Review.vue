<template>
<div class="review-container">
  <div class="image-area">
    <img class="rate-image" :src="imgSrc">
    <span class="rate">{{rate}}</span>
  </div>
  <div class="content-area">
    <div class="header">
      <span class="submit-date">{{submitDate}}</span>
      <span class="report">신고</span>
    </div>
    <p class="review-detail">{{content}}</p>
  </div>
</div>
</template>

<script>
const rateImage = [
  require("assets/rate-1.png"),
  require("assets/rate-2.png"),
  require("assets/rate-3.png"),
  require("assets/rate-4.png"),
  require("assets/rate-5.png")
];

export default {
  name: "review",
  props: ["rate", "submitDate", "content"],
  computed: {
    imgSrc() {
      return rateImage[this.rate - 1];
    }
  }
};
</script>

<style lang="scss" scoped>
.review-container {
  width: 100%;
  display: flex;
  margin-bottom: 10px;
}
.content-area {
  width: inherit;
}
.header {
  display: flex;
  justify-content: space-between;
  width: inherit;

  .submit-date,
  .report {
    font-size: 0.8em;
  }
}
.image-area {
  position: relative;
  z-index: -1;
  margin-right: 10px;
  .rate {
    position: absolute;
    bottom: 1px;
    right: 1px;
    font-size: 1.5em;
    color: black;
  }
}
</style>
