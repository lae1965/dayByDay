import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
// import axios, { AxiosError } from 'axios'
import { loremIpsum } from 'lorem-ipsum'
import type { Message } from '@/interfaces/messageInterfaces'
import { Role } from '@/interfaces/messageInterfaces'

export const useMessagesStore = defineStore('messages', () => {
  const messagesList = reactive([] as Message[])
  const loading = ref(false)
  const setLoading = (isTrue: boolean) => {
    console.log(loading.value)
    loading.value = isTrue
    console.log(loading.value)
  }

  const addMessage = (role: Role, message: string) => {
    messagesList.push({ role, message })
  }

  const fetchMessages = async () => {
    setLoading(true)
    // try {
    // const response = await axios.post(import.meta.env.VITE_ENDPOINT, messagesList)
    // if (!response) throw new AxiosError('Нет ответа от сервера')
    //   addMessage(Role.assistent, response.data)
    // } catch (e) {
    //   console.log((e as AxiosError).message)
    //   throw e
    // }
    // ! Это временно, для проверки ответа
    const responeMessage = loremIpsum()
    setTimeout(() => {
      addMessage(Role.assistent, responeMessage)
      setLoading(false)
    }, 2000)
  }

  return { loading, messagesList, addMessage, fetchMessages }
})
