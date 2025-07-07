import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useProductStore } from './productStore'
import axios from 'axios'

// Mock library axios
vi.mock('axios')

describe('Product Store', () => {
  beforeEach(() => {
    // Membuat instance pinia baru yang bersih untuk setiap test
    // Ini memastikan test tidak saling mempengaruhi
    setActivePinia(createPinia())
  })

  it('initializes with correct default values', () => {
    const store = useProductStore()
    expect(store.games).toEqual([])
    expect(store.isLoading).toBe(false)
    expect(store.error).toBe(null)
  })

  it('fetches games using axios and updates state on success', async () => {
    const store = useProductStore()
    const mockGames = [
      { id: 1, title: 'Test Game 1' },
      { id: 2, title: 'Test Game 2' }
    ]
    
    // Mengatur agar `axios.get` mengembalikan data mock kita
    axios.get.mockResolvedValue({ data: mockGames })

    // Memanggil action `fetchGames`
    await store.fetchGames()

    // Memastikan state sudah terupdate dengan benar
    expect(store.isLoading).toBe(false)
    expect(store.games.length).toBe(2)
    expect(store.games[0].title).toBe('Test Game 1')
    expect(store.error).toBe(null)
  })

  it('handles API error correctly', async () => {
    const store = useProductStore()
    
    // Mengatur agar `axios.get` mengembalikan error
    axios.get.mockRejectedValue(new Error('Network Error'))

    await store.fetchGames()

    // Memastikan state error terisi dan data tetap kosong
    expect(store.isLoading).toBe(false)
    expect(store.games.length).toBe(0)
    expect(store.error).not.toBe(null)
    expect(store.error).toContain('Failed to fetch games')
  })
})