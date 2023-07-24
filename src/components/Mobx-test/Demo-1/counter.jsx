import React from 'react'
import {observer} from 'mobx-react'
import counterStore from './count'


const counterComponent = observer(()=>{

    return(

        <>

            <div>

                <h3>Counter Value: {counterStore.count}</h3>
                <button onClick ={()=>counterStore.increment()}>Increment</button>
                <button onClick ={()=>counterStore.decrement()}>Decrement</button>


            </div>



        </>
    )


})


export default counterComponent