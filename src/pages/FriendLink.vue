<template>
  <section class="simple-page">
    <h1>Friend Link</h1>

    <div class="link-list">
      <a href="https://blog.curesky.site/" target="_blank" rel="noreferrer">最最最帅气的二月giegie的博客</a>
      <a href="https://github.com/allureluoli" target="_blank" rel="noreferrer">最最最suki的二月酱的github</a>
      <a href="https://club_official_website" target="_blank" rel="noreferrer">G375 CTF TEAM 官网</a>
    </div>
  </section>
</template>

<style scoped>
.simple-page {
  width: 100%;
  min-height: 100%;
  flex: 1;
  background-color: #141414;
  color: #ffffff;
  padding: clamp(24px, 4vw, 56px) clamp(16px, 5vw, 72px);
}

.simple-page h1 {
  margin: 0;
  font-size: clamp(38px, 7vw, 76px);
  line-height: 1.1;
}

.link-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: 14px;
  max-width: 900px;
  margin-top: 28px;
}

.link-list a {
  display: block;
  border: 1px solid #2a2a2a;
  background-color: #000000;
  color: #ffffff;
  padding: 18px 20px;
  text-decoration: none;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;
}

.link-list a:hover {
  color: #2600ff;
  border-color: #2600ff;
}

@media (max-width: 768px) {
  .simple-page {
    padding: 36px 18px;
  }
}

@media (max-width: 480px) {
  .simple-page {
    padding: 28px 14px;
  }

  .simple-page h1 {
    font-size: clamp(34px, 14vw, 54px);
  }

  .link-list {
    gap: 10px;
    margin-top: 22px;
  }

  .link-list a {
    padding: 15px 16px;
  }
}
</style>
