<template>
  <section class="simple-page">
    <h1>About</h1>
    <p>
      ELIOR 的个人博客。她很懒，还没写关于自己的介绍。
    </p>
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

.simple-page p {
  max-width: 760px;
  margin: 18px 0 0;
  color: #ffffff;
  font-size: clamp(15px, 2vw, 20px);
  line-height: 1.8;
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

  .simple-page p {
    font-size: 14px;
    line-height: 1.75;
  }
}
</style>
