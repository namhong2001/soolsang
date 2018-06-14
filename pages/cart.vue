<template>
<div class="cart">
  <table>
    <thead>
      <tr>
        <th>
          <el-checkbox class="check-all" :indeterminate="isIndeterminate" v-model="checkAll"></el-checkbox>
        </th>
        <th colspan="2">상품정보</th>
        <th>수량</th>
        <th>상품금액<small>(원)</small></th>
        <th>배송비<small>(원)</small></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>
          <el-checkbox class="checkbox" v-model="product.checked"></el-checkbox>
        </td>
        <td>
          <nuxt-link :to="`/products/${product.id}`">
            <img class="product-image" :src="product.image">
          </nuxt-link>
        </td>
        <td class="product-info">
          <p>
            <nuxt-link :to="`/products/${product.id}`">
              <span class="product-name">{{product.productName}}</span>
            </nuxt-link> /
            <span class="company-name">{{product.companyName}}</span>
          </p>
          <p class="sub-info">
            <span class="alcohol">{{product.alcohol}}도</span> /
            <span class="ingredient">{{product.ingredient}}</span> /
            <span class="make-times">{{product.makeTimes}}</span> /
            <span class="volume">{{product.volume}}ml</span>
          </p>
          <div>
            <mini-taste label="단맛" :value="product.sweet"></mini-taste>
            <mini-taste label="쓴맛" :value="product.bitter"></mini-taste>
            <mini-taste label="신맛" :value="product.sour"></mini-taste>
            <mini-taste label="향" :value="product.aroma"></mini-taste>
          </div>
        </td>
        <td>
          <el-input-number class="quantity" v-model="product.quantity" :min="1" @change="handleQuantityChange(product.id, ...arguments)" size="mini"></el-input-number>
        </td>
        <td class="price">
          <p>{{product.price * product.quantity | currency}}</p>
          <p class="per">개당 {{product.price | currency}}</p>
        </td>
        <td class="delivery-charge">
          <p>{{product.deliveryCharge | currency}}</p>
        </td>
      </tr>
      <tr>
        <td colspan="6">
          <div class="total">
            <div>
              <p>총 상품 가격</p>
              <p class="total-product-price">{{totalProductPrice | currency}}<small>원</small></p>
            </div>
            <p>+</p>
            <div>
              <p>배송비</p>
              <p class="total-delivery-charge">{{totalDeliveryCharge | currency}}<small>원</small></p>
            </div>
            <p>=</p>
            <div>
              <p>총 주문 금액</p>
              <p class="total-price">{{totalPrice | currency}}<small>원</small></p>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <el-button type="primary" class="buy-now-button" size="medium">결제하기</el-button>
</div>
</template>

<script>
import MiniTaste from "@/components/MiniTaste";
export default {
  name: "cart",
  data() {
    return {
      products: this.$store.getters.getCartProducts
    };
  },
  components: {
    MiniTaste
  },
  computed: {
    checkAll: {
      get() {
        return this.products.every(cur => cur.checked);
      },
      set(val) {
        this.products.forEach(cur => (cur.checked = val));
      }
    },
    isIndeterminate() {
      return !this.products.every(cur => cur.checked) && !this.products.every(cur => !cur.checked);
    },
    totalProductPrice() {
      return this.products.reduce((prev, cur) => prev + cur.price * cur.quantity * cur.checked, 0);
    },
    totalDeliveryCharge() {
      return this.products.reduce((prev, cur) => prev + cur.deliveryCharge * cur.checked, 0);
    },
    totalPrice() {
      return this.totalProductPrice + this.totalDeliveryCharge;
    }
  },
  methods: {
    handleQuantityChange(id, val) {
      this.$store.commit("updateCartItem", {
        productId: id,
        quantity: val
      });
    }
  }
};
</script>

<style lang="scss">
.cart {
  padding: 0 10px;
  width: 100%;
  max-width: 980px;
  margin: 20px auto;
  .el-checkbox__inner,
  .el-checkbox__inner::after {
    transition-duration: 0ms;
  }
  .product-image {
    width: 150px;
    height: 150px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    th,
    td {
      text-align: center;
      border-bottom: 1px solid gray;
      padding: 10px;
    }
  }
  .product-info {
    > p {
      margin: 5px 0;
    }
    text-align: left;
    .sub-info {
      // font-size: 1em;
      font-style: italic;
      color: gray;
    }
  }
  .product-name {
    &:hover {
      text-decoration: underline;
    }
    font-size: 1.3em;
    font-weight: bold;
  }
  .price {
    font-size: 1.7em;
    color: orangered;
    .per {
      font-size: 0.6em;
    }
  }
  .delivery-charge {
    font-size: 1.3em;
  }
  .total {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.2em;
    .total-product-price,
    .total-delivery-charge,
    .total-price {
      font-size: 1.4em;
    }
    .total-price {
      color: orangered;
    }
  }
  .buy-now-button {
    float: right;
    margin: 10px;
  }
}
</style>

