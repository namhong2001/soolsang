<template>
<div class="cart">
  <table>
    <thead>
      <tr>
        <th>
          <el-checkbox class="check-all" :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"></el-checkbox>
        </th>
        <th>상품정보</th>
        <th>수량</th>
        <th>상품금액</th>
        <th>배송비</th>
      </tr>
    </thead>
    <tbody>
      <el-checkbox-group v-model="checkedItems" @change="handleCheckedItemsChange">
        <tr v-for="item in items" :key="item.id">
          <td>
            <el-checkbox class="checkbox"></el-checkbox>
          </td>
          <td>
            <img class="item-image" :src="item.imgSrc">
          </td>
          <td>
            <p>
              <span class="product-name">item.productName</span> |
              <span class="company-name">item.companyName</span>
            </p>
            <p>
              <span class="alcohol">item.alcohol</span> |
              <span class="ingredient">item.ingredient</span> |
              <span class="make-times">item.makeTimes</span> |
              <span class="volume">item.volume</span> |
            </p>
            <p>
              <mini-taste v-bind="item.taste.sweet"></mini-taste>
              <mini-taste v-bind="item.taste.bitter"></mini-taste>
              <mini-taste v-bind="item.taste.sour"></mini-taste>
              <mini-taste v-bind="item.taste.aroma"></mini-taste>
            </p>
          </td>
          <td>

          </td>
          <td></td>
        </tr>
      </el-checkbox-group>
    </tbody>


  </table>
</div>
</template>

<script>
import MiniTaste from "@/components/MiniTaste";
export default {
  components: {
    Minitaste
  }
};
</script>

<style lang="scss" scoped>
</style>

