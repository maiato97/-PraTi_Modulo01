// Lista encadeada simples
//Head é sempre o primeiro elemento

class Node{
    constructor(data){
        this.data = data
        this. next = null // no inicio da lista, ainda nao existe um elemento proximo por isso é null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    add(data){ // função adicionar um novo nó(elemento) data é o parametro
        let newNode =  new Node(data)

        if (this.head === null){ //se o head da minha lista for null, o novo elemento vai ser o head.
            this.head = newNode
        } else {
            let current = this.head //current variavel para percorrer a lista, começando pelo head.
            while(current.next !== null){ // enquanto o next da lista tiver algum dado, ele vai apontar para um proximo ate encontrar o ultimo.
                current = current.next
            }
            current.next = newNode // quando sai do while, o current vai ser null, entao pra adicionar o elemento, o current.next vai ser o newNode.
        }

        this.size++ //depois de adicionar elemento, aumenta minha lista
    }

    insertAt(data, index){
        if(index < 0 || index > this.size){
            return console.log('Index fora dos limites!')
        }

        let newNode = new Node(data)
        let current = this.head
        let previous

        if(index === 0){
            newNode.next = this.head
            this.head = newNode
        } else {
            for(let i = 0; i < index; i++){
                previous = current
                current = current.next
            }

            newNode.next = current
            previous.next = newNode
        }

        this.size++
    }

    removeFrom(index){
        if(index < 0 || index > this.size){
            return console.log("Index fora dos limites!")
        }

        let current = this.head
        let previous

        if(index === 0){
            this.head = current.next
        } else {
            for(let i = 0; i < index; i++){
                previous = current
                current = current.next
            }
            previous.next = current.next
        }

        this.size--
        return current.data
    }

    indexOf(data){
        let current = this.head
        let index = 0

        while(current !== null){
            if(current.data === data){
                return index
            }
            index++
            current = current.next
        }

        return -1
    }

    isEmpty(){
        return this.size === 0
    }

    printList(){
       let current = this.head

       while(current !== null){
            console.log(current.data)
            current = current.next
       }
    }
}

let list = new LinkedList()

list.add("Elemento 0")
list.add("Elemento 1")
list.add("Elemento 2")
list.add("Elemento 3")

console.log(list.indexOf("Elemento 3"))
list.removeFrom(1)
list.printList()