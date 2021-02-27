import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("users")
class Users {

    @PrimaryGeneratedColumn('increment')
    public id: number;
    
    @Column()
    readonly id_: string;
    
    @Column()
    name: string;
    
    @Column()
    email: string;
    
    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id_){
            this.id_ = uuid();
        }
    }

}

export { Users }