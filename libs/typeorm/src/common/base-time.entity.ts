import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class BaseTimeEntity {
  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;
}
