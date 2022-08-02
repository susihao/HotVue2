<template>
  <div class="top">
    <NewLists :List="$store.state.initData"></NewLists>
    <PageNav :pathURL="pathStr"></PageNav>
  </div>
</template>

<script>
import NewLists from "../components/NewLists.vue";
import PageNav from "../components//PageNav.vue";

export default {
  name: "Top",
  data() {
    return {
      num: 0,
      initData: [],
      pathStr: "topnews/index",
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.num = Math.floor(Math.random() * 10);
      this.$axios
        .get("topnews/index", {
          params: {
            key: "b1630e42f982a643300367730adaf4b2",
            num: 20,
          },
        })
        .then((res) => {
          res.data.newslist.forEach((element) => {
            if (element.picUrl == "") {
              element.picUrl =
                "http://p9-tt.byteimg.com/list/pgc-image/RVX52A65Pj0fEF";
            }
          });
          this.$store.commit("changeData", res.data.newslist);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: {
    NewLists,
    PageNav,
  },
};
</script>
<style lang="scss">
.topImg {
  width: 100%;
}
</style>
