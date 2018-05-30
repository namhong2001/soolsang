<template>
<nuxt-link :to="`/detail/${id}`">
  <el-card class="product-card">
    <div class="image-area" :style="{ backgroundImage: `url(${imgSrc})` }">
      <div class="alcohol">{{alcohol}}</div>
      <div class="sub-info">
        <p class="ingredient">{{ingredient}}</p>
        <p class="volume">{{volume}}ml</p>
      </div>
    </div>
    <div class="description">
      <p class="product-name">{{productName}}</p>
      <p class="price">{{price | currency}}<span class="currency-unit">원</span></p>
      <p class="company-name">{{companyName}}</p>
      <el-rate v-model="rateValue" disabled></el-rate>
    </div>
    <div class="rating">
    </div>
  </el-card>
</nuxt-link>
</template>

<script>
export default {
  name: "product",
  props: ["imgSrc", "productName", "volume", "companyName", "price", "rate", "ingredient", "alcohol", "id"],

  data() {
    return {
      rateValue: this.rate
    };
  }
};
</script>

<style lang="scss">
$card-width: 200px;

.product-card {
  width: $card-width;
  margin: 0 30px 50px 0;
  box-sizing: content-box;
  flex-shrink: 0;
  .image-area {
    width: $card-width;
    height: $card-width;
    position: relative;
    background-position: center center;
    background-size: cover;
  }
  .alcohol {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: white;
    color: orangered;
    font-size: 1.5em;
    font-weight: bold;
    border-radius: 50%;
    width: 1.5em;
    height: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 5px white, 0 0 10px white, 0 0 20px red;
  }
  .percent {
    font-size: 0.5em;
  }
  .sub-info {
    font-size: 0.8em;
    position: absolute;
    right: 10px;
    bottom: 10px;
    text-align: right;
    color: white;
  }
  .description {
    padding: 0 10px;

    > * {
      margin: 3px 0;
    }
    .product-name {
      font-size: 1.1em;
      font-weight: bold;
    }
    .price {
      color: orangered;
      font-size: 1.4em;
      .currency-unit {
        margin-left: 0.3em;
        font-size: 0.65em;
      }
    }
    .company-name {
      color: gray;
      font-size: 0.8em;
    }
  }

  .el-card__body {
    padding: 0;
  }
}
</style>
