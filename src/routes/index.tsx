import { Routes, Route } from 'react-router-dom';
import { Categories } from '../pages/categories';
import { Dashboard } from '../pages/dashboard';
import { Groups } from '../pages/groups';
import { StudentsCreate } from '../pages/students/create';
import { CategoriesCreate } from '../pages/categories/create';
import { CategoriesEdit } from '../pages/categories/edit';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/create" element={<CategoriesCreate />} />
      <Route path="/categories/edit/:id" element={<CategoriesEdit />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="/students/create" element={<StudentsCreate />} />
    </Routes>
  );
}
