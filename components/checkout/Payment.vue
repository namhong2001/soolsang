<template>
<section class="payment">
  <h3>4. 결제</h3>
  <div class="payment-methods">
    <el-button @click="payment">kakao pay</el-button>
  </div>
</section>
</template>
<script>
export default {
  methods: {
    payment() {
      this.$alert("구매해주셔서 감사합니다.", "결제 완료", {
        confirmButtonText: "확인",
        callback: action => {
          this.$router.push("/");
        }
      });
    }
  }
};
</script>
<style lang='scss'>
.payment-methods {
  padding: 20px;
}
</style>
