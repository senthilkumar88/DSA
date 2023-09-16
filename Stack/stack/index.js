class Stack{
    constructor(){
        this.maxSize=100;
        this.stack=[];
        this.top=-1;
    }
    push(value) {
        if(this.isStackFull()){
            console.log("Stack is overflow");
            return false;
        }
        top++;
        this.stack[top]=value;
    }
    pop() {
      if(this.isStackEmpty()){
        console.log("Stack is empty");
        return null;
      }
      this.top--;
      this.stack.pop();
    }
    peek(){
        if(this.isStackEmpty()){
            console.log("Stack is empty");
            return false;
        }
        return this.stack[this.top];
    }
    isStackFull(){
        return (this.top === this.maxSize-1);
    }
    isStackEmpty(){
        return (this.top === -1);
    }
}


module.exports = Stack;
