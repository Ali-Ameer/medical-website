import { useEffect, useState } from 'react'
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"
export const DarkMode = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    darkMode ? setTheme("dark") : setTheme("light")
  }
  useEffect(() => {
    if (theme === "dark") {
      document.getElementById('root').classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
    else {
      document.getElementById('root').classList.remove("dark");
      localStorage.setItem("theme", "light")
    }
  },[darkMode, theme])

  return (
    <div className='flex w-fit hover:cursor-pointer transition' onClick={() => toggleTheme()}>
        {darkMode ?
        <MdOutlineLightMode className='text-2xl text-Blue'/>
        :
        <MdOutlineDarkMode className='text-2xl text-Blue'/>
        }
    </div>
  )
}
