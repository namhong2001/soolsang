<template>
  <section class="buyer">
    <header class="header">
      <h3>2. 구매자</h3>
      <div class="buyer-list">
        <el-button :class="{selected: buyer.id == currentBuyer.id}"
                   type="text" @click="selectBuyer(buyer.id)" v-for="buyer in buyers"
                   :key="buyer.id">{{buyer.name}}</el-button>
      </div>
      <div class="buttons">
        <el-button type="text" @click="addBuyer">+</el-button>
        <el-button type="text" @click="editBuyer" v-show="!showForm">수정</el-button>
      </div>
    </header>
    <article class="info" v-show="!showForm">
      <p>{{currentBuyer.name}}</p>
      <P class="phone-number">
        <span>{{currentBuyer.phoneNumber}}</span>
      </P>
      <p>{{currentBuyer.address}}</p>
    </article>
    <el-form class="form" ref="form" :model="form" label-width="120px" v-show="showForm">
      <el-form-item label="이름">
        <el-col :span="11">
          <el-input v-model="form.name"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="전화 번호">
        <el-col :span="11">
          <el-input v-model="form.phoneNumber"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="주소">
        <el-col :span="21">
          <el-input v-model="form.address"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="기본으로 설정">
        <el-checkbox v-model="form.isDefault"></el-checkbox>
      </el-form-item>
      <div class="form-buttons">
        <el-button @click="cancleForm">취소</el-button>
        <el-button @click="completeForm">완료</el-button>
      </div>
    </el-form>
  </section>
</template>
<script>
export default {
  name: "buyer",
  data() {
    return {
      showForm: false,
      form: {}
    };
  },
  methods: {
    addBuyer() {
      this.showForm = true;
      this.form = {
        isDefault: false
      };
    },
    editBuyer() {
      this.showForm = true;
      this.form = { ...this.currentBuyer };
    },
    completeForm() {
      if (this.form.id) {
        this.$store.commit("updateBuyer", this.form);
      } else {
        this.$store.commit("addBuyer", this.form);
      }
      this.showForm = false;
    },
    cancleForm() {
      this.showForm = false;
    },
    selectBuyer(id) {
      this.$store.commit("updateCurrentBuyerId", id);
      this.showForm = false;
    }
  },
  computed: {
    buyers() {
      return this.$store.state.buyers;
    },
    currentBuyer() {
      return this.$store.getters.currentBuyer;
    }
  }
};
</script>
<style lang='scss' scoped>
.buyer {
  margin: 20px 0;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    .buyer-list {
      height: 45px;
      line-height: 45px;
      margin-left: 5%;
      flex-grow: 1;
      .selected {
        font-size: 1.1em;
      }
    }
  }
  .info {
    padding-left: 10%;
  }
  .phone-number {
    .icon {
      margin-left: 5px;
      &.el-icon-error {
        color: red;
      }
      &.el-icon-success {
        color: green;
      }
    }
  }
  .form {
    padding: 20px;
    .form-buttons {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
