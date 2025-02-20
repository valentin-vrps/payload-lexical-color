import { ParagraphJSXConverter } from './Paragraph'
import { TextJSXConverter } from './Text'
import { HeadingJSXConverter } from './Heading'

export default {
	...ParagraphJSXConverter,
	...TextJSXConverter,
	...HeadingJSXConverter
}
