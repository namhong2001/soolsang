<template>
  <section class="delivery">
    <header class="header">
      <h3>3. 배송지</h3>
      <div class="delivery-list">
        <el-button :class="{selected: address.id == currentAddress.id}"
                   type="text" @click="selectAddress(address.id)" v-for="address in addresses"
                   :key="address.id">{{address.title}}</el-button>
      </div>
      <div class="buttons">
        <el-button type="text" @click="addAddress">+</el-button>
        <el-button type="text" @click="editAddress" v-show="!showForm && currentAddress.id">수정</el-button>
      </div>
    </header>
    <article class="info" v-show="!showForm">
      <p>{{currentAddress.name}}</p>
      <P class="phone-number">
        <span>{{currentAddress.phoneNumber}}</span>
      </P>
      <p>{{currentAddress.address}}</p>
    </article>
    <el-form class="form" ref="form" :model="form" label-width="120px" v-show="showForm">
      <el-form-item label="주소지 제목">
        <el-col :span="11">
          <el-input v-model="form.title"></el-input>
        </el-col>
      </el-form-item>
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
  name: "delivery",
  data() {
    return {
      showForm: false,
      form: {}
    };
  },
  methods: {
    addAddress() {
      this.showForm = true;
      this.form = {
        isDefault: false
      };
    },
    editAddress() {
      this.showForm = true;
      this.form = { ...this.currentAddress };
    },
    completeForm() {
      if (this.form.id) {
        this.$store.commit("updateAddress", this.form);
      } else {
        this.$store.commit("addAddress", this.form);
      }
      this.showForm = false;
    },
    cancleForm() {
      this.showForm = false;
    },
    selectAddress(id) {
      this.$store.commit("updateCurrentAddressId", id);
      this.showForm = false;
    }
  },
  computed: {
    addresses() {
      return this.$store.getters.addresses;
    },
    currentAddress() {
      return this.$store.getters.currentAddress;
    }
  }
};
</script>

<style lang='scss' scoped>
.delivery {
  margin: 20px 0;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    .delivery-list {
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
