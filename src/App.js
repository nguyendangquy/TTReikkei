
import { useState} from 'react'

function App() {
  const [memJava, setJava] = useState([])
    const [memReact, setReact] = useState([])
    const [change, setChange] = useState('React')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [id, setId] = useState(1)
    
    const handleAdd = () => {
        if(change === 'React') {
            setReact([...memReact, {
                id,
                type:'React',
                name,
                age: Number(age)
            }])
        } if(change==='Java'){
            setJava([...memJava, {
                id,
                type:'Java',
                name,
                age: Number(age)
            }])
        }
        console.log(change)
        setName('')
        setAge('')

        let ids = id+1
        setId(ids)
        console.log(memReact)

    }    
    const hanleChange = (e) => {
        setChange(e.target.value)
    }
    const handleTranfer = (user) => {
        if(user.type === 'React') {
            let newList = memReact.filter((item) =>
                item.id !== user.id
            )
     
            setReact([...newList])
            setJava([...memJava, {
                id: user.id,
                name: user.name,
                age: user.age,
                type: 'Java'
            }])
        }
        if(user.type === 'Java') {
            let newList = memJava.filter((item) =>
                item.id !== user.id
            )
            setJava([...newList])
            setReact([...memReact, {
                id: user.id,
                name: user.name,
                age: user.age,
                type: 'React'
            }])
        }
    }
    return (
        <div>
            <input placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value) }/>
            <input placeholder='Enter age' value={age} onChange={(e)=>setAge(e.target.value) }/>
            <select onChange={hanleChange}>
                <option value='React'>React</option>
                <option value="Java">Java</option>
            </select>
            <br/>
            <button onClick={handleAdd}>Add member</button>
            <h1>List member of React</h1>
            <ul>
                {
                    memReact.map((member, index) => (
                        <li key={index}>
                           name: {member.name} -age: {member.age} 
                           <button onClick={() => handleTranfer(member)} >Tranfer</button>
                        </li>
                    ))
                }
            </ul>
            <h1>List member of Java</h1>
            <ul>
                {
                    memJava.map((member, index) => (
                        <li key={index}>
                            name: {member.name} - age: {member.age} 
                            <button onClick={() => handleTranfer(member)}>Tranfer</button>
                        </li>
                       
                    ))
                }
            </ul>
        </div>
    )
}

export default App;
