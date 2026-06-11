import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        nullable: false,
        type: 'varchar',
        length: 50,
        name: 'first_name'
    })
    firstName: string

    @Column({
        nullable: false,
        type: 'varchar',
        length: 50,
        name: 'last_name'
    })
    lastName: string

    @Column({
        nullable: false,
        type: 'varchar',
        length: 50,
        unique: true
    })
    email: string

    @Column({
        nullable: false,
        type: 'varchar',
        length: 20,
        unique: true
    })
    nic: string

    @Column({
        nullable: false,
        type: 'varchar',
        length: 100
    })
    password: string

    @Column({
        nullable: false,
        type: 'varchar',
        length: 50
    })
    role: string

    @Column({
        nullable: false,
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt: Date

    @Column({
        nullable: false,
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    updatedAt: Date

}
