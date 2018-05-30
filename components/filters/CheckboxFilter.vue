<template>
<div class="checkbox-filter-container">
  <el-checkbox class="group-title" :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">{{groupTitle}}</el-checkbox>
  <el-checkbox-group class="checkbox-group" v-model="checkedItems" @change="handleCheckedItemsChange">
    <!-- <ul> -->
      <!-- <li v-for="item in items" :key="item"> -->
        <el-checkbox class="checkbox" v-for="item in items" :key="item" :label="item"></el-checkbox>
      <!-- </li> -->
    <!-- </ul> -->
  </el-checkbox-group>
</div>
</template>

<script>
export default {
  name: "checkbox-filter",
  props: ["groupTitle", "items"],
  data() {
    return {
      isIndeterminate: false,
      checkAll: true,
      checkedItems: this.items.slice()
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedItems = val ? this.items.slice() : [];
      this.isIndeterminate = false;
      this.$emit("change", this.groupTitle, this.checkedItems);
    },
    handleCheckedItemsChange(val) {
      let checkedCount = val.length;
      this.checkAll = checkedCount === this.items.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.items.length;
      this.$emit("change", this.groupTitle, this.checkedItems);
    }
  }
};
</script>


<style lang="scss">
.checkbox-filter-container {
  .el-checkbox__inner,
  .el-checkbox__inner::after {
    transition-duration: 0ms;
  }
  .group-title {
    display: block;
    padding-bottom: 3px;
    margin-bottom: 5px;
    border-bottom: 1px dashed gray;

    .el-checkbox__label {
      color: black;
      font-size: 1.3em;
      line-height: normal;
      vertical-align: middle;
    }
  }
  .checkbox-group {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;

    .checkbox {
      margin-left: 0;
      margin-bottom: 3px;
      width: 7em;
    }
  }
}
</style>
