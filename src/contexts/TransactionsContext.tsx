import { ReactNode, useEffect, useState, useCallback } from 'react'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
  toggleTheme: () => void
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
  activeTheme: string
  toggleTheme: () => void
}

export const TransactionsContext = createContext({} as TransactionContextType)

interface TransactionProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [activeTheme, setActiveTheme] = useState<string>(
    localStorage.getItem('@dt-money:theme-1.0.0') ?? 'dark',
  )

  // useCallback só permite que uma função seja recriada na memória se algum dos inputs mudar
  // No array de dependências, é colocado qualquer valor que vem de fora da função e que não é um parametro
  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }, [])

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, price, category, type } = data

      const response = await api.post('/transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      })

      setTransactions((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  useEffect(() => {
    if (localStorage.getItem('@dt-money:theme-1.0.0') === null) {
      localStorage.setItem('@dt-money:theme-1.0.0', 'dark')
    }
  }, [])

  function toggleTheme() {
    const chosenTheme = activeTheme === 'dark' ? 'light' : 'dark'
    activeTheme === 'dark'
      ? setActiveTheme(chosenTheme)
      : setActiveTheme(chosenTheme)
    localStorage.setItem('@dt-money:theme-1.0.0', chosenTheme)
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
        activeTheme,
        toggleTheme,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
