import "./menu.scss"

function Menu({ menuOpen, setMenuOpen }) {

  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#intro">home</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#portfolio">portfolio</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#about">about</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#contact">contact</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="https://www.figma.com/proto/6NzkFBYAxdMoMRyMSUjp0N/design-resume?scaling=min-zoom&page-id=0%3A1&node-id=2%3A2">resume</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu