import { LightningElement, track } from 'lwc';
/* eslint-disable no-console */
/* eslint-disable no-alert */
export default class SimpleIteration extends LightningElement {
    @track objList = [
        {name: "Item1",
         value: 1},
         {name: "Item2",
         value: 2},
         {name: "Item3",
         value: 3},
         {name: "Item4",
         value: 4},
         {name: "Item5",
         value: 5},
         {name: "Item6",
         value: 6},
         {name: "Item7",
         value: 7}
    ];

    addItem(event){
        console.log("adding an item");
        let listSize = this.objList.length+1;
        this.objList.push({name:"Item"+listSize, value:listSize});
        console.log('list',this.objList);
    }
}