'use server'

import Navbar11 from "../navbar";


export default function DashboardLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        <Navbar11 />
        <nav></nav>
   
        {children}
      </section>
    )
  }