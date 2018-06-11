<template>
<div>
  {{label}}
  <sub class="value">
    {{value}}
  </sub>
</div>
</template>
<script>
export default {
  name: "mini-taste",
  props: ["label", "value"]
};
</script>
<style lang='scss' scoped>
div {
  //  position: relative;
  //  span
}
</style>
