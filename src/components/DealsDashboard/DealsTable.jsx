import './DealsTable.css';

export const DealsTable = ({ data, isLoading , handleClick, sortAsc }) => {

    return (
        <>
            {
                isLoading ? <p>Loading deals...</p> :
                    <>
                        <button onClick={handleClick}>sort {sortAsc ? 'A -> Z' : 'Z -> A'}</button>
                        <table className='deals-table'>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <th>Amount</th>
                                    <th>Stage</th>
                                    <th>Last Updated</th>
                                </tr>
                                {data.map(({ id, name, amount, stage, lastUpdated }) => {
                                    return <tr key={id}>
                                        <td>{name}</td>
                                        <td>{amount}</td>
                                        <td>{stage}</td>
                                        <td>{lastUpdated}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </>
            }
        </>
    )
}