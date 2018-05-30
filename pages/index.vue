<template>
<el-container>
  <el-aside class="filters" style="width: 250px">
    <checkbox-filter v-bind="originFilters.category" class="checkbox-filter" @change="handleFilterChange"></checkbox-filter>
    <checkbox-filter v-bind="originFilters.ingredient" class="checkbox-filter" @change="handleFilterChange"></checkbox-filter>
    <checkbox-filter v-bind="originFilters.makeTimes" class="checkbox-filter" @change="handleFilterChange"></checkbox-filter>
    <range-filter v-bind="originFilters.alchol" class="range-filter" @change="handleFilterChange"></range-filter>
    <range-filter v-bind="originFilters.taste.sweet" class="range-filter" @change="handleFilterChange"></range-filter>
    <range-filter v-bind="originFilters.taste.bitter" class="range-filter" @change="handleFilterChange"></range-filter>
    <range-filter v-bind="originFilters.taste.sour" class="range-filter" @change="handleFilterChange"></range-filter>
    <range-filter v-bind="originFilters.taste.aroma" class="range-filter" @change="handleFilterChange"></range-filter>
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
  props: ["searchString"],
  data() {
    return {
      originFilters: {
        category: {
          groupTitle: "종류",
          items: ["탁주", "약주", "증류주"]
        },
        ingredient: {
          groupTitle: "주재료",
          items: ["쌀", "고구마", "보리"]
        },
        makeTimes: {
          groupTitle: "빚은 횟수",
          items: ["단양주", "이양주", "삼양주 이상"]
        },
        alchol: {
          label: "도수",
          bounds: [0, 50],
          step: 5,
          isRange: true
        },
        taste: {
          sweet: {
            label: "단맛",
            bounds: [0, 5],
            isRange: true
          },
          bitter: {
            label: "쓴맛",
            bounds: [0, 5],
            isRange: true
          },
          sour: {
            label: "신맛",
            bounds: [0, 5],
            isRange: true
          },
          aroma: {
            label: "향",
            bounds: [0, 5],
            isRange: true
          }
        }
      },

      allProducts: [
        {
          id: 1,
          imgSrc: require("assets/test-product-image.jpg"),
          productName: "한산 소곡주",
          companyName: "배상면주가",
          volume: 340,
          alcohol: 17,
          price: 38100,
          rate: 4,
          ingredient: "쌀"
        },
        {
          id: 2,
          imgSrc: require("assets/test-product-image.jpg"),
          productName: "한산 소곡주",
          companyName: "배상면주가",
          volume: 340,
          alcohol: 17,
          price: 38100,
          rate: 4,
          ingredient: "쌀"
        },
        {
          id: 3,
          imgSrc: require("assets/test-product-image.jpg"),
          productName: "한산 소곡주",
          companyName: "배상면주가",
          volume: 340,
          alcohol: 17,
          price: 38100,
          rate: 4,
          ingredient: "쌀"
        },
        {
          id: 4,
          imgSrc: require("assets/test-product-image.jpg"),
          productName: "한산 소곡주",
          companyName: "배상면주가",
          volume: 340,
          alcohol: 17,
          price: 38100,
          rate: 4,
          ingredient: "쌀"
        },
        {
          id: 5,
          imgSrc: require("assets/test-product-image.jpg"),
          productName: "한산 소곡주",
          companyName: "배상면주가",
          volume: 340,
          alcohol: 17,
          price: 38100,
          rate: 4,
          ingredient: "쌀"
        },
        {
          id: 6,
          imgSrc: require("assets/test-product-image.jpg"),
          productName: "한산 소곡주",
          companyName: "배상면주가",
          volume: 340,
          alcohol: 17,
          price: 38100,
          rate: 4,
          ingredient: "쌀"
        }
      ]
    };
  },
  methods: {
    handleFilterChange(groupTitle, items) {
      console.log(arguments);
    }
  },
  computed: {
    filteredProducts() {
      if (!this.searchString) {
        return this.allProducts;
      }

      return this.allProducts.filter(product => {
        return product.productName.toLowerCase().indexOf(this.searchString) !== -1;
      });
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
