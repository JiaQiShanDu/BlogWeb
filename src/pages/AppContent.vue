<template>
  <section class="home-page">
    <div class="home-center">
      <h1 class="title">ELIOR</h1>
      <p class="description">Record thoughts and share knowledge</p>
    </div>
  </section>
</template>

<style scoped>
.home-page {
  width: 100%;
  min-height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #141414;
  text-align: center;
  padding: clamp(28px, 4vw, 48px);
}

.home-center {
  width: 100%;
  max-width: 1100px;
}

.title {
  margin: 0;
  color: #ffffff;
  font-size: clamp(40px, 8vw, 90px);
  line-height: 1.1;
  word-break: break-word;
}

.description {
  max-width: 800px;
  margin: 12px auto 0;
  padding: 0 8px;
  color: #ffffff;
  font-size: clamp(14px, 2.2vw, 20px);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .home-page {
    padding: 36px 18px;
  }

  .title {
    font-size: clamp(32px, 10vw, 56px);
  }

  .description {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .home-page {
    padding: 28px 14px;
  }

  .title {
    font-size: clamp(34px, 15vw, 52px);
  }

  .description {
    max-width: 18rem;
    font-size: 13px;
  }
}
</style>
