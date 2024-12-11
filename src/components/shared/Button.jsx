const Button = ({ isLoading, text }) => {
    return (
        <button
            type={isLoading ? "submit" : "text"}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >{isLoading ? "Loading....." : text}
        </button>
    )
}
export default Button;