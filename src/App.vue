<template>
  <div id="app">
    <div class="header">
      <p>新闻热点</p>
      <video
        class="headerImg"
        src="https://lf3-static.bytednsdoc.com/obj/eden-cn/bfhpqbt/pc_background_muxing2.mp4"
        muted
        loop
        playsinline
        preload="auto"
      ></video>
    </div>
    <div>
      <ul class="nav">
        <li
          :class="{checkText:checkPage=='top'}"
          @click="checkStr('top')"
        >今日头条</li>
        <li
          :class="{checkText:checkPage=='type'}"
          @click="checkStr('type')"
        >分类页面</li>
      </ul>
    </div>
    <router-view />

  </div>
</template>
<script>
export default {
  props: ["pageNum"],
  data() {
    return {
      checkPage: "top",
      locStr: "",
    };
  },
  methods: {
    checkStr(params) {
      if (this.checkPage != params) {
        this.checkPage = params;
        this.$router.push(params);
        if (params == "top") {
          this.$store.state.pageNum = 0;
        } else {
          this.$store.state.pageNum = 1;
        }
      }
    },
  },
  created() {
    this.locStr = location.href;
    this.checkPage = this.locStr.substr(this.locStr.lastIndexOf("/") + 1);
  },
  components: {},
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-size: 15px;
  font-style: "微软雅黑";
}
.header {
  p {
    width: 100%;
    position: absolute;
    font-size: 7vh;
    font-weight: 400;
    letter-spacing: 1vh;
    z-index: 2;
    color: #fff;
    text-align: center;
    line-height: 20vh;
  }
  .headerImg {
    width: 100%;
    z-index: 1;
  }
}
.nav {
  display: flex;
  height: 6vh;
  justify-content: center;
  align-items: center;
  color: #ccc;
  margin-bottom: 10px;
  li {
    box-sizing: border-box;
    padding: 0.8rem;
    list-style: none;
    // border-bottom: 5px solid red;
  }
}
.checkText {
  color: red;
  border-bottom: 2px solid red;
}
</style>
