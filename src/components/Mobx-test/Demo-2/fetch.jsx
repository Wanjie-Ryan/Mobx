// import React from 'react'
// import {makeObservable, observable, action} from 'mobx'
// import axios from 'axios'

// class FetchData {

//     data =[]

//     constructor (){

//         makeObservable(this,{

//             data:observable,
//             fetchData:action
//         })


//     }

//     async fetchData(){

//         try{

//             const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
//             this.data = response.data
//         }

//         catch(err){

//             console.log(err)
//         }
//     }

// }

// const fetchDataStore = new FetchData()

// export default fetchDataStore



// FetchData.js
import { makeObservable, observable, action } from 'mobx';
import axios from 'axios';

class FetchData {
  data = [];

  constructor() {
    makeObservable(this, {
      data: observable,
      fetchData: action,
    });
  }

  async fetchData() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      this.data = response.data;
    } catch (err) {
      console.log(err);
    }
  }
}

const fetchDataStore = new FetchData();

export default fetchDataStore;
