// import Search from '../Search'
import stylesheet from './style.scss'
import Link from 'next/link'

const Header = () => (
  <nav>
    <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
    <ul>
      <li>
        <Link href={ "/fruit-item?id=1" } as={ "/fruit-item/1" }>
          <a>fruta 1</a>
        </Link>
      </li>
      <li>
        <Link href={ "/fruit-item?id=2" } as={ "/fruit-item/2" }>
          <a>fruta 2</a>
        </Link>
      </li>
      <li>
        <Link href={ "/fruit-item?id=3" } as={ "/fruit-item/3" }>
          <a>fruta 3</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header
