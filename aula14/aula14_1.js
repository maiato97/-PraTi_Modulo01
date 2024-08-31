class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    add(data) {
        let newNode = new Node(data)

        if(this.head === null){
            this.head = newNode
        } else {
            let current = this.head
            while(current.next !== null){
                current = current.next
            }

            current.next = newNode
        }
        this.size++
    }

    printList() {
        let current = this.head
        while(current !== null){
            console.log(current.data)
            current = current.next
        }
    }

    indexOf(data) {
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

    isEmpty() {
        return this.size === 0
    }

    sizeOfList() {
        return this.size
    }
}

let list = new LinkedList()

list.add("Elemento 0")
list.add("Elemento 1")
list.add("Elemento 2")
list.add("Elemento 3")

console.log(list.indexOf("Elemento 3"))


