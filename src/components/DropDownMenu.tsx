type ThemeProps = {
    theme: string | undefined,
    setTheme: (theme: string) => void,
}

export const DropDownMenu = ({ theme, setTheme }: ThemeProps) => {
    return (
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-44">
                <li><div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Change Theme </span>
                        <input type="checkbox" defaultChecked={false} className="toggle toggle-primary" onClick={
                            () => theme === 'dark' ? setTheme('lofi') : setTheme('dark')} />
                    </label>
                </div></li>
                <li><a href="https://github.com/zeromero-dev/freegames.io">About</a></li>
            </ul>
        </div>
    )
}
