import { checkoutRouter } from './checkout'
import * as trpc from '@trpc/server'
import { contactRouter } from './contact'

/* This index.ts, which will return as simply as router, allows for combining both our checkout and contact router functions. See the individual routers for more information about their particular function. */

export const appRouter = trpc.router().merge(checkoutRouter).merge(contactRouter)

export type AppRouter = typeof appRouter
