import { AuthSignin, AuthSignup } from '@/interfaces/auth';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const authApi = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
    }),
    endpoints: (builder) => ({
        signup: builder.mutation<{ message: string, accessToken: string, user: {} }, AuthSignup>({
            query: (credentials) => ({
                url: '/auth/signup',
                method: 'POST',
                body: credentials,
            }),
        }),
        signin: builder.mutation<{ message: string, accessToken: string, user: {} }, AuthSignin>({
            query: (credentials) => ({
                url: '/auth/signin',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

export const { useSignupMutation, useSigninMutation } = authApi;

export default authApi;
