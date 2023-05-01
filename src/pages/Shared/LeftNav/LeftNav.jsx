import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/categories')
        .then(res =>res.json())
        .then(data => setCategories(data))
        .catch(error => console.error(error))
    })
    return (
        <div>
            <h4>All Category</h4>
            {
                categories.map(category =><p key={category.id}>
                    <Link to={`/category/${category.id}`} className='text-decoration-none text-dark '>{category.name}</Link>

                </p>)
            }
        </div>
    );
};

export default LeftNav;