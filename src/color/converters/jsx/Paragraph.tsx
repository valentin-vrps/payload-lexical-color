import React from 'react'
import { JSXConverters } from '@payloadcms/richtext-lexical/react'
import { SerializedCustomParagraphNode } from 'src/color/types'

export const ParagraphJSXConverter: JSXConverters<SerializedCustomParagraphNode> = {
	'custom-paragraph': ({ node, nodesToJSX }) => {
		const children = nodesToJSX({
			nodes: node.children,
		})

		if (!children?.length) {
			return (
				<p>
					<br />
				</p>
			)
		}

		const style: React.CSSProperties = { paddingTop: '.5rem', paddingBottom: '.5rem' }
		const matchBackgroundColor = node.style.match(/background-color: ([^;]+)/)
		const matchFontSize = node.style.match(/font-size: ([^;]+)/)

		matchBackgroundColor && (style.backgroundColor = matchBackgroundColor[1])
		matchFontSize && (style.fontSize = matchFontSize[1])

		return <p style={style}>{children }</p>
	},
}
