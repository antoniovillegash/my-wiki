import { React, useState } from 'react'
import PlusIcon from '../assets/icons/plus-icon.svg'



const NewEntry = () => {
   
    let categories = ['linux', 'aws', 'nodejs', 'personal', 'my-docs-2', 'personal 2', 'my-docs 2'];

    const [selectedCategory, setSelectedCategory] = useState(-1);

    const [inputError, setInputError] = useState({
        'tittle': '',
        'category': ''
    })

    const [inputValue, setInputValue] = useState({
        'tittle': '',
        'category': ''
    })

    const onChangeHandler=(e) => {
        setInputValue({
            ...inputValue, [e.target.id]:e.target.value
        });
    }

    const validate = (e) => {
        e.preventDefault();
        let isValid = true;
        let errors ={}
        if(inputValue.tittle===''){
            isValid= false; 
            errors.tittle='Enter the tittle'
        }
        if(inputValue.category==='' && selectedCategory===-1){
            isValid= false; 
            errors.category='Select or create a category'
        }

        setInputError(errors);


    }
    return (
        <div className="create-new-entry-card">

            <form className="new-entry-form" onSubmit={(e) => { validate(e) }}>

                <label htmlFor="tittle">Tittle:</label>
                <input 
                type="text" 
                id="tittle" 
                name="tittle" 
                value={inputValue.tittle} 
                onChange={e => onChangeHandler(e)}/>
                <label htmlFor="tittle" className="entry-input-error">{inputError.tittle}</label>

                <div className="new-entry-categories">

                    Category:
                    
                    <div className="new-entry-category-container">
                        {categories.map((category, index) => {
                            let style = ''
                            if (index === selectedCategory) {
                                style = 'selected'
                            }
                            category = category.replaceAll('-', ' ')
                            return (
                                <div
                                    key={index}
                                    className={'new-entry-category-tag ' + style}
                                    onClick={() => setSelectedCategory(index)}>
                                    {category}
                                </div>
                            )
                        })}


                        <div className="new-category-form" >


                            <input
                                type="text"
                                id="category"
                                name="category"
                                placeholder="New category"
                                onClick={() => setSelectedCategory(-1)}
                                value={inputValue.category}
                                onChange={e => onChangeHandler(e)} />
                            <img className="new-entry-new-category-button" src={PlusIcon} alt="plus icon" />
                        </div>
                    </div>
                        <label htmlFor="category" className="entry-input-error">{inputError.category}</label>
                </div>
                <button type="submit" className="new-entry-button">Create new entry</button>
            </form>


        </div>
    )
}

export default NewEntry
