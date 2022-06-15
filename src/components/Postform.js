import axios from 'axios'
import React, { useState } from 'react'

const Postform = () => {
    const url =''
    const [data,setData] = useState({
        name:'',
        date:'',
        userid:''
    })

    const handle = (e) =>{
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata);
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        axios.post(url,{
            name:data.name,
            date:data.date,
            userid:data.userid
        }).then(res =>{
            console.log(res);

        })
    }
  return (
  <div>
    <form onSubmit={(e)=>onSubmit(e)}>
        <input placeholder='name' type='text' id='name' onChange={(e)=>handle(e)} />
        <input placeholder='date' type='date' id='date' onChange={(e)=>handle(e)}/>
        <input placeholder='userid' type='number' id='userid' onChange={(e)=>handle(e)}/>
        <button>submit</button>
    </form>
  </div>
  )
}

export default Postform