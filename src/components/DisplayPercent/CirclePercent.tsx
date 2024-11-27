import { View, Text, StyleSheet } from 'react-native';
import ThemeColor from '../../configs/color';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

function CirclePercent({ percent, text }: { percent: number; text: string }) {
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <AnimatedCircularProgress
          size={70}
          width={8}
          fill={100-percent}
          rotation={360}
          tintColor={'rgba(255, 255, 255, 0.5)'} 
          backgroundColor={ThemeColor.primaryColor}
        />
        <View style={styles.percentTextContainer}>
          <Text style={styles.percentText}>{`${percent}%`}</Text>
        </View>
      </View>
      <View style={styles.textContent}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 70,
    flexDirection: 'column',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentTextContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: "#000",
  },
  textContent: {

    backgroundColor: '#fff',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: "#000",
  },
});

export default CirclePercent;
