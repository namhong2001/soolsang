<template>
  <section class="user-info">
    <header>
      <h3>1. 내정보(구매자)</h3>
      <el-button>수정</el-button>
    </header>
    <article class="shown-contents"></article>
    <el-form class="editable-contents">

    </el-form>
  </section>
</template>
<script>
export default {
  name: "editable-info",
  props: ["type"],
  data() {
    return {};
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    }
  }
};
</script>
<style lang='scss'>
</style>
