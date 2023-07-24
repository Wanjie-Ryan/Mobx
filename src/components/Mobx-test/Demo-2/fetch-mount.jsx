// import React, {useEffect} from 'react'
// import {observer} from 'mobx'
// import fetchDataStore from './fetch'


// const FetchComponent = observer(()=>{

//     useEffect(()=>{

//         fetchDataStore.fetchData()

//     },[])

//     return(

//         <>


//             <h2>Fetched Data</h2>

//             {fetchDataStore.data.map((item)=>{
//                 return(
//                     <div key={item.id}>
//                         <h3>{item.title}</h3>
//                         <p>{item.body}</p>
//                     </div>
//                 )
//             })}




//         </>
//     )

// })

// export default FetchComponent



// FetchComponent.jsx
import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import fetchDataStore from './FetchData';

const FetchComponent = observer(() => {
  useEffect(() => {
    fetchDataStore.fetchData(); // Fetch data when the component mounts
  }, []);

  return (
    <div>
      <h2>Fetched Data:</h2>
      <ul>
        {fetchDataStore.data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
});

export default FetchComponent;
