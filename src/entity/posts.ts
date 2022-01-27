import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Users} from "./users";

@Entity()
export class Posts {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Users, users => users.id)
    userId: number;

    @Column()
    title: string;

    @Column()
    body: string;    

}