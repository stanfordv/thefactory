import { useState as useReactState } from 'react'
import { useState as useHookState} from '@hookstate/core'
import generalize_only from '../../../generalize_only_store.js'
import SelectedArc from './_selectedArc/SelectedArc.jsx'

export default function Project( { user, project, setProject } ) {
    const generalizeOnly = useHookState(generalize_only)
    const [fieldValue, setFieldValue] = useReactState('')
    const [generalizes, setGen] = useReactState(false)
    function changeProject(e){
        e.preventDefault()
        setProject(fieldValue)
    }
    function zeroProject(){
        setProject('')
    }
    console.log("project: " + project)
    return (
        <div 
            className="Project"
            style={{
                boxSizing: "border-box",
                borderStyle: "solid",
                borderRadius: "5px",
                borderWidth: "0.1vw",
                margine: "2px",
                padding: "1px",
                // margin: "5px",
            }}
        >
            <form 
                onSubmit={(e) => changeProject(e)}
                style={{
                    //borderStyle: "solid",
                    //borderWidth: "0.1vw",
                    //width:"100%",
                }}
            >
                <label>Project: </label>
                {!project ?
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
                            onClick={e => zeroProject()}
                        >{project}</button>
                    </span>
                }                
            </form>
            
            <button>
                Expand all (not implimented)
            </button>            
            {project != ""   ?
                <SelectedArc user={user} project={project}/>
            :
                ""
            }           
        </div>
    )
}