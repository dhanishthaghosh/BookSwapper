import React, { useState } from 'react'
import './Search.css'

const Search = ({ history }) => {
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/books')
        }
    }

    return (
        <>
            <div className='input-wrapper'>
                <form onSubmit={submitHandler}>
                    <input type='text' value={keyword} onChange={e => setKeyword(e.target.value)} placeholder='Type book name here' className='book-name-input'></input>
                    <button type='submit' className=' search-icon'><i className="fas fa-search"></i></button>
                    {/* <input type='submit' value='Search' className='submit-button'></input> */}
                </form>
            </div>
        </>
    )
}

export default Search
