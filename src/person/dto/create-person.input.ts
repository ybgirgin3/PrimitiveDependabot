import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePersonInput {
  @Field({ description: 'Name of Person' })
  name: string;

  @Field()
  email: string;

  @Field(() => Int, { nullable: true })
  repoId?: number;
}
