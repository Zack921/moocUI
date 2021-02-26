<template>
  <div id="app">
    <Demo/>
    <m-card
      imgSrc="c.png"
      summary="C语言系统化精讲  重塑你的编程思想 打造坚实的开发基础" 
    />
    <br>
    <m-card
      imgSrc="c.png"
      summary="C语言系统化精讲  重塑你的编程思想 打造坚实的开发基础" 
    >
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 · 528人报名</div>
          <div class="price">￥299.00</div>
        </div>
      </template>
    </m-card>
    <br>
    <m-card
      imgSrc="c.png"
    >
      C语言系统化精讲  重塑你的编程思想 打造坚实的开发基础
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 · 528人报名</div>
          <div class="price">￥299.00</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199A1;
  margin-bottom: 8px;
}

.price {
  color: #F01414;
}
</style>
