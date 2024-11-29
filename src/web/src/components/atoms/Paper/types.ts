import { MutationComponent, ReactTag } from '@type/mutationComponent';

export type PaperProps<TTag extends ReactTag> = MutationComponent<TTag> & {
	rounded?: boolean;
};
