<template>
<div class="range-filter-container">
  <span class="label">{{label}}</span>
  <el-slider :class="['slider', {disabled}]" v-model="rangeValue" :range="isRange" :min="bounds[0]" :max="bounds[1]" :label="label" :step="step" @change="handleSliderChange" :disabled="disabled"></el-slider>
</div>
</template>

<script>
export default {
  props: ["label", "bounds", "step", "value", "disabled", "isRange"],
  mounted() {
    if (this.disabled) {
      this.$nextTick(() => {
        let runwayElem = this.$el.querySelector(".el-slider__runway");
        runwayElem.classList.remove("disabled");
      });
    }
  },
  data() {
    return {
      rangeValue: this.value || this.bounds.slice()
    };
  },
  methods: {
    handleSliderChange() {
      this.$emit("change", this.label, this.rangeValue);
    }
  }
};
</script>


<style lang="scss">
.range-filter-container {
  display: flex;
  align-items: center;
  .label {
    font-size: 15px;
    width: 2em;
    margin-right: 15px;
  }
  .slider {
    width: 70%;
    &.disabled {
      * {
        cursor: default;
      }
    }
  }
}
</style>
