import { applyMiddleware } from 'redux'
import APIMiddleware from './api_middleware'

export default applyMiddleware(
  APIMiddleware
)
