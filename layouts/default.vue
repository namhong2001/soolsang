<template>
<el-container class="root-container">
  <el-header id="global-header">
    <div class="header-contents">
      <nuxt-link to="/">
        <img id="logo" src="../assets/logo.png">
      </nuxt-link>
      <el-input id="search-input" class="input-container" placeholder="Search" v-model="searchString"></el-input>
      <nuxt-link to="/me" class="icon-container">
        <img id="me-icon" class="icon" src="../assets/me-64x64.png">
        <span>내정보</span>
      </nuxt-link>
      <nuxt-link to="/cart" class="icon-container">
        <img id="cart-icon" class="icon" src="../assets/cart-64x64.png">
        <span>장바구니</span>
      </nuxt-link>
    </div>
  </el-header>
  <nuxt/>
  <el-footer>
  </el-footer>
</el-container>
</template>

<script>
export default {
  computed: {
    searchString: {
      get() {
        return this.$store.state.filter.searchString;
      },
      set(val) {
        this.$store.commit("updateFilter", {
          searchString: val
        });
      }
    }
  }
};
</script>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

#global-header {
  .header-contents {
    background-color: white;
    width: calc(100%-40px);
    height: inherit;
    display: flex;
    align-items: center;
    position: fixed;
  }
}

#logo {
  height: 50px;
}

.input-container {
  text-align: center;
  .el-input__inner {
    // margin-left: 30px;
    width: 50%;
  }
}

.icon-container {
  text-align: center;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  white-space: nowrap;
  font-size: 0.8em;

  .icon {
    height: 50%;
    margin: 3px;
  }
}
</style>
