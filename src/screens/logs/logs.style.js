import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: 'indigo',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  textValue: {
    fontSize: 16,
    marginVertical: 3,
  },
  greenText: {
    color: 'green',
    fontWeight: 'bold',
  },
  redText: {
    color: 'red',
    fontWeight: 'bold',
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 20,
  },
  checkOutBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
});

export default styles;
