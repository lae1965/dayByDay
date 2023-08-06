<script setup lang="ts">
import { useMessagesStore } from '@/stores/messagesStore';
import { Role } from '@/interfaces/messageInterfaces';

const { messagesList } = useMessagesStore();
</script>


<template>
  <section class="messages">
    <div class="messages__item" v-for="(message, i) in messagesList" :key="i">
      <div
        :class="{ 'message__assistent': (message.role === Role.assistent), 'message__user': (message.role === Role.user) }">
        {{ message.message }}</div>
    </div>
  </section>
</template>

<style scoped>
.messages {
  flex: 1;
  overflow: auto;
}

.messages__item {
  padding: 20px 24px 0;
}

.message__user {
  margin-left: 64px;
  text-align: right;
  padding: 12px 12px 12px 22px;
  background-color: #7C934F;
  color: #FFFFFF;
  text-align: right;
  font-family: Circe;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0.12px;
  border-radius: 18px;
}

.message__assistent {
  margin-right: 64px;
  text-align: left;
  padding: 10px 15px;
  background-color: #F0F4F9;
  border-radius: 12px;
  color: #000E08;
  font-family: Gilroy;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17.5px;
  letter-spacing: 0.12px;
}
</style>