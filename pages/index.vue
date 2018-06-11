<template>
<el-container>
  <el-aside class="filters" style="width: 250px">
    <checkbox-filter name="category" class="checkbox-filter"></checkbox-filter>
    <checkbox-filter name="ingredient" class="checkbox-filter"></checkbox-filter>
    <checkbox-filter name="makeTimes" class="checkbox-filter"></checkbox-filter>
    <range-filter name="alcohol" type="filter" :isRange="true" class="range-filter"></range-filter>
    <range-filter name="sweet" type="filter" :isRange="true" class="range-filter"></range-filter>
    <range-filter name="bitter" type="filter" :isRange="true" class="range-filter"></range-filter>
    <range-filter name="sour" type="filter" :isRange="true" class="range-filter"></range-filter>
    <range-filter name="aroma" type="filter" :isRange="true" class="range-filter"></range-filter>
  </el-aside>
  <el-main class="product-card-area">
    <product-card v-for="product in filteredProducts" :key="product.id" v-bind="product"/>
  </el-main>
</el-container>
</template>

<script>
import CheckboxFilter from "../components/filters/CheckboxFilter";
import RangeFilter from "../components/filters/RangeFilter";
import ProductCard from "../components/ProductCard";

export default {
  name: "ProductView",
  components: {
    ProductCard,
    CheckboxFilter,
    RangeFilter
  },
  computed: {
    filter() {
      return this.$store.state.filter;
    },
    filteredProducts() {
      return this.$store.getters.filteredProducts;
    }
  }
};
</script>

<style lang="scss">
.filters {
  padding-left: 30px;
  .checkbox-filter {
    margin-bottom: 10px;
  }
}
.product-card-area {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
</style>
