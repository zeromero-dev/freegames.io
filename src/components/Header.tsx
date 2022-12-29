import { AnimatedLogo } from './Logo'
import { Search } from './Search';

import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { DropDownMenu } from './DropDownMenu';
import { NotificationBell } from './NotificationBell';

export const Header = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    // #Mounts the theme 
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <DropDownMenu theme={theme} setTheme={setTheme} />
            </div>
            <div className="navbar-center">
                <Link href='/'>
                    <a className="btn btn-ghost normal-case text-xl">
                        <AnimatedLogo />
                    </a>
                </Link>
            </div>
            <div className="navbar-end">
                <div className="form-control">
                    <Search />
                </div>
                <NotificationBell />
            </div>
        </div>
    )
}

