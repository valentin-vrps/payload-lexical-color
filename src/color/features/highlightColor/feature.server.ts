import { createServerFeature } from '@payloadcms/richtext-lexical';
import { ColorFeatureProps } from 'src/color/types';

export const HighlightColorFeature = createServerFeature<ColorFeatureProps, ColorFeatureProps, ColorFeatureProps>({
	feature({ props }) {
		return {
			ClientFeature: 'payload-lexical-color/client#HighlightColorFeatureClient',
			clientFeatureProps: {
				colors: props?.colors
			}
		}
	},
	key: 'highlightColor',
})
