import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Appoinment {

    @PrimaryGeneratedColumn('uuid')
    id: string

    
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