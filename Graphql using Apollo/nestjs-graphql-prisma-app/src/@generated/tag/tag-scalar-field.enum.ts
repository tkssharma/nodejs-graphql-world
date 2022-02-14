import { registerEnumType } from '@nestjs/graphql';

export enum TagScalarFieldEnum {
    tagId = 'tagId',
    name = 'name',
}

registerEnumType(TagScalarFieldEnum, {
    name: 'TagScalarFieldEnum',
    description: undefined,
});
