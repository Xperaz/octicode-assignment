
const Pagination = ({ PostsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / PostsPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
        <div className='flex justify-center gap-6 flex-wrap'>
            {pageNumbers.map((number) => (
                <button key={number + '_page'} onClick={() => paginate(number)} 
                    className={`${number === currentPage ? 'bg-[#ffd01a] border-none' : ''} 
                    border border-white p-2 px-3 hover:bg-[#ffd01a] hover:border-none rounded-md`}
                >
                        {number}
                </button>
            ))
            }
        </div>
  )
}

export default Pagination