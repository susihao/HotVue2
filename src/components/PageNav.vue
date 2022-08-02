<template>
  <div class="">
    <ul class="PageNav">
      <li @click="fir">首页</li>
      <li @click="del">上一页</li>
      <li class="checkLi">{{$store.state.pageNum}}</li>
      <li @click="add">下一页</li>
    </ul>
  </div>
</template>
<script >
export default {
  name: "PageNav",
  props: ["pathURL"],
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    getData() {
      this.num = Math.floor(Math.random() * 20);
      this.$axios
        .get(this.pathURL, {
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
    fir() {
      this.$store.commit("firNum");
      this.getData();
    },
    add() {
      this.$store.commit("addNum");
      this.getData();
    },
    del() {
      if (this.$store.state.pageNum - 1 >= 0) {
        this.$store.commit("delNum");
        this.getData();
      }
    },
  },
};
</script>
<style lang="scss">
.PageNav {
  position: relative;
  text-align: center;
  font-size: 0.625rem;
  margin: 0.9rem 0;
  li {
    display: inline-block;
    color: rgb(18, 132, 224);
    border-radius: 3px;
    padding: 2px 5px;
    margin: 0 3px;
    border: 1px solid rgb(1, 94, 170);
  }
  .checkLi {
    color: red;
    border: 1px solid red;
  }
}
</style>