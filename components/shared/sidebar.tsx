"use client";

import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"


const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="sidebar">
            <div className="flex size-full flex-col gap-4">
                <Link href="/" className="sidebar-logo">
                    <p className="text-4xl text-center font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-900 bg-clip-text text-transparent">
                        Glipmse AI
                    </p>
                </Link>
                <Separator />
                <nav className="sidebar-nav">
                    <SignedIn>
                        <ul className="sidbar-nav_elements">
                            {navLinks.slice(0, 6).map((link) => {
                                const isActive = link.route === pathname
                                return (
                                    <li key={link.route} className={`sidebar-nav_element group ${isActive ? "bg-purple-gradient text-white" : "text-gray-700"}`}>
                                        <Link className="sidebar-link" href={link.route}>
                                            <Image 
                                                src={link.icon}
                                                alt="logo"
                                                width={24}
                                                height={24}
                                                className={`${isActive && "brightness-200"}`}
                                            />
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })}
                            <Separator />
                        </ul>
                       
                        <ul className="sidebar-nav_elements">
                            <Separator />
                            {navLinks.slice(6).map((link) => {
                                const isActive = link.route === pathname
                                return (
                                    
                                    <li key={link.route} className={`sidebar-nav_element group ${isActive ? "bg-purple-gradient text-white" : "text-gray-700"}`}>
                                        
                                        <Link className="sidebar-link" href={link.route}>
                                            <Image 
                                                src={link.icon}
                                                alt="logo"
                                                width={24}
                                                height={24}
                                                className={`${isActive && "brightness-200"}`}
                                            />
                                            {link.label}
                                        </Link>
                                    </li>
                                    
                                )
                            })}
                            <li className="flex-left cursor-pointer gap-2 p-4">
                                <UserButton afterSignOutUrl="/" showName/>  
                            </li>
                            
                        </ul>
                    </SignedIn>
                    <SignedOut>
                        <Button asChild className="button bg-purple-gradient bg-cover">
                            <Link href="/sign-in">
                                Sign In
                            </Link>
                        </Button>
                    </SignedOut>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar