import { ref, toValue } from 'vue/dist/vue.mjs'
const useFetch = (url: string) => {
  const data = ref<[]>([])
  const error = ref(null)

  // toValue() esegue l'estrazione di potenziali ref o getter
  fetch(toValue(url))
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))

  return { data, error }
}

export default useFetch
