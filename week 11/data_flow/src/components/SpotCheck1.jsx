import React, { useState } from 'react'
import Task from './Task'

export default function SpotCheck1() {
    const [Tasks, setTasks ]  = useState(
        [
          { text: "Take out trash", complete: false },
          { text: "Trash talk Carrie", complete: true },
          { text: "Carry boxes upstairs", complete: false }
        ]
      ) 
      const markComplete = (text) => {
       const NewTasks = [...Tasks]
        NewTasks.find(t=>t.text===text).complete=true
        setTasks(NewTasks)
      }
  return (
    <div>
        <h1> Spot Check 4 </h1>
        {Tasks.filter(task=>task.complete===false).map((task,index) => <Task task={task} markComplete={markComplete} key={index}/> )}
    </div>
  )
}
