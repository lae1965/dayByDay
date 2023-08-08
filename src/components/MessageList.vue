<script setup lang="ts">
import { onUpdated, ref } from 'vue';
// @ts-ignore
import { nextTick } from 'process';

import { useMessagesStore } from '@/stores/messagesStore';
import { Role } from '@/interfaces/messageInterfaces';

const { messagesList } = useMessagesStore();
const messages = ref(null);

onUpdated(() => {
  nextTick(() => {
    (messages.value as unknown as HTMLElement).lastElementChild?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
  });
});
</script>

<template>
  <section class="messages" ref="messages">
    <div class="messages__item" v-for="(message, i) in messagesList" :key="i">
      <div
        :class="{ 'messages__assistant': (message.role === Role.assistant), 'messages__user': (message.role === Role.user) }">
        {{ message.message }}</div>
    </div>
  </section>
</template>

<style scoped>
.messages {
  flex: 1;
  overflow-y: scroll;
  margin-bottom: 20px;
}

.messages__item {
  padding: 20px 24px 0;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12px;
}

.messages__user {
  max-width: 263px;
  width: fit-content;
  margin-left: auto;
  padding: 12px;
  background-color: #7C934F;
  color: #FFFFFF;
  font-family: Circe;
  line-height: 12px;
  border-radius: 18px;
}

.messages__assistant {
  margin-right: 64px;
  padding: 10px 15px;
  background-color: #F0F4F9;
  color: #000E08;
  font-family: Gilroy;
  line-height: 17.5px;
  border-radius: 12px;
}
</style>