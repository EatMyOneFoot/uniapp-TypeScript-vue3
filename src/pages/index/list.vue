<template>
  虚拟列表
  开始数据：{{ startIndex }}
  结束数据：{{ endIndex }}
  <div class="viewport" @scroll="scrollListBox" ref="viewport">
    <div class="v-list" :style="{ height: phantomHeight + 'px', transform: `translateY(${startOffset}px)` }">
      <div class="v-list-item" v-for="item in filterData" :key="item.num">
        {{ item.num }}
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, computed } from 'vue'
export interface listItem {
  index: number,
  num: number
}
const props = defineProps({
  data: {
    type: Array<listItem>,
    default: () => { }
  }
})
const viewport = ref<HTMLElement>()
let startIndex = ref<number>(0)
let itemSize = 100
let viewCount = 10
let phantomHeight = itemSize * props.data.length

let startOffset = computed(() => {
  return startIndex.value * itemSize
})

let endIndex = computed(() => {
  return startIndex.value + viewCount
})
let filterData = computed(() => {
  return props.data.slice(startIndex.value, endIndex.value)
})
const scrollListBox = () => {
  startIndex.value = Math.floor((viewport.value?.scrollTop || 0) / itemSize)
}
</script>

<style lang="scss" scoped>
.viewport {
  width: 500px;
  height: 500px;
  overflow: scroll;
}

.v-list-item {
  height: 100px;
  width: 100%;
  background: #fff;
  color: #000;
  line-height: 100px;
  border-bottom: 1px solid #ccc;
}
</style>