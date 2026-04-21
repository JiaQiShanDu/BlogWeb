<script setup>
import { ref } from 'vue'

const rawHtml = ref('')  // 用于存储 HTML 字符串

async function getData() {
  try {
    const response = await fetch("/api/data/blog")
    const data = await response.json()
    console.log(data)
    // 假设 data 结构为 { "CTFqqqqqq.md": "<p>CTF...</p>" }
    // 提取 HTML 字符串
    const htmlContent = data["CTFqqqqqq.md"] || ''
    rawHtml.value = htmlContent
    return htmlContent
  } catch (error) {
    console.error("请求失败:", error)
    //异常处理
  }
}

getData()
</script>

<template>
  <p>Learn</p>
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
</template>