import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";


@Entity({name: "member"})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({type: "varchar",nullable: true})
    account: string;

    @Column()
    password: string;

}