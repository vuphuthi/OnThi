import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
export interface Iproduct {
    id: string | number,
    name: string
    price: number
}
export interface AuthSignup {
    email: string;
    password: string;
    name: string;
    confirmPassword: string
}
export interface AuthSignin {
    email: string;
    password: string;
}
const productApi = createApi({
    reducerPath: "product",
    tagTypes: ['Product'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<Iproduct[], void>({
            query: () => '/products',
            providesTags: ['Product']
        }),
        getProductByid: builder.query<Iproduct, number | string>({
            query: (id) => `/products/${id}`,
            providesTags: ['Product']
        }),
        removeProduct: builder.mutation<void, number | string>({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Product']
        }),
        addProduct: builder.mutation<Iproduct, Iproduct>({
            query: (product) => ({
                url: `/products`,
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['Product']

        }),
        updateProduct: builder.mutation<Iproduct, Iproduct>({
            query: (product) => ({
                url: `/products/${product.id}`,
                method: 'PATCH',
                body: product
            }),
            invalidatesTags: ['Product']
        }),
        signup: builder.mutation<{ message: string, accessToken: string, user: {} }, AuthSignup>({
            query: (user) => ({
                url: '/signup',
                method: 'POST',
                body: user,
            }),
        }),
        signin: builder.mutation<{ message: string, accessToken: string, user: {} }, AuthSignin>({
            query: (user) => ({
                url: '/signin',
                method: 'POST',
                body: user,
            }),
        }),
    })
})
export const {
    useGetProductsQuery,
    useRemoveProductMutation,
    useGetProductByidQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useSignupMutation,
    useSigninMutation
} = productApi
export const productReducer = productApi.reducer
export default productApi