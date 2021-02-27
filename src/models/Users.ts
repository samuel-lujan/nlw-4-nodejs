import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("users")
class Users {

    @PrimaryColumn()
    id: number;
    
    @Column()
    readonly id_: string;
    
    @Column()
    name: string;
    
    @Column()
    email: string;
    
    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id_ = uuid();
        }
    }
}

export { Users }