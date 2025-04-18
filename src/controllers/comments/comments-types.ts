import type { Comment } from "@prisma/client";

export type GetComments = {
  comments: Comment[];
};

export enum GetCommentsError {
  POST_NOT_FOUND = "POST_NOT_FOUND",
  COMMENTS_NOT_FOUND = "COMMENTS_NOT_FOUND",
  PAGE_BEYOND_LIMIT = "PAGE_BEYOND_LIMIT",
  UNKNOWN = "UNKNOWN",
}

export type CreateComments = {
  comment: Comment;
};

export enum CreateCommentError {
  INVALID_INPUT = "INVALID_INPUT",
  POST_NOT_FOUND = "POST_NOT_FOUND",
  NO_CHANGES = "NO_CHANGES",
  UNAUTHORIZED = "UNAUTHORIZED",
  UNKNOWN = "UNKNOWN",
}

export type UpdateComments = {
  comment: Comment;
};

export enum UpdateCommentError {
  INVALID_INPUT = "INVALID_INPUT",
  COMMENT_NOT_FOUND = "COMMENT_NOT_FOUND",
  NO_CHANGES = "NO_CHANGES",
  UNAUTHORIZED = "UNAUTHORIZED",
  UNKNOWN = "UNKNOWN",
}

export enum DeleteCommentError {
  COMMENT_NOT_FOUND = "COMMENT_NOT_FOUND",
  UNAUTHORIZED = "UNAUTHORIZED",
  UNKNOWN = "UNKNOWN",
}