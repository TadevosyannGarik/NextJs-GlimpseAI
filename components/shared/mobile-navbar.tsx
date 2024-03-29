"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
  

const MobileNavbar = () => {
    const pathname = usePathname();


    return (
        <header className="header">
            <Link href="/" className="flex items-center gap-2 md:py-2">
                <p className="text-4xl text-center font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-900 bg-clip-text text-transparent">
                    Glipmse AI
                </p>
            </Link>
            <nav className="flex gap-2">
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                    <Sheet>
                        <SheetTrigger>
                            <Image 
                                src="/assets/icons/menu.svg"
                                width={32}
                                height={32}
                                alt="menu"
                                className="cursor-pointer"
                            />
                        </SheetTrigger>
                        <SheetContent className="sheet-content sm:w-64">
                            <>
                                <p className="text-4xl text-center font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-900 bg-clip-text text-transparent">
                                    Glipmse AI
                                </p>
                                <ul className="header-nav_elements">
                                    {navLinks.map((link) => {
                                        const isActive = link.route === pathname
                                        return (
                                            <li className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`} key={link.route}>
                                                <Link className="sidebar-link cursor-pointer" href={link.route}>
                                                    <Image 
                                                        src={link.icon}
                                                        alt="logo"
                                                        width={24}
                                                        height={24}
                                                    />
                                                    {link.label}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </>
                        </SheetContent>
                    </Sheet>
                </SignedIn>
                <SignedOut>
                    <Button asChild className="button bg-purple-gradient bg-cover">
                        <Link href="/sign-in">
                            Sign In
                        </Link>
                    </Button>
                </SignedOut>
            </nav>
        </header>
    )
}

export default MobileNavbar