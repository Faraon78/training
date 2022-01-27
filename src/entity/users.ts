import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userName: string;

    @Column()
    password: string;

    @Column()
    realName: string;

    @Column()
    email: string;

    @Column()
    address_street: string;

    @Column()
    address_suite: string;

    @Column()
    phone: string;

    @Column()
    website: string;

    @Column()
    company: string;

}