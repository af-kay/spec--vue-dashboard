<template>
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot name="main"></slot>
  </main>
</template>

<style scoped lang="scss">
  header, main {
    max-width: 1024px;
    margin: 0 auto;
  }
</style>
