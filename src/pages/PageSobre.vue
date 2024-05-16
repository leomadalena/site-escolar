<template>
    <q-page class="q-pa-md">
      <div v-for="item in items" :key="item.id">{{ item.content }}</div>
      <q-infinite-scroll
        :handler="loadMore"
        @load="loadMore"
      >
        <div v-if="loading">Carregando...</div>
      </q-infinite-scroll>
      <h1>Sobre</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nobis velit, placeat corporis quibusdam eveniet quasi necessitatibus atque eos corrupti voluptas deserunt magnam a fuga id harum soluta! Accusantium, libero!</p>
    </q-page>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [],
        page: 1,
        limit: 10, // Defina o número de itens por página
        loading: false
      }
    },
    mounted() {
      this.loadMore()
    },
    methods: {
      async loadMore() {
        try {
          this.loading = true
          const nextPageData = await this.loadNextPageData()
          this.items = [...this.items, ...nextPageData]
          this.page++
        } catch (error) {
          console.error('Erro ao carregar dados:', error)
        } finally {
          this.loading = false
        }
      },
      async loadNextPageData() {
        // Faça uma chamada para o backend para obter os dados da próxima página
        const response = await fetch(`/Curriculo`)
        const data = await response.json()
        return data
      }
    }
  }
  </script>
  