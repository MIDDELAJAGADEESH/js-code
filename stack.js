class Stack{
    constructor(data){
        this.size=data;
        this.top=-1;
        this.arr=new Array(this.size);

    }

    isempty(){
        if(this.top<0){
            return true;
        }
        return false;
    }

    isfull(){
        if(this.top>=this.size-1){
            return true;
        }
        return false;
    }

    push(data){
        this.top++;
        if(this.isfull()){
            console.log("stack is full");
            this.top--;
        }
        this.arr[this.top]=data;

    }

    pop(){
        if(this.isempty()){
            return;
        }
        let x=this.arr[this.top];
        this.top--;
        return x;
    }

    peek(){
        return this.arr[this.top];
    }

    print(){
       while(this.top>=0){
        console.log(this.top);
        this.top--;
       }
       let i=0;
       while(this.top!=0){
        console.log(this.arr[i]);
        i++;
        this.top--;
       }

    }
}
