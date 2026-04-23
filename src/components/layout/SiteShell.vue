<template>
  <div class="site-shell">
    <header class="site-header">
      <nav class="menu" aria-label="Main navigation">
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/learn">Learn</RouterLink></li>
          <li><RouterLink to="/link">Friend Link</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
        </ul>
      </nav>
    </header>

    <main class="site-main">
      <slot />
    </main>

    <footer class="site-footer">
      <p>© 2026 博客</p>
    </footer>
  </div>
</template>

<style scoped>
.site-shell {
  --site-header-height: clamp(58px, 7vw, 86px);
  --site-footer-height: 30px;

  min-height: 100vh;
  min-height: 100dvh;
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  padding-top: var(--site-header-height);
  padding-bottom: var(--site-footer-height);
  background: #141414;
  color: #ffffff;
  line-height: 1.5;
}

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: var(--site-header-height);
  display: flex;
  align-items: center;
  background-color: #000000;
  padding: 0 clamp(16px, 5vw, 72px);
}

.menu {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  font-size: clamp(16px, 2vw, 25px);
  font-weight: 300;
  scrollbar-width: none;
}

.menu::-webkit-scrollbar {
  display: none;
}

.menu ul {
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: clamp(16px, 5vw, 72px);
  margin: 0;
  padding: 0;
}

.menu li {
  display: block;
  flex: 0 0 auto;
}

.menu a {
  display: inline-block;
  color: #ffffff;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s ease;
}

.menu a:hover,
.menu a.router-link-active {
  color: #2600ff;
}

.site-main {
  width: 100%;
  min-width: 0;
  min-height: 0;
  display: flex;
  background-color: #141414;
}

.site-footer {
  /* 你不要页脚固定的话就把这个注释下面的代码删掉 fixed/bottom/left/z-index/height。 */
  position: fixed;

  /* 这里 */
  bottom: 0; 
  left: 0;
  z-index: 50;
  height: var(--site-footer-height); 
  
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #000000;
  color: #ffffff;
  padding: 0 16px;
  font-size: 12px;
}

.site-footer p {
  margin: 0;
}

@media (max-width: 768px) {
  .site-shell {
    --site-header-height: 56px;
  }

  .site-header {
    padding: 0 16px;
  }

  .menu ul {
    gap: 24px;
  }
}

@media (max-width: 480px) {
  .site-shell {
    --site-header-height: 52px;
    --site-footer-height: 28px;
  }

  .site-header {
    padding: 0 14px;
  }

  .menu {
    font-size: 16px;
  }

  .menu ul {
    gap: 20px;
  }

  .site-footer {
    padding: 0 12px;
    font-size: 11px;
  }
}
</style>
