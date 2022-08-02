<template>
  <div class="NewLists">
    <ul class="list-box">
      <li
        v-for="item in List"
        :key="item.id"
        @click="JumpAll(item.url)"
      >
        <img
          :src="item.picUrl"
          alt=""
        >
        <div class="text-box">
          <h3>{{item.title}}</h3>
          <div class="p-box">
            <p>{{item.source}}</p>
            <p>{{item.ctime}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>
<script>
export default {
  name: "NewLists",
  props: ["List"],
  methods: {
    JumpAll(url) {
      location.href = url;
    },
  },
};
</script>
<style lang="scss">
.list-box li {
  display: flex;
  padding: 2px 5px;
  border-bottom: 1px solid #ccc;
  user-select: none;
  cursor: pointer;

  img {
    flex: 1;
    width: 20px;
  }
  .text-box {
    position: relative;
    flex: 2.5;
    h3 {
      font-weight: 300;
      font-size: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .p-box {
      position: absolute;
      right: 5px;
      bottom: 0;
      color: #ccc;
      p {
        float: left;
        left: 3px;
        font-size: 3px;
        margin-left: 10px;
      }
    }
  }
}
</style>