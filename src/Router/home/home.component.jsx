import { Data } from './data';
import CategoriesContainer from '../../components/categories-component/categories.conatiner';
import { Outlet } from 'react-router-dom';

export default function Home() {
  const categories = Data;
  
  return (
    <>
    <CategoriesContainer Categories={categories} />
    <Outlet />
    </>
  )
}