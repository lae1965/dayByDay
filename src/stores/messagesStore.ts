import { reactive } from 'vue'
import { defineStore } from 'pinia'
import axios, { AxiosError } from 'axios'
// import { loremIpsum } from 'lorem-ipsum'
import type { Message } from '@/interfaces/messageInterfaces'
import { Role } from '@/interfaces/messageInterfaces'

export const useMessagesStore = defineStore('messages', () => {
  const messagesList = reactive([] as Message[])

  const addMessage = (role: Role, message: string) => {
    messagesList.push({ role, message })
  }

  const fetchMessages = async () => {
    try {
      const response = await axios.post(import.meta.env.VITE_ENDPOINT, messagesList)
      if (!response) throw new AxiosError('Нет ответа от сервера')
      addMessage(Role.assistant, response.data)
    } catch (e) {
      console.log((e as AxiosError).message)
      throw e
    }
  }

  return { messagesList, addMessage, fetchMessages }
})
