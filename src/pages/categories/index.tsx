import ReactDataGrid from '@inovua/reactdatagrid-community';

import { columnsCategories } from '../../modules/categories/columns';
import { useDataGridCategory } from '../../modules/categories/hooks/useDataGridCategory';
import { HeaderPage } from '../../components/header-page';
import { DeleteConfirm } from '../../components/delete-confirm';
import { useGetCategories } from '../../modules/categories/hooks/useGetCategories';
import { useDeleteCategory } from '../../modules/categories/hooks/useDeleteCategory';

export const Categories = () => {
  const { isOpenModalDelete, gridStyle, openDeleteConfirm, editRegister } = useDataGridCategory();
  const { query, dataSource } = useGetCategories();
  const { mutationDelete } = useDeleteCategory();

  return (
    <>
      <DeleteConfirm mutation={mutationDelete} title="Excluir Categoria" show={isOpenModalDelete} />
      <HeaderPage title="Categorias" />
      <ReactDataGrid
        style={gridStyle}
        pagination={'local'}
        pageSizes={[10]}
        limit={10}
        idProperty="id"
        dataSource={dataSource}
        columns={columnsCategories(openDeleteConfirm, editRegister)}
        loading={query.isLoading}
        rowClassName={'RowReactDataGridCustom'}
        theme="default-dark"
      />
    </>
  );
};
