import React from 'react'

export const SearchAddress = ({ onSubmit }) => {
    const handleSubmit = e => {
        e.preventDefault()
        onSubmit(e.target.elements.address.value)
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input className="search-form__input" aria-label="address" name="address" type="text" placeholder="Search for any IP address or domain" />
            <button className="search-form__button" type="submit">Submit</button>
        </form>
    )
}
