import localStore from './localstore';
export const saveUser = user => localStore.store_data('user', user);
