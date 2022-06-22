//React imports
import { useState } from 'react'
//Components
import Project from './_project/Project.jsx'

export default function User( {user, project, setUser, setProject} ) {
    const [ fieldValue, setFieldValue ] = useState('')
    //const [ user, setUser] = useState('ben')
    function changeUser(e){
        e.preventDefault()
        setUser(fieldValue)
    }
    function zeroUser(){
        setUser('')
    }
    return (
        <div 
            className="User"
            style={{
                boxSizing: "border-box",
                borderStyle: "solid",
                borderRadius: "5px",
                borderWidth: "0.1vw",
                padding: "2px",
                margin: "1px",
                overflow: "scroll",
                maxHeight: "66vh",
                textAlign: "left",
                width: "300px"
                //minWidth: "1%",
                //maxWidth: "31vw",
               
            }}
        >            
            <div
                style={{
                    //width:"100%",
                    //display:"flex",
                    // padding:"5px",
                    // margin:"5px", 
                }}
            >
            
            
            
            <form 
                onSubmit={(e) => changeUser(e)}
            >
                <label>User: </label>
                {!user ?
                    <input 
                        type="text" 
                        value={fieldValue} 
                        onChange={e => setFieldValue(e.currentTarget.value)} 
                        autoFocus
                        onFocus={e => e.currentTarget.select()}                
                    ></input> 
                :
                <span> 
                    <button 
                        className="link"
                        onClick={e => zeroUser()}
                    >{user}</button>
                </span>
                }
            </form>
            {user ?
                <Project user={user} project={project} setUser={setUser} setProject={setProject}/>
            :
                ''
            }



            </div>
        </div>
    )
}
