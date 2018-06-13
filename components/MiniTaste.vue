<template>
<el-tooltip :content="label" placement="top" :disabled="!showToolTip">
  <div class="mini-taste" @mouseover="showToolTip = true" @mouseout="showToolTip = false">
    <img :src="image" class="image">
    <!-- <span class="mini-taste">{{label}} -->
      <sub class="value">{{value}}</sub>
    <!-- </span> -->
  </div>
</el-tooltip>
</template>
<script>
export default {
  name: "mini-taste",
  props: ["label", "value"],
  data() {
    return {
      showToolTip: false
    };
  },
  computed: {
    image() {
      switch (this.label) {
        case "단맛":
          return "/sweet.png";
        case "쓴맛":
          return "/leaf.png";
        case "신맛":
          return "/lemon.png";
        case "향":
          return "/nose.png";
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.image {
  width: 1.3em;
  height: 1.3em;
}
.mini-taste {
  display: inline-block;
  margin: 0 2px;
  .value {
    font-size: 1em;
  }
}
</style>
