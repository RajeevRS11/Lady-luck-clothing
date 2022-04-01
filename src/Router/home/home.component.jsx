import { Data } from './data';
import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router-dom';

export default function Home() {
  const categories = Data;
  
  return (
    <>
    <Directory Categories={categories} />
    <Outlet />
    </>
  )
}