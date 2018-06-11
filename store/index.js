import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      filter: {
        category: {
          groupTitle: "종류",
          items: ["탁주", "약주", "증류주"],
          value: ["탁주", "약주", "증류주"]
        },
        ingredient: {
          groupTitle: "주재료",
          items: ["쌀", "고구마", "보리"],
          value: ["쌀", "고구마", "보리"]
        },
        makeTimes: {
          groupTitle: "빚은 횟수",
          items: ["단양주", "이양주", "삼양주 이상"],
          value: ["단양주", "이양주", "삼양주 이상"]
        },
        alcohol: {
          label: "도수",
          bounds: [0, 50],
          value: [0, 50],
          step: 5
        },
        sweet: {
          label: "단맛",
          bounds: [0, 5],
          value: [0, 5]
        },
        bitter: {
          label: "쓴맛",
          bounds: [0, 5],
          value: [0, 5]
        },
        sour: {
          label: "신맛",
          bounds: [0, 5],
          value: [0, 5]
        },
        aroma: {
          label: "향",
          bounds: [0, 5],
          value: [0, 5]
        },
        searchString: ""
      },
      // key represents product id
      products: [
        {
          id: 1,
          image: require("assets/test-product-image.jpg"),
          price: 34200,
          companyName: "배상면주가",
          productName: "한산소곡주",
          category: "탁주",
          ingredient: "쌀",
          makeTimes: "단양주",
          volume: 340,
          rate: 4,
          alcohol: 17,
          sweet: 3,
          bitter: 2,
          sour: 4,
          aroma: 1,
          deliveryCharge: 3500,
          freeDeliveryMoney: 11000
        }
      ],
      reviews: {
        1: [
          {
            id: 1,
            rate: 4,
            title: "좋아요",
            submitDate: "2018.01.12",
            content: "맛있고 잘 샀습니다. 또 구매할 것 같아요"
          },
          {
            id: 2,
            rate: 4,
            title: "좋아요",
            submitDate: "2018.01.12",
            content: "맛있고 잘 샀습니다. 또 구매할 것 같아요"
          },
          {
            id: 3,
            rate: 4,
            title: "좋아요",
            submitDate: "2018.01.12",
            content: "맛있고 잘 샀습니다. 또 구매할 것 같아요"
          },
          {
            id: 4,
            rate: 4,
            title: "좋아요",
            submitDate: "2018.01.12",
            content: "맛있고 잘 샀습니다. 또 구매할 것 같아요"
          },
          {
            id: 5,
            rate: 4,
            title: "좋아요",
            submitDate: "2018.01.12",
            content: "맛있고 잘 샀습니다. 또 구매할 것 같아요"
          },
          {
            id: 6,
            rate: 4,
            title: "좋아요",
            submitDate: "2018.01.12",
            content: "맛있고 잘 샀습니다. 또 구매할 것 같아요"
          },
          {
            id: 7,
            rate: 4,
            title: "좋아요",
            submitDate: "2018.01.12",
            content: "맛있고 잘 샀습니다. 또 구매할 것 같아요"
          },
          {
            id: 8,
            rate: 4,
            title: "좋아요",
            submitDate: "2018.01.12",
            content: "맛있고 잘 샀습니다. 또 구매할 것 같아요"
          },
          {
            id: 9,
            rate: 4,
            title: "좋아요",
            submitDate: "2018.01.12",
            content: "맛있고 잘 샀습니다. 또 구매할 것 같아요"
          },
          {
            id: 10,
            rate: 4,
            title: "좋아요",
            submitDate: "2018.01.12",
            content: "맛있고 잘 샀습니다. 또 구매할 것 같아요"
          }
        ]
      },
      questions: {
        1: [
          {
            id: 1,
            questionDate: "2018.01.02",
            questionContent: "배송일이 언제인가요?",
            answerDate: "2018.01.02",
            answerContent: "오늘 발송해드렸습니다. 통상 내일 도착합니다. 송장번호 확인해 주세요"
          }
        ]
      }
    },
    getters: {
      filteredProducts(state) {
        const inRange = (range, value) => {
          return range[0] <= value && value <= range[1];
        };
        let filter = state.filter;
        return state.products.filter(
          (cur, idx, arr) =>
            filter.category.value.includes(cur.category) &&
            filter.ingredient.value.includes(cur.ingredient) &&
            filter.makeTimes.value.includes(cur.makeTimes) &&
            inRange(filter.alcohol.value, cur.alcohol) &&
            inRange(filter.sweet.value, cur.sweet) &&
            inRange(filter.bitter.value, cur.bitter) &&
            inRange(filter.sour.value, cur.sour) &&
            inRange(filter.aroma.value, cur.aroma) &&
            cur.productName.includes(filter.searchString)
        );
      },
      getQuestionsByProductId: state => id => {
        return state.questions[id];
      },
      getReviewsByProductId: state => id => {
        return state.reviews[id];
      }
    },
    // TODO: refactoring
    mutations: {
      updateFilter(state, payload) {
        for (let key in payload) {
          if (key === "searchString") {
            state.filter.searchString = payload.searchString;
          } else {
            state.filter[key].value = Array.isArray(payload[key])
              ? payload[key].slice()
              : payload[key];
          }
        }
      }
    },
    actions: {}
  });
};

export default createStore;
