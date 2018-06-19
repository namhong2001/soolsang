<template>
<el-container class="detail">
  <el-main>
    <section id="image-section">
      <div class="image-container">
        <img class="image" :src="image">
      </div>
      <div class="mini-nav">
        <a href="#review-area"><span class="go-to-review">리뷰</span></a>
        <a href="#question-area"><span class="go-to-question">질문</span></a>
      </div>
      <hr class="hr">
    </section>
    <section id="description-section">
      <div class="description-area" v-html="productInfo">
        <!-- 양조장에서 올린 html 바로 넣기 -->
      </div>
      <hr class="hr">
    </section>
    <section id="review-section">
      <div id="review-area">
        <review v-for="review in reviews" v-bind="review" :key="review.id"></review>
      </div>
      <hr class="hr">
    </section>
    <section id="question-section">
      <div id="question-area">
        <question v-for="question in questions" v-bind="question" :key="question.id"></question>
      </div>
      <el-input class="new-question" type="textarea" :autosize="{minRows: 5, maxRows: 10}"
                v-model="newQuestion" placeholder="질문은 여기에 써주세요!"></el-input>
      <el-button class="submit-question" type="primary" @click="submitQuestion">등록</el-button>
    </section>
  </el-main>

  <el-aside>
    <div class="aside-container">
      <p class="price">{{price | currency}}원</p>
      <section class="delivery-charge-section">
        <p>배송비: {{deliveryCharge | currency}}원</p>
        <p v-if="freeDeliveryMoney">{{freeDeliveryMoney | currency}}원 이상시 무료</p>
      </section>
      <el-input-number class="quantity" v-model="quantity" :min="1" size="mini"></el-input-number>
      <div class="buying-buttons">
        <el-button class="direct-buy" type="success" @click="buyNow">바로구매</el-button>
        <el-button class="add-to-cart" type="primary" @click="addToCart">장바구니</el-button>
      </div>
      <p class="company-name">{{companyName}}</p>
      <p class="product-name">{{productName}}</p>
      <div class="sub-info">
        <span class="alcohol">{{alcohol}}도</span> /
        <span class="ingredient">{{ingredient}}</span> /
        <span class="volume">{{volume}}ml</span>
      </div>
      <section class="tastes">
        <range-filter name="alcohol" type="indicator" :value="alcohol" :disabled="true" class="range-filter"></range-filter>
        <range-filter name="sweet" type="indicator" :value="sweet" :disabled="true" class="range-filter"></range-filter>
        <range-filter name="bitter" type="indicator" :value="bitter" :disabled="true" class="range-filter"></range-filter>
        <range-filter name="sour" type="indicator" :value="sour" :disabled="true" class="range-filter"></range-filter>
        <range-filter name="aroma" type="indicator" :value="aroma" :disabled="true" class="range-filter"></range-filter>
      </section>

      <ul class="side-nav">
        <li @click="() => this.currentSectionIndex = 0" :class="{'active': this.currentSectionIndex === 0}">
          <a href="#image-section">사진</a>
        </li>
        <li @click="() => this.currentSectionIndex = 1" :class="{'active': this.currentSectionIndex === 1}">
          <a href="#description-section">설명</a>
        </li>
        <li @click="() => this.currentSectionIndex = 2" :class="{'active': this.currentSectionIndex === 2}">
          <a href="#review-section">리뷰</a>
        </li>
        <li @click="() => this.currentSectionIndex = 3" :class="{'active': this.currentSectionIndex === 3}">
          <a href="#question-section">질문</a>
        </li>
      </ul>
    </div>
  </el-aside>
</el-container>
</template>

<script>
import throttle from "lodash/throttle";
import Question from "@/components/Question";
import Review from "@/components/Review";
import RangeFilter from "@/components/filters/RangeFilter";

export default {
  mounted() {
    window.onscroll = throttle(this.handleWindowScroll, 100);
  },
  destroyed() {
    window.onscroll = null;
  },
  components: {
    Question,
    Review,
    RangeFilter
  },
  data() {
    return {
      newQuestion: "",
      quantity: 1,
      currentSectionIndex: 0,
      ...this.$store.getters.getProductById(this.$route.params.id)
    };
  },
  computed: {
    questions() {
      return this.$store.getters.getQuestionsByProductId(this.$route.params.id);
    },
    reviews() {
      return this.$store.getters.getReviewsByProductId(this.$route.params.id);
    },
    contentOffsets() {
      let ret = [];
      ret.push(document.getElementById("image-section").offsetTop);
      ret.push(document.getElementById("description-section").offsetTop);
      ret.push(document.getElementById("review-section").offsetTop);
      ret.push(document.getElementById("question-section").offsetTop);
      return ret;
    }
  },
  methods: {
    submitQuestion() {
      // submit question to server
      // use newQuestion
      console.log("upload new question : ", this.newQuestion);
    },
    buyNow() {
      this.$store.commit("updateCheckout", [
        {
          productId: this.id,
          quantity: this.quantity
        }
      ]);
      this.$router.push("/checkout");
    },
    addToCart() {
      let cartItems = this.$store.state.cartItems;
      if (cartItems.find(cur => cur.productId == this.id)) {
        this.$notify.error({
          title: "Error",
          message: "이미 장바구니에 담겨 있습니다."
        });
      } else {
        this.$store.commit("addCartItem", {
          productId: this.id,
          quantity: this.quantity
        });
        this.$notify.success({
          title: "Success",
          message: "장바구니에 담았습니다."
        });
      }
    },
    handleWindowScroll() {
      let h =
        window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      let doc = document.documentElement;
      let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      let next = this.contentOffsets.find(pos => pos > top + h / 2);
      this.currentSectionIndex =
        (next ? this.contentOffsets.indexOf(next) : this.contentOffsets.length) - 1;
    }
  }
};
</script>

<style lang="scss">
.detail {
  width: 100%;
  max-width: 1280px;
  margin: auto;
  .description-area {
    padding: 20px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .new-question {
    margin: 10px 0;
  }
  .submit-question {
    float: right;
    &::after {
      content: "";
      clear: both;
      display: table;
    }
  }
  .image-container {
    width: 100%;
    .image {
      display: block;
      margin: auto;
      width: 80%;
      height: 80%;
    }
  }
  .mini-nav {
    text-align: right;
    margin-top: 20px;
    > a {
      margin: 0 5px;
      text-decoration: underline;
      color: #3e658e;
    }
  }
  .hr {
    margin: 20px 0;
  }
  .el-aside {
    position: relative;
    .aside-container {
      position: fixed;
      > * {
        margin: 5px 0;
      }
    }
  }
  .price {
    font-size: 3em;
    color: orangered;
    margin: 10px 0;
  }
  .company-name {
    font-size: 0.8em;
  }
  .product-name {
    font-size: 1.6em;
    color: black;
  }
  .side-nav {
    list-style-type: none;
    padding: 0;
    > * {
      &.active {
        font-size: 1.2em;
      }
    }
    margin: 5px 0;
  }
  .delivery-charge-section {
    font-size: 0.9em;
    font-style: italic;
    color: gray;
  }
}
</style>