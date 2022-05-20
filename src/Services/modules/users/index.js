import { api } from '../../api'
import fetchOne from './fetchOne'
import loginRequest from './loginRequest'

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    fetchOne: fetchOne(build),
    loginRequest:loginRequest(build)
  }),
  overrideExisting: false,
})

export const { useLazyFetchOneQuery,useLoginRequestMutation } = userApi
