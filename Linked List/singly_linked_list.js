// piece of data -> val 
// refernce to next node -> next
class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.length=0;
        this.head = null;
        this.tail = null;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{ 
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.length++;
        return this;
    }

    traverse(){  
        let current = this.head;
        while(current){
            console.log(current.val);
            current= current.next;
        }
    }

    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail=current;
            current=current.next;
        }
        this.tail=newTail;
        this.tail.next = null;
        this.length--;
        if(this.length===0){
            this.head=null;
            this.tail=null;
        }
        return current;
    }

    shift(){
        if(!this.head) return undefined;
        let current = this.head;  
        this.head=current.next;
        this.length--;

        return current;
    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }
        else{
        let current=newNode;
        current.next=this.head;
        this.head= current;
        }
        this.length++;
        return this;
    }
    get(index){
        let counter = this.head
        if(index<0 || index >= this.length ){
            return null;
        }
        else{ 
            for(let i=0;i<this.length;i++){
                if(i===index){
                    return counter
                }
                else{
                    counter=counter.next;
                }
            }

        }
        return counter;
    }
    set(index,value){                                    // Sets a new value at a given node  eg 12->13->14 set(1,15) = 12->15->14
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val=value;
            return true;
        }
        return false;
    }
    insert(index,value){
        if(index<0||index>this.length) return false;
        if(index===this.length) return !!this.push(value);               //---> !! gives true 
        if(index===0) return !!this.unshift(value);
        var newNode = new Node(value);
        var prev = this.get(index-1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next=temp;
        this.length++;
        return this;
    }

    remove(index){
        if(index<0 || index>=this.length) return null;
        if(index===this.length-1) return this.pop();
        if(index===0) return this.pop;
        var nodePrev = this.get(index-1);
        var node = this.get(index);
        nodePrev.next=node.next;
        this.length--;
        return node;
    }

    reverse(){
        var node = this.head;
        this.head=this.tail;
        this.tail=node;
        let prev = null;
        let next;
        for(let i = 0 ;i<this.length;i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }


    print(){
        let arr= [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current=current.next;
        }
        return arr;
    }

}

var list = new SinglyLinkedList();
list.push('Mane');
list.push('Salah');
list.push('Jota');
list.push('Firminio');
list.reverse();
console.log(list.print());