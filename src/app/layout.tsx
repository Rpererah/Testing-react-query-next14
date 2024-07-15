import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQueryProvider from "./utils/react-query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HomePage - ReactQuery w/ next14",
  description: "A app for training instalation react query w/ next14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
