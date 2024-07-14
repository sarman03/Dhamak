'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

import Image from 'next/image'
import logo from './logo.png'

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className="flex flex-row items-center justify-between p-3 ">
            <div className="flex flex-col items-center pl-7">
                <div style={{ width: '100px', marginTop: '15px' }}>
                    <Image src={logo} alt="Logo" className="navbar-logo" />
                </div>
                <div className="text-2xl font-bold text-gray-800 ">DHAMAK</div>
            </div>

{/*Logo yha khtm hua hai*/}
            
            <div className={cn("flex flex-row items-center content-end space-x-6 ml-", className)}>
                <Menu setActive={setActive}>
                    <Link href={"/"}>
                        <MenuItem setActive={setActive} active={active} item="Home" >
                        </MenuItem>
                    </Link>
                    <MenuItem setActive={setActive} active={active} item="Our Courses">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/courses">All courses</HoveredLink>
                            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                            <HoveredLink href="/courses">Advanced Composition</HoveredLink>
                            <HoveredLink href="/courses">Songwriting</HoveredLink>
                            <HoveredLink href="/courses">Music Production</HoveredLink>
                        </div>
                    </MenuItem>
                    <Link href={'/contact'}>
                        <MenuItem setActive={setActive} active={active} item="Contact Us">
                        </MenuItem>
                    </Link>
                </Menu>
            </div>
        </div>
    );
}

export default Navbar;
