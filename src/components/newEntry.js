import React from 'react'
import PlusIcon from '../assets/icons/plus-icon.svg'
const newEntry = () => {
    let categories = ['linux', 'aws', 'nodejs', 'personal', 'my-docs', 'nodejs', 'personal', 'my-docs']
    return (
        <div className="create-new-entry-card">
            Category
            <div className="new-entry-category-container">
                {categories.map(category => {
                    category = category.replace('-', ' ')
                    return (
                        <div key={category} className="new-entry-category-tag">{category}</div>
                    )
                })}
                <div className="new-entry-new-category-tag">New category<img className="new-entry-new-category-icon" src={PlusIcon} alt="plus icon" /></div>
            </div>

            <form className="new-entry-form" >

                <label for="title">Tittle:</label>
                <input type="text" id="title" name="title"/>
            </form>
        </div>
    )
}

export default newEntry
