import React from 'react'
import {makeObservable, observable, action} from 'mobx'


// an observable is a variable which mobx keeps track of in case of any changes

// an action modifies an observable

class CounterStore {

    count = 0

    constructor (){

        makeObservable(this,{

            count:observable,
            increment:action,
            decrement:action
        })
    }

    increment(){
        this.count++
    }

    decrement(){

        this.count--
    }
}

const counterStore = new CounterStore()

export default counterStore