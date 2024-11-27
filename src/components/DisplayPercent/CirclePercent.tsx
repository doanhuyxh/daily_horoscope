    import {View, Text, StyleSheet} from 'react-native';
    import ThemeColor from '../../configs/color';

    function CirclePercent({percent, text}: {percent: number; text: string}) {
    return (
        <View style={styles.container}>
        <View>
            <View style={styles.circleContainer}>
            <View style={styles.textContent}>
                <Text>{percent} %</Text>
            </View>
            </View>
        </View>
        <View style={{
            alignContent:"center",
            alignSelf:"center",
            justifyContent:'center',
    
        }}>
            <Text style={{fontSize:16, margin:'auto'}}>{text}</Text>
        </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        minHeight: 70,
        flexDirection: 'column',
        gap: 30,
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    circleContainer:{
        width:80,
        height:80,
        backgroundColor:ThemeColor.primaryColorOpacity,
        borderRadius:40,
        alignItems:'center',
        justifyContent:"center"
    },
    textContent:{
        width:60,
        height:60,
        backgroundColor:"#fff",
        borderRadius:40,
        alignItems:'center',
        justifyContent:"center"
    }
    });

    export default CirclePercent;
