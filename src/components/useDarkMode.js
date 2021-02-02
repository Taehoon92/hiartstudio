import { useEffect, useState } from 'react';
/*
export const useDarkMode = () => {
    const [theme, setTheme] = useState(null)

    const toggleTheme = useCallback(
        () => {
        const nextTheme =
            theme === themeNames.LIGHT ? themeNames.DARK : themeNames.LIGHT

        setTheme(nextTheme)
        window.__setPreferredTheme(nextTheme)
        },
        [theme]
    )
    useEffect(() => {
            // 클라이언트에서는 window.__theme 값으로 테마를 설정한다
        if (typeof window === 'object') {
        setTheme(window.__theme)
        }
            // 테마 변경 시점에 실행할 로직을 추가한다. 
            // __setPreferredTheme은 변경할 수 없으므로 여기에 React에서 사용할 수 있는 로직을 추가한다.
        window.__onThemeChange = newTheme => {
        setTheme(newTheme)
        }
    }, [])

    return { theme, toggleTheme }
}
  */
/*
export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);
  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setTheme('light')
      window.localStorage.setItem('theme', 'light')
    }
    setComponentMounted(true);
  }, []);
  
  return [theme, toggleTheme, componentMounted]
};
*/