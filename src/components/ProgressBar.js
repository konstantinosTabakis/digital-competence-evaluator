function ProgressBar({currentPage, lastPage}) {
    return (
        <div>
            <progress min="0" max={lastPage} value={currentPage} /> 
        </div>
    )
}

export default ProgressBar