import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localeData from "dayjs/plugin/localeData";
import 'dayjs/locale/fr';

dayjs.extend(customParseFormat);
dayjs.extend(localeData);

export default dayjs;