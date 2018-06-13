<template>
<!-- do not use this -->
<span>{{updatedVal}}<span :class="[{'same-size': sameSize}, 'won']">원</span></span>
</template>
<script>
export default {
  name: "currency",
  props: ["value", "sameSize"],
  computed: {
    updatedVal() {
      return this.value
        .toString()
        .split("")
        .reverse()
        .reduce((prev, cur, index) => {
          if (!(index % 3)) {
            cur = cur + ",";
          }
          return cur + prev;
        });
    }
  }
};
</script>
<style lang='scss' scoped>
.won:not(.same-size) {
  font-size: 0.7em;
}
</style>
