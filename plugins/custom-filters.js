import Vue from "vue";

Vue.filter("currency", val => {
  return val
    .toString()
    .split("")
    .reverse()
    .reduce((prev, cur, index) => {
      if (!(index % 3)) {
        cur = cur + ",";
      }
      return cur + prev;
    });
});
