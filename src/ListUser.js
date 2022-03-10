import { useEffect, useState } from "react";

function ListUser() {
    const [name, setName] = useState('')    
    const [users, setUser] = useState([
        {
            name: 'Quý',
            age: 22
        },
        {
            name: 'Nam',
            age: 18
        },
        {
            name: 'Tùng',
            age: 26
        },
        {
            name: 'Tùng',
            age: 20
        },
    ])

  
   
    const search = users.filter((item) => 
        item.name.toLowerCase().includes(name.toLowerCase())
    )
    console.log(search)
    const handleChange = (e) => {
        setName(e.target.value)
        setUser(search)
    }
    return (
        <div>
             <input value={name} onChange = {handleChange} />

            <ul>
                {
                    users.map((user, index) => (
                        <li key = {index}>{user.name} - {user.age}</li>
                    ) )
                }

            </ul>
        </div>
    )
}

export default ListUser