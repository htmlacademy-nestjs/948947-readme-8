import { IComment, BaseEntity, IStorableEntity } from '@project/core';

export class BlogCommentEntity extends BaseEntity implements IStorableEntity<IComment> {
  public createdAt: Date;
  public updatedAt: Date;
  public postId?: string;
  public message: string;
  public userId: string;

  constructor(comment?: IComment) {
    super();
    this.populate(comment);
  }

  public populate(comment?: IComment): void {
    if (! comment) {
      return;
    }

    this.id = comment.id ?? undefined;
    this.createdAt = comment.createdAt;
    this.updatedAt = comment.updatedAt;
    this.message = comment.message;
    this.postId = comment.postId ?? undefined;
    this.userId = comment.userId;
  }

  public toPOJO(): IComment {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      message: this.message,
      postId: this.postId,
      userId: this.userId,
    }
  }
}
