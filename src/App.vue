<script setup lang="ts">
import { ref } from 'vue';
import QuestionBlock from './components/QuestionBlock.vue';
import MessageList from './components/MessageList.vue';

const isOpenGPT = ref(false);
</script>

<template>
  <main>
    <img src="./assets/images/To-GPT.png" alt="GPT" class="gpt" @click="isOpenGPT = true">
    <div class="dialog-box" :class="{ 'dialog-box__active': isOpenGPT }">
      <header class="dialog-box__header">
        <img src="./assets/images/exit.svg" alt="exit" class="dialog-box__exit" @click="isOpenGPT = false">
        <div class="header__description">
          <img src="./assets/images/logo.png" alt="logo">
          <p class="header__text">Ассистент по поиску локаций и маршрутов</p>
        </div>
      </header>
      <MessageList />
      <QuestionBlock />
    </div>
  </main>
</template>

<style scoped>
.gpt {
  width: 79px;
  height: 79px;
  position: fixed;
  bottom: 50px;
  right: 50px;
}

.dialog-box {
  width: 375px;
  height: 557px;
  border-radius: 16px;
  background: #FDFDFD;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15);
  position: fixed;
  bottom: -610px;
  right: 50px;
  transition: bottom 0.7s;
  display: flex;
  flex-direction: column;
}

.dialog-box__active {
  bottom: 35px;
}

.dialog-box__header {
  height: 80px;
  background-color: #eaeaea;
  padding: 7px 6px 14px 19px;
  border-radius: 16px 16px 0 0;
}

.dialog-box__exit {
  display: block;
  margin-left: auto;
}

.header__description {
  display: flex;
  align-items: center;
  margin-top: -12px;
  gap: 10px;
}

.header__text {
  color: #000E08;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Circe;
  font-size: 15px;
  font-weight: bold;
  line-height: 16px;
  width: 80%;
}
</style>
