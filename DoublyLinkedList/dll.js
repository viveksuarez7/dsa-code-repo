// Node 
// -val 
// -next
// -previous

class Node{
    constructor(val){
        this.val=val;
        this.next=null;
        this.prev=null;
    }

}
// DoublyLinkedList
// -head
// -tail
// -length
class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }
  push(val){
      let newNode = new Node(val)
      if(!this.head){
            this.head=newNode;
            this.tail=this.head;
      }
      else{
          this.tail.next = newNode;
          newNode.prev=this.tail;
          this.tail=newNode;
      }
      this.length++;
      return this;
  }

  pop(){
      let poppedNode=this.tail;
      if(!this.head) return null;
      else if(this.length===1){
          this.head=null;
          this.tail=null;
      }
      else{
        this.tail = poppedNode.prev;
        this.tail.next = null; 
      }
      this.length--;
      return poppedNode;

  }
  shift(){
      let oldHead = this.head;
      if(!this.head) return null;
      if(this.length===1){
          this.head = null;
          this.tail=null;
      }
      else{
          this.head=oldHead.next;
          this.head.prev=null;
          oldHead.next=null;
      }
      this.length--
      return oldHead
  }
  unshift(val){
      let newNode = new Node(val);
      if(!this.head){
          this.head = newNode;
          this,tail=newNode;
      }
      else{
          newNode.next=this.head;
          this.head=newNode;
      }
      this.length++;
      return this;
  }
  get(index){
      if(index<0 || index>=this.length) return null;
      if(index <= this.length/2){
          var count = 0;
      var current = this.head;
      console.log('Working From Start');
      while(count != index){
          current=current.next;
          count++;
      }
      }
      else{
          var count = this.length-1;
          var current = this.tail;
          console.log('Working From End');
          while(count != index){
              current = current.prev;
              count--
          }
      }
      return current;
  }

  set(index,val){
      let value = this.get(index);
      if(value){
          value.val=val;
          return true;
      }
      return false
  }

  insert(index,val){
      if(index<0 || index>this.length) return null;
      if(index===0){
          return this.unshift(val);
      }
      else if(index===this.length){
          return this.push(val);
      }
      else{
          let newNode = new Node(val);
          let foundNode = this.get(index-1);
          let foundNodeNext = foundNode.next;
          newNode.prev=foundNode;
          newNode.next=foundNodeNext;
          foundNodeNext.prev=newNode;
          this.length++;
          return true;
      }
  }
  remove(index){
      if(index<0 || index>=this.length) return null;
      if(index===0){
          return this.shift();
      }
      else if(index===this.length-1){
          return this.pop();
      }
      else{
          let foundNode=this.get(index);
          let foundNodePrev=foundNode.prev;
          let foundNodeNext=foundNode.next;
          foundNodeNext.prev=foundNodePrev;
          foundNodePrev.next=foundNodeNext
          foundNode.next=null;
          foundNode.prev=null;
          this.length--
          return foundNode
      }

  }
  
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
list.push(10);
 
console.log(list.remove(7));
console.log(list.get(7).val)