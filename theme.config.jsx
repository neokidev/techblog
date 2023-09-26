/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const themeConfig = {
  logo:  () => {
    const title = "ot07's Tech Blog";
    return (
      <span
        className="mx-2 font-extrabold hidden md:inline select-none"
        title={title}
      >
        {title}
      </span>
    );
  },
  editLink: false,
  feedback: false,
  footer: false,
  gitTimestamp: false,
  nextThemes: {
    forcedTheme: 'light',
  },
  project: {
    link: "https://github.com/ot07",
  }
}

export default themeConfig
