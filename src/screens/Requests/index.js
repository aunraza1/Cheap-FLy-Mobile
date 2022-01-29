import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {AnimatedLoader} from '../../components';
import {SIZES} from '../../constants';
import I18n from '../../i18n';
import {SingleRequestView, Tabs} from './components';
const Requests = () => {
  const [accepted, setAccepted] = useState(true);
  const [pending, setPending] = useState(false);
  const tabArray = [I18n.t('accepted_text'), I18n.t('pending_text')];

  const getRequest = value => {
    if (value === 'accepted') {
      setAccepted(true);
      setPending(false);
    } else {
      setPending(true);
      setAccepted(false);
    }
  };
  return (
    <View style={styles.main_view}>
      <Tabs
        accepted={accepted}
        pending={pending}
        onPress={data => getRequest(data)}
        tabArray={tabArray}
      />
      <SingleRequestView />
      <AnimatedLoader />
    </View>
  );
};
export default Requests;
const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding2,
    marginTop: SIZES.padding2,
    backgroundColor: '#FAF9F6',
  },
});
