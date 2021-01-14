import { makeObservable, action, observable } from 'mobx'
import axios from 'axios'

export class ClientStore {
    constructor() {
       this.clients = []

        makeObservable(this, {
            clients: observable,
            getClients: action
        })
    }
    async getClients() {
     let data = await axios.get("http://localhost:4200/clients")
     console.log(data.data[0])
    this.clients.push(data.data[0])
    }
    
}

