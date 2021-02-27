import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("surveys")
class survey{
    @PrimaryGeneratedColumn('increment')
    public id: number;
    
    @Column()
    readonly id_: string;
    
    @Column()
    title: string;
    
    @Column()
    description: string;
    
    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id_){
            this.id_ = uuid();
        }
    }
}

export { survey }