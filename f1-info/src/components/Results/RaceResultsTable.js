import React from 'react';
import { useTable,usePagination,useGlobalFilter,useFilters,useSortBy } from 'react-table';
import "../../styles/race.css";
import "../../App.css"

// function GlobalFilter({
//     preGlobalFilteredRows,
//     globalFilter,
//     setGlobalFilter,
//   }) {
//     const count = preGlobalFilteredRows.length
//     const [value, setValue] = React.useState(globalFilter)
//     const onChange = useAsyncDebounce(value => {
//       setGlobalFilter(value || undefined)
//     }, 200)
//     return (
//     <>
//         <form className="form-search-races">
//             <input
//                 className="input-filter-races"
//                 value={value || ""}
//                 onChange={e => {
//                     setValue(e.target.value);
//                     onChange(e.target.value);
//                 }}
//                 required
//             />
//             <label className="label-filter-races">
//                 <span className="text-filter-races">
//                     <b>Search</b>
//                 </span>
//             </label>
//         </form>
//     </>
//     )
//   }

function RaceResultsTable({columns,data}) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        // rows,
        prepareRow,
        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page
        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize},
        // preGlobalFilteredRows,
        // setGlobalFilter,
        // state,
    } = useTable(
        {
            columns,
            data,
            initialState: {
                pageIndex:0,
                sortBy:[
                    {
                        id:"positionOrder",
                        asc:true,
                    }
                ]
            },
        },
        useGlobalFilter,
        useFilters,
        useSortBy,
        usePagination,
    )


    return (
        <>
            {/* <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
            /> */}
            <table className="table table-striped table-responsive" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {
                                        column.render('Header')
                                    }
                                    <span>
                                        {column.isSorted
                                        ? column.isSortedDesc
                                            ? ' ????'
                                            : ' ????'
                                        : ''}
                                    </span>
                                </th>
                                ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="pagination justify-content-center">
                <button className="button-race-list-pagination-left" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    <b>{'<<'}</b>
                </button>
                <button className="button-race-list-pagination-left" onClick={() => previousPage()} disabled={!canPreviousPage}>
                    <b>{'<'}</b>
                </button>
                <button className="button-race-list-pagination-right" onClick={() => nextPage()} disabled={!canNextPage}>
                    <b>{'>'}</b>
                </button>
                <button className="button-race-list-pagination-right" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    <b>{'>>'}</b>
                </button>
                <span className="page-index">
                    Page{' '}
                    <strong>
                    {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span className="page-index">
                    | Go to page:{' '}
                    <input
                    className="input-to-page"
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(page)
                    }}
                    style={{ width: '100px' }}
                    />
                </span>{' '}
                <select
                    className="show-data-select"
                    value={pageSize}
                    onChange={e => {
                    setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}
export default RaceResultsTable;