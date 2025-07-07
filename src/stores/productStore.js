import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('products', {
  state: () => ({
    games: [],
    isLoading: false,
    error: null
  }),

  getters: {
    allGames: (state) => state.games
  },
  
  actions: {
    async fetchGames() {
      this.isLoading = true
      this.error = null
      try {
        const response = await axios.get('http://localhost:3000/games')
        this.games = response.data
      } catch (err) {
        this.error = 'Failed to fetch games. Make sure API server is running.'
        console.error(err)
      } finally {
        this.isLoading = false
      }
    }
  }
})