import logo from '../../assets/img/foodLogo.png'
import styles from '../../components/Header.module.css'
import CartButton from '../../components/layout/CartButton.js'


const Header = ({ onToggle }) => {
  return (
    <header className = {styles.header}>
        <nav className={styles['nav-items']}>
            <img src={logo} alt="refresh call" style={{ width: '200px', height: '150px' }}/>
            <CartButton onClick={onToggle}/>
        </nav>
        <div className={styles.content}>
            <h2>Choose some <span className={styles['text-color']}>delicious</span> food from our selection</h2>
            <p>Commodo est duis ullamco veniam nulla nostrud Lorem anim enim cillum dolore id. Aute sint labore sit sit labore in magna aliqua exercitation minim. Laborum velit duis sunt nisi consequat nostrud quis qui dolore. Tempor esse ut ullamco mollit aliquip. Eu anim anim culpa laboris laborum do irure commodo. Excepteur eu ad velit amet nostrud cupidatat non cupidatat veniam deserunt laboris nulla. Voluptate ut aliqua aute laborum ut aliqua minim labore cillum.</p>
        </div>
    </header>
  )
}

export default Header