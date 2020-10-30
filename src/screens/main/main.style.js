import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'indigo',
    paddingHorizontal: '18%',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
  },
  payBtn: {
    backgroundColor: 'white',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  input: {
    height: 30,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 5,
    color: 'white',
  },
  label: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
