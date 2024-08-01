To reproduce the TRPC issue, just open the app. Inside terminal you'll see that the server request fails. Upon refresh, the data loads client side, but server request fails again.

To reproduce Clerk's `auth()` function returning empty `AuthObject`:

1. Comment out `if (!isPublicRoute(req)) auth().protect();` line in `middleware.ts`
2. Add `console.log(ctx.auth)` to the fist line of `isAuthorized` function in `trpc/api/trpc.ts`.
