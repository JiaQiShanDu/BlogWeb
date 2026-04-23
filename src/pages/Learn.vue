<script setup>
import { computed, onMounted, ref } from 'vue'

const articles = ref([])
const activeSlug = ref('')
const isLoading = ref(false)
const errorMessage = ref('')

const activeArticle = computed(() => {
  return articles.value.find((article) => article.slug === activeSlug.value) || articles.value[0]
})

function getArticleTitle(fileName) {
  return fileName.replace(/\.md$/i, '').replace(/[-_]+/g, ' ')
}

function normalizeArticles(data) {
  if (!data || typeof data !== 'object') return []

  return Object.entries(data).map(([fileName, html], index) => ({
    id: index + 1,
    slug: encodeURIComponent(fileName),
    fileName,
    title: getArticleTitle(fileName),
    html: String(html || ''),
  }))
}

async function getData() {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await fetch('/api/data/blog')

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`)
    }

    const data = await response.json()
    const nextArticles = normalizeArticles(data)
    articles.value = nextArticles
    activeSlug.value = nextArticles[0]?.slug || ''
  } catch (error) {
    console.error('Failed to load blog articles:', error)
    errorMessage.value = '文章加载失败，请确认本地 API 服务是否已启动。'
  } finally {
    isLoading.value = false
  }
}

onMounted(getData)
</script>

<template>
  <section class="learn-page">
    <div class="learn-title">
      <h1>Learn</h1>
      <button type="button" class="refresh-button" @click="getData">
        {{ isLoading ? 'Loading...' : 'Refresh' }}
      </button>
    </div>

    <div class="learn-layout">
      <aside class="article-sidebar">
        <div class="sidebar-header">
          <p>Articles</p>
          <span>{{ articles.length }} notes</span>
        </div>

        <div class="article-list">
          <p v-if="isLoading" class="empty-text">Loading articles...</p>
          <p v-else-if="!articles.length" class="empty-text">No articles yet.</p>

          <button
            v-for="article in articles"
            v-else
            :key="article.slug"
            type="button"
            class="article-link"
            :class="{ active: activeSlug === article.slug }"
            @click="activeSlug = article.slug"
          >
            <span class="article-index">{{ String(article.id).padStart(2, '0') }}</span>
            <span class="article-name">
              <span>{{ article.title }}</span>
              <small>{{ article.fileName }}</small>
            </span>
          </button>
        </div>
      </aside>

      <article class="article-view">
        <header class="article-header">
          <p>Current Note</p>
          <h2>{{ activeArticle?.title || 'Waiting for articles' }}</h2>
        </header>

        <div v-if="errorMessage" class="article-empty">
          {{ errorMessage }}
        </div>

        <div
          v-else-if="activeArticle?.html"
          class="article-content"
          v-html="activeArticle.html"
        />

        <div v-else class="article-empty">
          文章内容会显示在这里。
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.learn-page {
  width: 100%;
  min-height: 100%;
  flex: 1;
  background-color: #141414;
  color: #ffffff;
  padding: clamp(24px, 4vw, 56px) clamp(16px, 5vw, 72px);
}

.learn-title {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 28px;
}

.learn-title h1 {
  margin: 0;
  font-size: clamp(38px, 7vw, 76px);
  line-height: 1.1;
}

.refresh-button {
  flex: 0 0 auto;
  border: 1px solid #ffffff;
  background: transparent;
  color: #ffffff;
  padding: 9px 18px;
  cursor: pointer;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;
}

.refresh-button:hover {
  color: #2600ff;
  border-color: #2600ff;
}

.learn-layout {
  display: grid;
  grid-template-columns: minmax(220px, 280px) minmax(0, 1fr);
  gap: clamp(20px, 4vw, 48px);
  align-items: start;
}

.article-sidebar {
  position: sticky;
  top: calc(var(--site-header-height, 72px) + 24px);
  min-width: 0;
  border: 1px solid #2a2a2a;
  background-color: #000000;
}

.sidebar-header {
  border-bottom: 1px solid #2a2a2a;
  padding: 16px;
}

.sidebar-header p {
  margin: 0;
  font-size: 18px;
}

.sidebar-header span {
  display: block;
  margin-top: 4px;
  color: #a5a5a5;
  font-size: 13px;
}

.article-list {
  max-height: 58vh;
  max-height: 58dvh;
  overflow-y: auto;
  padding: 8px;
}

.article-link {
  width: 100%;
  display: flex;
  gap: 12px;
  border: 0;
  background: transparent;
  color: #ffffff;
  text-align: left;
  padding: 12px 10px;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.article-link:hover,
.article-link.active {
  background-color: #141414;
  color: #2600ff;
}

.article-index {
  color: #777777;
  font-size: 13px;
  line-height: 1.5;
}

.article-name {
  min-width: 0;
  display: grid;
  gap: 3px;
}

.article-name span,
.article-name small {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.article-name small {
  color: #a5a5a5;
}

.empty-text,
.article-empty {
  margin: 0;
  color: #a5a5a5;
}

.empty-text {
  padding: 12px 10px;
}

.article-view {
  min-width: 0;
  overflow: hidden;
  border: 1px solid #2a2a2a;
  background-color: #101010;
}

.article-header {
  border-bottom: 1px solid #2a2a2a;
  padding: clamp(18px, 3vw, 28px);
}

.article-header p {
  margin: 0 0 8px;
  color: #a5a5a5;
}

.article-header h2 {
  margin: 0;
  font-size: clamp(26px, 4vw, 44px);
  line-height: 1.15;
  overflow-wrap: anywhere;
}

.article-content,
.article-empty {
  padding: clamp(18px, 3vw, 32px);
}

.article-content {
  color: #ffffff;
  line-height: 1.8;
  overflow-wrap: anywhere;
}

.article-content :deep(h1),
.article-content :deep(h2),
.article-content :deep(h3) {
  margin: 1.5em 0 0.65em;
  color: #ffffff;
  line-height: 1.2;
}

.article-content :deep(h1) {
  font-size: clamp(30px, 5vw, 54px);
}

.article-content :deep(h2) {
  font-size: clamp(24px, 3vw, 36px);
}

.article-content :deep(p),
.article-content :deep(ul),
.article-content :deep(ol),
.article-content :deep(pre),
.article-content :deep(blockquote) {
  margin: 1rem 0;
}

.article-content :deep(a) {
  color: #2600ff;
}

.article-content :deep(pre) {
  overflow-x: auto;
  background-color: #000000;
  border: 1px solid #2a2a2a;
  padding: 16px;
}

.article-content :deep(code) {
  background-color: #000000;
  padding: 2px 5px;
}

.article-content :deep(img) {
  max-width: 100%;
  height: auto;
}

@media (max-width: 1100px) {
  .learn-layout {
    grid-template-columns: minmax(200px, 240px) minmax(0, 1fr);
  }
}

@media (max-width: 900px) {
  .learn-page {
    padding: 32px 18px;
  }

  .learn-title {
    align-items: flex-start;
    flex-direction: column;
  }

  .learn-layout {
    grid-template-columns: 1fr;
  }

  .article-sidebar {
    position: static;
  }

  .article-list {
    max-height: 280px;
  }
}

@media (max-width: 640px) {
  .learn-page {
    padding: 28px 14px;
  }

  .learn-title {
    gap: 14px;
    margin-bottom: 20px;
  }

  .learn-title h1 {
    font-size: clamp(34px, 14vw, 54px);
  }

  .refresh-button {
    width: 100%;
    padding: 10px 14px;
  }

  .learn-layout {
    gap: 18px;
  }

  .sidebar-header {
    padding: 13px 14px;
  }

  .article-list {
    max-height: 220px;
    padding: 6px;
  }

  .article-link {
    gap: 10px;
    padding: 10px 8px;
  }

  .article-header,
  .article-content,
  .article-empty {
    padding: 16px;
  }

  .article-header h2 {
    font-size: clamp(22px, 8vw, 32px);
  }

  .article-content {
    font-size: 14px;
  }

  .article-content :deep(pre) {
    margin-left: -8px;
    margin-right: -8px;
    border-left: 0;
    border-right: 0;
    padding: 14px;
  }
}

@media (max-width: 380px) {
  .article-index {
    display: none;
  }
}
</style>
