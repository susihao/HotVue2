<template>
  <div class="type">
    <img
      class="topImg"
      :src="$store.state.initData[num].picUrl"
      alt=""
    >
    <ul class="nav-box">
      <li
        :class="{check:isActive == 'social/index'}"
        @click="getData('social/index')"
      >社会</li>
      <li
        :class="{check:isActive == 'guonei/index'}"
        @click="getData('guonei/index')"
      >国内</li>
      <li
        :class="{check:isActive == 'world/index'}"
        @click="getData('world/index')"
      >国际</li>
      <li
        :class="{check:isActive == 'huabian/index'}"
        @click="getData('huabian/index')"
      >娱乐</li>
      <li
        :class="{check:isActive == 'tiyu/index'}"
        @click="getData('tiyu/index')"
      >体育</li>
      <li
        :class="{check:isActive == 'nba/index'}"
        @click="getData('nba/index')"
      >NBA</li>
      <li
        :class="{check:isActive == 'petnews/index'}"
        @click="getData('petnews/index')"
      >宠物</li>
      <li
        :class="{check:isActive == 'internet/index'}"
        @click="getData('internet/index')"
      >互联网资讯</li>
      <li
        :class="{check:isActive == 'film/index'}"
        @click="getData('film/index')"
      >影视资讯</li>
    </ul>
    <NewLists :List="$store.state.initData"></NewLists>
    <PageNav :pathURL="isActive"></PageNav>
  </div>
</template>
<script >
import NewLists from "../components/NewLists.vue";
import PageNav from "../components//PageNav.vue";

export default {
  name: "Type",
  data() {
    return {
      isActive: "social/index",
      num: 0,
    };
  },
  created() {
    this.getData(this.isActive);
  },
  methods: {
    getData(pathStr) {
      this.isActive = pathStr;
      this.num = Math.floor(Math.random() * 20);
      this.$axios
        .get(pathStr, {
          params: {
            key: "b1630e42f982a643300367730adaf4b2",
            num: 20,
            page: this.$store.state.pageNum,
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
.type .nav-box {
  padding: 0 10px;
  li {
    display: inline-block;
    margin: 5px 5px;
    padding: 0 10px;
    border: 1px solid red;
    border-radius: 10px;
    color: #999;
  }
  .check {
    color: #fff;
    background-color: red;
  }
}
</style>