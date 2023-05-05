<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <view class="input-view">
      token-input:
      <u-input placeholder="请输入内容" border="surround" v-model="token"></u-input>
    </view>
    token-text: {{ token }}
    <u-button type="primary" :plain="true" text="setInfo" @click="setInfo"></u-button>
  </view>
  <!-- 虚拟列表 -->
  <!-- <list :data="dataList" /> -->
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import list from "@/pages/index/list.vue"
import type { listItem } from "@/pages/index/list.vue"

import storeModules from "@/store"
const { user } = storeModules();

// 解构出来的数据是非响应式的，需要用storeToRef()来进行转换，才能动态获取数据
let { token } = storeToRefs(user);

const title = ref('Hello');

onMounted(() => {
  // console.log(store)
  // for (let index = 1; index < 20000; index++) {
  //   dataList.push({ num: index, index: index })
  // }
})

// pinia可以直接修改state数据
// 这里pinia配置了持久化
const setInfo = () => {
  token.value += "1";
  // user.getUserInfo()
}

let dataList = reactive([]) as Array<listItem>

</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.input-view {
  display: flex;
  align-items: center;
}
</style>
