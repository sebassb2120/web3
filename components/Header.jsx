import {Image} from 'react-native'

export default function Header(){
    return(
        <Image
            style={{width:'100%', height:'30%', resizeMode:'stretch'}}
            source={require('../assets/img/apple2.jpg')}>
        </Image>
    );
}