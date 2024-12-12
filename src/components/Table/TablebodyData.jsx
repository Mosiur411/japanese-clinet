const TablebodyData = ({ text, className, scope }) => {
    return (
        <td scope={scope} className={`${className ? className : "px-6 py-4 "}`}>{text}</td>
    )
}
export default TablebodyData