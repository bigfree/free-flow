import { makeVar, ReactiveVar } from '@apollo/client';
import { MyConfigFragmentFragment } from '@/generated/freeFlow/graphql.ts';

export const myConfigVar: ReactiveVar<MyConfigFragmentFragment | null> = makeVar<MyConfigFragmentFragment | null>(null);
