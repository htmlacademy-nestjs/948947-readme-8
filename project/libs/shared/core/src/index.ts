export { BaseEntity } from './lib/base/entity';

export { UserRoleEnum } from './lib/types/user-role.enum';
export { IUser, IAuthUser } from './lib/types/user.interface';

export { IStorableEntity } from './lib/types/storable-entity.interface';
export { IEntityFactory } from './lib/types/entity-factory.interface';

export {
  SALT_ROUNDS,
  AUTH_USER_EXISTS,
  AUTH_USER_NOT_FOUND,
  AUTH_USER_PASSWORD_WRONG,
  AuthenticationValidateMessage,
} from './lib/constants'

export { IComment } from './lib/types/comment.interface';
export { ICategory } from './lib/types/category.interface';
export { IPost } from './lib/types/post.interface';
