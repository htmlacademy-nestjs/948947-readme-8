import { Injectable } from '@nestjs/common';
import { MemoryRepository } from '@project/data-access';
import { UserEntity } from './user.entity';
import { UserFactory } from './user.factory';

@Injectable()
export class UserRepository extends MemoryRepository<UserEntity> {
  constructor(entityFactory: UserFactory) {
    super(entityFactory);
  }

  public async findByEmail(email: string): Promise<UserEntity | null> {
    const entities = Array.from(this.entities.values());
    const user = entities.find((entity) => entity.email === email);

    if (!user) {
      return null;
    }

    return this.entityFactory.create(user);
  }
}
