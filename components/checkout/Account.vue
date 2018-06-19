<template>
  <section class="account">
    <header class="header">
      <h3>1. 계정</h3>
      <div class="buttons">
        <el-button type="text" @click="signUp" v-show="!showForm && isAnonymous">회원가입</el-button>
      </div>
    </header>
    <article class="info" v-show="!showForm">
      <p class="sign-up-notice" v-show="isAnonymous">회원가입이 필요합니다</p>
      <p class="email" v-if="!isAnonymous">{{user.email}}</p>
    </article>
    <el-form class="form" ref="form" :model="form" label-width="120px" v-show="showForm">
      <el-form-item label="email">
        <el-col :span="11">
          <el-input type="email" v-model="form.email"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="비밀 번호">
        <el-col :span="11">
          <el-input type="password" v-model="form.password"></el-input>
        </el-col>
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
  name: "account",
  data() {
    return {
      showForm: false,
      form: {}
    };
  },
  methods: {
    signUp() {
      this.showForm = true;
      this.form = {};
    },
    completeForm() {
      this.$store.commit("signUp", this.form);
      this.showForm = false;
    },
    cancleForm() {
      this.showForm = false;
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    isAnonymous() {
      return !this.user;
    }
  }
};
</script>
<style lang='scss' scoped>
.account {
  margin: 20px 0;
  .header {
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .info {
    padding-left: 10%;
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
