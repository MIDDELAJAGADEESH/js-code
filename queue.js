class queue{
    constructor(data){
        this.size = data;
        this.newqueue=new Array(this.size);
        this.front=-1;
        this.rare=-1;
        
    }
    enqueue(data){
        if(this.rare==this.size-1){
            console.log("queue is full");
        }
        if(this.front==-1){
            this.front=0;
        }
        this.rare++;
        this.newqueue[this.rare]=data;
        
        if(this.rare>this.newqueue){
            return true
        }
        return false;
    }
    isempry(){
        if(this.rare<0){
            
            return true;
        }
        return false;
    }
    
}

let newqueue1=new queue();
newqueue1.enqueue(10);
newqueue1.enqueue(20);
newqueue1.



console.log(newqueue1.isempry());

