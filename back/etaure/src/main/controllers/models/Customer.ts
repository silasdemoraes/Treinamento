import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("customer_pkey", ["id"], { unique: true })
@Entity("customer", { schema: "public" })
export class Customer {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp with time zone", { name: "created" })
  created: Date;

  @Column("timestamp with time zone", { name: "updated" })
  updated: Date;

  @Column("character varying", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("character varying", { name: "cpf", nullable: true, length: 14 })
  cpf: string | null;

  @Column("character varying", { name: "phone", nullable: true, length: 15 })
  phone: string | null;

  @Column("date", { name: "birth_date", nullable: true })
  birthDate: string | null;

  @Column("character varying", { name: "secret", nullable: true, length: 255 })
  secret: string | null;
}
