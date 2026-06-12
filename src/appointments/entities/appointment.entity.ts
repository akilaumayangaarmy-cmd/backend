import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "src/users/entities/user.entity";

@Entity()
export class Appointment {

    @PrimaryGeneratedColumn('uuid')
    id: string

    // @Column({
    //     nullable: false,
    //     type: 'varchar',
    //     length: 100
    // })
    // title: string

    // @Column({
    //     nullable: false,
    //     type: 'text'
    // })
    // description: string

    @Column({
        nullable: false,
        type: 'datetime'
    })
    appointmentDate: Date

    // @Column({
    //     nullable: true,
    //     type: 'varchar',
    //     length: 50
    // })
    // status: string

    @ManyToOne(() => User, (user) => user.appointments, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userId' })
    user: User

    @Column()
    userId: string

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
