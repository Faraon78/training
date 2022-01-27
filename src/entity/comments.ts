import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Posts } from "./posts";

@Entity()
export class Comments {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Posts, posts => posts.id)
    postId: number;

    @Column()
    name: string;

    @Column()
    email_commentator: string;

    @Column()
    body: string;

}