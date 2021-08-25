import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GraphQLJWTAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    return GqlExecutionContext
      .create(context)
      .getContext()
      .req;
  }
}
