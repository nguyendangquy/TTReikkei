
import { useEffect,useState} from 'react'


function App() {
  const [memJava, setJava] = useState([
      {
          id:1,
          type:'Java',
          name:'Nguyễn Đăng Quý',
          age:21
      },
      {
        id:2,
        type:'Java',
        name:'Nguyễn Đăng Nam',
        age:20
    }
  ])
    const [memReact, setReact] = useState([
        {
            id:3,
            type:'React',
            name:'Đăng Quý',
            age:21
        },
        {
          id:4,
          type:'React',
          name:'Đăng Nam',
          age:20
      }
    ])

    useEffect(()=> {
        if(memJava.length === 0) {
            alert('Warning: Java class is empty now ')
        } else if(memReact.length===0) {
            alert('Warning: React class is empty now ')
        }
    },[memJava.length, memReact.length])

    const [change, setChange] = useState('React')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [id, setId] = useState()
    const [userEdit, setUserEdit] = useState({id:null})
    
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
    const handleEdit = (user) => {
        setName(user.name)
        setAge(user.age)
        setUserEdit(user)
        setChange(user.type)
        
    
    }
    const handleChange = () => {
        setReact(preMember => {
            if(memReact.length > 0) {
                preMember[id] = memReact
                return preMember
            }
        })
        if(change === 'React') {
           let newListMember =  memReact.filter((item) => item.id !== userEdit.id)
           newListMember.push({
            id:userEdit.id,
            type:'React',
            name,
            age: Number(age)
        })
        setReact([...newListMember])
        }
        if(change === 'Java') {
            let newListMember =  memJava.filter((item) => item.id !== userEdit.id)
            newListMember.push({
             id:userEdit.id,
             type:'Java',
             name,
             age: Number(age)
         })
         setJava([...newListMember])
        }
        setUserEdit({id:null})
        setName('')
        setAge('')
    }
    return (
        <div style={{padding: 20}}>
            <label>Name </label>
            <input placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value) }/>
            <label>Age </label>
            <input placeholder='Enter age' value={age} onChange={(e)=>setAge(e.target.value) }/>
            <select onChange={hanleChange}>
                <option value='React'>React</option>
                <option value="Java">Java</option>
            </select>
            <br/>
            {userEdit.id ? <button onClick= {handleChange}>Change member</button>:<button onClick={handleAdd}>Add member</button>} 
            <h1>List member of React</h1>
            <ul>
                { memReact.length > 0 ?
                    memReact.map((member, index) => (
                        <li key={index}>
                           name: {member.name} -age: {member.age} 
                           <button onClick={() => handleTranfer(member)}>Tranfer</button>
                           <button onClick = {() =>handleEdit(member)}>Edit</button>
                        </li>
                    ))
                : 'class empty'}
            </ul>
            <h1>List member of Java</h1>
            <ul>
                { memJava.length > 0 ?
                    memJava.map((member, index) => (
                        <li key={index}>
                            name: {member.name} - age: {member.age} 
                            <button onClick={() => handleTranfer(member)}>Tranfer</button>
                            <button onClick = {() =>handleEdit(member)}>Edit</button>
                        </li>
                       
                    ))
                : 'class empty'}
            </ul>
         
        </div>
    )
}

export default App
