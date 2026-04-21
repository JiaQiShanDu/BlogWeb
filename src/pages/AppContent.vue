<script setup>
</script>

<template>
  <div class="page">
    <header class="site-header">
      <nav class="menu">
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/learn">Learn</RouterLink></li>
          <li><RouterLink to="/link">Friend Link</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
        </ul>
      </nav>
    </header>

    <main class="site-main">
      <h1 class="title">ELIOR</h1>
      <p class="description">Record thoughts and share knowledge</p>
    </main>

    <footer class="site-footer">
      <p>© 2026 博客</p>
    </footer>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:global(html),
:global(body),
:global(#app) {
  width: 100%;
  height: 100%;
}

:global(body) {
  background-color: #000000;
  overflow: hidden; /* 禁止整页上下滚动 */
}

.page {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  line-height: 1.5;
}

/* header */
.site-header {
  width: 100%;
  background-color: #000000;
  padding: clamp(16px, 3vw, 28px) clamp(16px, 5vw, 72px);
}

.menu {
  font-size: clamp(16px, 2vw, 25px);
  font-weight: 300;
}

.menu ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: clamp(16px, 5vw, 72px);
}

.menu li {
  display: block;
}

.menu a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.2s ease;
}

.menu a:hover {
  color: #2600ff;
}

/* main */
.site-main {
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #141414;
  text-align: center;
  padding: clamp(20px, 4vw, 48px);
  overflow: hidden;
}

.title {
  color: #ffffff;
  font-size: clamp(40px, 8vw, 90px);
  line-height: 1.1;
  word-break: break-word;
}

.description {
  color: #ffffff;
  font-size: clamp(14px, 2.2vw, 20px);
  max-width: 800px;
  margin-top: 12px;
  padding: 0 8px;
}

/* footer */
.site-footer {
  width: 100%;
  text-align: center;
  background-color: #000000;
  color: #ffffff;
  padding: clamp(12px, 2vw, 20px);
}

/* 小屏优化 */
@media (max-width: 768px) {
  .menu ul {
    gap: 16px 24px;
  }

  .title {
    font-size: clamp(32px, 10vw, 56px);
  }

  .description {
    font-size: 14px;
  }
}
</style>