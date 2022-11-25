import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { firebaseAdmin } from '@/libs/firebaseAdmin'

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
        idToken: { label: 'Token', type: 'token' }
      },
      authorize: async (credentials, req) => {
        if (!credentials) {
          return null
        }
        const { idToken } = credentials
        // eslint-disable-next-line no-console
        console.log('req', req, idToken)
        if (idToken !== null) {
          try {
            const decoded = await firebaseAdmin.auth().verifyIdToken(idToken)
            return {
              id: decoded.id,
              name: decoded.name,
              email: decoded.email,
              image: decoded.picture
            }
            // return { ...decoded }
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log('Failed to verify ID token:', error)
          }
        }
        return null
      },
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.JWT_SECRET,
  pages: { signIn: '/login', },
  callbacks: {
    jwt: async ({ token }) => {
      return token
    },
    session({ session }) {
      return session
    }
  }
})
