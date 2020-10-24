import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerText: {
    fontSize: 18,
    padding: 32,
    color: '#777',
    textAlign: 'center',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: '#fff',
  },
  buttonTouchable: {
    backgroundColor: 'indigo',
    paddingVertical: 10,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    borderRadius: 5,
    marginTop: 30,
  },
  camera: {
    height: 200,
    marginTop: 20,
    width: 280,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default styles;
