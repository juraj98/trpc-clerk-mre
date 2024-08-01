import "./globals.css";
import { TRPCReactProvider } from "../trpc/react";
import { ClerkProvider, UserButton } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <TRPCReactProvider>
            <header className="p-4 bg-stone-300">
              <UserButton />
            </header>
            <main className="p-4">{children}</main>
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
