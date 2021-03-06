// 是否是数字
export const IS_NUMBER = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;

export const IS_EMPTY = /^\s*$/;

export const IS_MONTH_DAY = /^(0|[12][0-9]|31|[1-9])$/;

export const IS_HUNDRED =  /^(100|(([1-9]){1}[0-9]?|0{1})((\.)([0-9]){1,2})?)$/;

export const MOBILE = /^$|^1[3456789]\d{9}$/;

export const IS_CARDID = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;

export const IS_FIXMOBILE = /(^(86)\-(0\d{2,3})\-(\d{7,8})\-(\d{1,4})$)|(^0(\d{2,3})\-(\d{7,8})$)|(^0(\d{2,3})\-(\d{7,8})\-(\d{1,4})$)|(^(86)\-(\d{3,4})\-(\d{7,8})$)/;

export const IS_MAIL = /^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9])*@([a-zA-Z0-9]+[-a-zA-Z0-9]*[a-zA-Z0-9]+.){1,63}[a-zA-Z0-9]+$/;
