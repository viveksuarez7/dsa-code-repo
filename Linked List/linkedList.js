class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.length=0;
        this.head=null;
        this.tail=null;
    }

    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail=this.head; 
        }
        else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.length++;
        return this;
    }

    pop(){
           if(!this.head) return undefined
           let current = this.head;
           let newTail = current;
           while(current.next){
               newTail = current;
               current = current.next;
           } 
           this.length--;
           if(this.length===0){
               this.head=null;
               this.tail=null;
           }   
           return current;       
    }
}

let list = new LinkedList();
list.push('hello');
list.push('Friend');
list.push('Gun');
console.log(list.pop()) ;
console.log(list);