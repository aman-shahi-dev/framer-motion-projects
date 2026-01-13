import {Link} from 'react-router-dom'

function Navbar(){
    return (
        <div className="h-16 px-4 border-b-1 flex items-center gap-4 overflow-x-auto">
            {/* Home */}
            <Link
                className='px-3 py-1 border border-white rounded hover:bg-gray-400'
                to='/'
            >
                Home
            </Link>

            {/* Project 1 */}
            <Link
                className='px-3 py-1 border border-white rounded hover:bg-gray-400 whitespace-nowrap'
                to='/project-1'
            >
                Project-1
            </Link>
            {/* Project 2 */}
            <Link
                className='px-3 py-1 border border-white rounded hover:bg-gray-400 whitespace-nowrap'
                to='/project-2'
            >
                Project-2
            </Link>
            {/* Project 3 */}
            <Link
                className='px-3 py-1 border border-white rounded hover:bg-gray-400 whitespace-nowrap'
                to='/project-3'
            >
                Project-3
            </Link>
            {/* Project 4 */}
            <Link
                className='px-3 py-1 border border-white rounded hover:bg-gray-400 whitespace-nowrap'
                to='/project-4'
            >
                Project-4
            </Link>
            {/* Project 5 */}
            <Link
                className='px-3 py-1 border border-white rounded hover:bg-gray-400 whitespace-nowrap'
                to='/project-5'
            >
                Project-5
            </Link>
        </div>
    )
}

export default Navbar;