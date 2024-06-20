import ReactDataGrid from '@inovua/reactdatagrid-community';

import { HeaderPage } from '../../components/header-page';
import { columnsClasses } from '../../modules/classes/columns';
import { useDataGridClasses } from '../../modules/classes/hooks/useDataGridClasses';

export const Groups = () => {
  const { query, dataSource, gridStyle } = useDataGridClasses();

  return (
    <>
      <HeaderPage title="Turmas" />
      <ReactDataGrid
        style={gridStyle}
        pagination={'local'}
        pageSizes={[10]}
        limit={10}
        idProperty="id"
        dataSource={dataSource}
        columns={columnsClasses}
        loading={query.isLoading}
        rowClassName={'RowReactDataGridCustom'}
        theme="default-dark"
      />
    </>
  );
};
