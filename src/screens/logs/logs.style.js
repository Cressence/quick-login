import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'indigo',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  payBtn: {
    backgroundColor: 'white',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '65%',
    borderRadius: 5,
  },
  input: {
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default styles;
