<template>
<el-container class="checkout">
<el-main class="main">
  <account class="step"></account>
  <buyer class="step"></buyer>
  <delivery class="step"></delivery>
  <payment class="step"></payment>
</el-main>
<el-aside class="aside" style="width: 40%">
  <div class="item" v-for="item in products" :key="item.id">
    <img :src="item.image">
    <div class="info">
      <p class="product-name">{{item.productName}}</p>
      <p class="quantity">{{item.quantity}}개</p>
    </div>
    <div>
      <p class="price"><span class="won">&#65510;</span>{{item.price * item.quantity | currency}}</p>
      <p class="one-item-price">개당 <span class="won">&#65510;</span>{{item.price | currency}}</p>
      <p class="delivery-charge">배송비 <span class="won">&#65510;</span>{{item.deliveryCharge | currency}}</p>
    </div>
  </div>
  <hr>
  <p class="sub-total">
    <span>소계</span>
    <span class="price"><span class="won">&#65510;</span>{{subTotal | currency}}</span>
  </p>
  <p class="total-delivery-charge">
    <span>배송비</span>
    <span class="price"><span class="won">&#65510;</span>{{totalDevlieryCharge | currency}}</span>
  </p>
  <hr>
  <p class="total">
    <span>합계</span>
    <span class="price"><span class="won">&#65510;</span>{{total | currency}}</span>
  </p>
</el-aside>
</el-container>
</template>
<script>
import Buyer from "@/components/checkout/Buyer";
import Delivery from "@/components/checkout/Delivery";
import Account from "@/components/checkout/Account";
import Payment from "@/components/checkout/Payment";

export default {
  name: "checkout",
  components: { Buyer, Delivery, Account, Payment },
  data() {
    return {
      products: this.$store.getters.checkoutProducts
    };
  },
  computed: {
    subTotal() {
      return this.products.reduce((prev, cur) => prev + cur.price * cur.quantity, 0);
    },
    totalDevlieryCharge() {
      return this.products.reduce((prev, cur) => prev + cur.deliveryCharge, 0);
    },
    total() {
      return this.subTotal + this.totalDevlieryCharge;
    }
  }
};
</script>

<style lang="scss" scoped>
.checkout {
  width: 100%;
  max-width: 1180px;
  margin: auto;
  align-items: flex-start;
  .step {
    margin: 0;
    border-bottom: 1px solid lightgray;
    padding: 30px 0;
    &:last-child {
      border: none;
    }
  }
  .aside {
    border: 1px solid #3e658e;
    margin: 20px;
    padding: 20px;
  }
  .main {
    margin: 20px;
  }
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: right;
    margin: 20px;
    img {
      width: 60px;
      height: 60px;
    }
    .info {
      text-align: left;
      flex-grow: 1;
      margin-left: 20px;
      .product-name {
        font-size: 1.1em;
      }
      .quantity {
        font-size: 0.9em;
      }
    }
    .price,
    .one-item-price {
      color: orangered;
    }
    .price {
      font-size: 1.5em;
    }
    .one-item-price {
      font-size: 0.8em;
    }
    .delivery-charge {
      font-size: 0.9em;
      color: gray;
    }
  }
  .sub-total,
  .total-delivery-charge,
  .total {
    display: flex;
    justify-content: space-between;
    margin: 20px;
    .price {
      font-size: 1.2em;
    }
  }
  .total {
    .price {
      font-size: 1.5em;
      color: orangered;
    }
  }
  .won {
    font-size: 0.8em;
    margin-left: 3px;
  }
}
</style>


