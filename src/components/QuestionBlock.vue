<script setup lang="ts">
import { ref } from 'vue';

import { Role } from '@/interfaces/messageInterfaces';
import { useMessagesStore } from '@/stores/messagesStore';
import SpinerBlock from './SpinerBlock.vue';

const question = ref('');
const loading = ref(false);
const { addMessage, fetchMessages } = useMessagesStore();

const handleSubmit = async () => {
  if (!question.value) return;
  loading.value = true;
  addMessage(Role.user, question.value);
  fetchMessages().then(() => {
    question.value = '';
    loading.value = false;
  });
}
</script>

<template>
  <section class="question">
    <SpinerBlock v-if="loading" />
    <form class="question__content" @submit.prevent="handleSubmit" v-else>
      <input type="text" placeholder="Написать сообщение ..." class="question__text" v-model="question" v-focus>
      <button type="submit" class="question__submit">
        <img src="../assets/images/telegram.png" alt="telegram">
      </button>
    </form>
  </section>
</template>

<style scoped>
.question {
  height: 82px;
  border-top: 1px solid #DFE6EC;
}

.question__content {
  display: flex;
  align-items: center;
  gap: 17px;
  padding: 21px 24px;
}

.question__text {
  flex: 1;
  padding: 14px 24px;
  color: #5C6461;
  font-family: Gilroy;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  border-radius: 12px;
  background-color: #F3F6F6;
  outline: none;
  border: none;
}

.question__submit {
  border: none;
  background-color: inherit;
}
</style>