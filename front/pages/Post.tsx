import React, {useState} from 'react'
import Container from '../components/Container'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ButtonWrap from '../components/ButtonWrap'
import Button, { ButtonText } from '../components/Button'
import { WebView } from 'react-native-webview'

const HTML = `
	<h1>This Is A Heading</h1>
	<h1>This Is A Heading</h1>
	<h1>This Is A Heading</h1>
	`

function Post() {
	const navigation = useNavigation()
	return (
		<Container>
			<Text>tddt</Text>
			<WebView
				style={{flex:1}}
				originWhitelist={['*']}
				source={{ html: HTML }}
			/>
			<Text>tt</Text>
		</Container>
	)
}

export default Post
