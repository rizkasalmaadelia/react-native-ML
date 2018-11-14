import React, {Component} from 'react';
import {Container, Content, Thumbnail, Button} from 'native-base';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';

export class Settings extends React.Component{
	render(){
		return(
			<View style={styles.container}>
				<Image
            	style={{alignItems: 'center', width: 150, height:150, marginBottom: 5, marginTop:10, }}
            	source={{uri: 'https://avatars0.githubusercontent.com/u/42769768?s=400&u=8b6d515c40406775dfd0bff9b8fb309dc2ee1314&v=4'}}
            	/>
				
                <Text style={styles.edit}>Rizka Salma Adelia </Text>
                <Text style={styles.edit}>XI RPL 1 </Text>
                <Text style={styles.edit}>SMK Telkom Purwokerto </Text>
				<Text style={{ marginBottom : 100}}></Text>
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#71D0FF',
  },

  edit : {
	color : "#fff",
	fontSize : 14,
	}
});