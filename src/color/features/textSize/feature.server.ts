import { createServerFeature } from '@payloadcms/richtext-lexical';
import { SizeFeatureProps } from 'src/color/features/textSize/types';

export const TextSizeFeature = createServerFeature<SizeFeatureProps, SizeFeatureProps, SizeFeatureProps>({
	feature({ props }) {
		return {
			ClientFeature: 'payload-lexical-color/client#TextSizeFeatureClient',
			clientFeatureProps: {
				sizes: props?.sizes,
			},
		};
	},
	key: 'textSize',
});
