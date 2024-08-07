// import './globals.css'

// export const metadata = {
//   title: 'Stucruum',
//   description: 'Stucruum, A photoruum project for uploading images to AWS storage',
//   viewport: 'width=device-width, initial-scale=1',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta name="description" content={metadata.description} />
//         <title>{metadata.title}</title>
//       </head>
//       <body>{children}</body>
//     </html>
//   )
// }
"use client";

import "./globals.css";
import { Navs } from "./reusables/Navs";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <body className="relative h-[100vh]">
     {/* <Navs/> */}
        {children}

        <div className="flex flex-row justify-center items-center w-full text-center mx-auto absolute bottom-[1rem]">
          <p className="font-[Kanit] font-[300] text-[12px] text-center leading-[14px]">2024 © PHOTORUUM FACILITY</p>
        </div>
      </body>
    </html>
  );
}
