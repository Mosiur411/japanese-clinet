const TableheadData = ({ text, className, scope }) => {
    return (

        <th scope={scope?scope:'col'} className={`${className ? className : 'px-6 py-3'} `}>
            {text}
        </th>
    )
}
export default TableheadData
