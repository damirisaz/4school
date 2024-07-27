import React from 'react'
import { useSelector } from 'react-redux'
import {Link, NavLink} from 'react-router-dom'
import { checkIsAuth, logout } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'


export const Navbar = () => {
  const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch()

  const activeStyle = {
    color: '', 
  }

  const logoutHandler = () => {
    dispatch(logout())
    window.localStorage.removeItem('token')
    toast('Вы вышли из системы')
}

  return (
    <React.Fragment>
    <div className='flex w-screen m-0 py-4 justify-between items-center bg-customColor'>
      <a className='justify-center items-center w-100 h-13 text-3sm text-white ml-2'>
        КГУ "ШКОЛА-ЛИЦЕЙ № 4 ОТДЕЛА ОБРАЗОВАНИЯ ГОРОДА РУДНОГО" <br></br> УПРАВЛЕНИЯ ОБРАЗОВАНИЯ АКИМАТА КОСТАНАЙСКОЙ ОБЛАСТИ
      </a>

      { 
        isAuth && (
        <ul className='flex gap-7 ml-0'>
          <li><NavLink to={'/'} href="/" className='text-sm text-white hover:text-gray-500' style={({isActive}) => isActive? activeStyle : undefined}>Главная</NavLink></li>
          <li><NavLink to={'/new'} href="/" className='text-sm text-white hover:text-gray-500' style={({isActive}) => isActive? activeStyle : undefined}>Главная</NavLink></li>
        </ul>
      )
      }

        <div className='flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2 mr-20'>
          {
            isAuth ? <button onClick={logoutHandler}>Выйти</button> : <Link to={'/login'}>Войти</Link>
          }
        </div>
    </div>
    <div>
    <nav>
      <ul className="flex justify-center gap-11 mt-7 space-x-4">
        <li className="group relative">
          <Link className="main text-center text-xl" to="/">Главная</Link>
        </li>
        <li className="group relative">
          <Link className="text-center text-xl" to="#">Школа</Link>
          <ul className="absolute left-0 hidden group-hover:block bg-customColor text-white">
            <li><Link className="block px-5 py-5 hover:text-gray-400" to="#">Школьная форма</Link></li>
            <li><Link className="block px-5 py-5 hover:text-gray-400" to="#">Школьное питание</Link></li>
            <li><Link className="block px-5 py-5 hover:text-gray-400" to="#">Читающая школа</Link></li>
            <li><Link className="block px-5 py-5 hover:text-gray-400" to="#">Устав школы</Link></li>
            <li><Link className="block px-5 py-5 hover:text-gray-400" to="#">Интеллектуальные олимпиады</Link></li>
            <li><Link className="block px-5 py-5 hover:text-gray-400" to="#">Материалы ежегодной самооценки</Link></li>
            <li><Link className="block px-5 py-5 hover:text-gray-400" to="#">Дополнительное образование</Link></li>
            <li><Link className="block px-5 py-5 hover:text-gray-400" to="#">Использование бюджета</Link></li>
          </ul>
        </li>
        <li className="group relative">
          <Link className="text-center text-xl" to="#">Ученикам</Link>
        </li>
        <li className="group relative">
          <Link className="text-center text-xl"  to="#">Учителям</Link>
          <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg">
            <li><Link className="block px-4 py-2 hover:bg-gray-200" to="#">Рекомендации педагогам,<br /> работающим в 1-4 классах</Link></li>
            <li><Link className="block px-4 py-2 hover:bg-gray-200" to="#">Рекомендации педагогам,<br /> работающим в 5-9 классах</Link></li>
            <li><Link className="block px-4 py-2 hover:bg-gray-200" to="#">Рекомендации педагогам,<br /> работающим в 10-11 классах</Link></li>
            <li><Link className="block px-4 py-2 hover:bg-gray-200" to="#">Вакансии</Link></li>
          </ul>
        </li>
        <li className="group relative text-xl">
          <Link className="text-center" to="#">Родителям</Link>
        </li>
        <li className="group relative text-xl">
          <Link className="text-center" to="#">Галерея</Link>
        </li>
      </ul>
    </nav>
  </div>
    </React.Fragment>
  )
}
