import UserAPI from './util-api';
import UtilDATA from './util-data';
import UtilUI from './util-ui';
import UtilUSER from './util-user';
import UtilNOTE from './util-note';

const Util = {
  API: UserAPI,
  DATA: UtilDATA,
  NOTE: UtilNOTE,
  UI: UtilUI,
  USER: UtilUSER
};

export default Util;