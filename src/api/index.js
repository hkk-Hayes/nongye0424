import resquest from '@/utils/request';

export const $deviceCount = () => resquest.get('/device/count');

export const $sensorCount = () => resquest.get('/sensor/count');

export const $sensorList = () => resquest.get('/device/sensorList');

// 传感器删除
export const $sensoredit = () => resquest.get('/sensor//sensor/edit');

export const $gatewayList = (params) => resquest.get('/gateway/list', { params });

export const $gategroupList = (params) => resquest.get('/group/list', { params });

export const $sensor = (params) => resquest.get('/sensor/list', { params });

export const $rechargeList = (params) => resquest.get('/fee/rechargeList', { params });

export const $usageList = (params) => resquest.get('/fee/usageList', { params });

// 获取金额
export const $balance = (params) => resquest.get('/fee/balance', { params });

export const $recharge = (data) => resquest.post('/fee/recharge', data);

// 增加 post
export const $groupAdd = (data) => resquest.post('/group/add', data);

// 修改  post
export const $groupEdit = (data) => resquest.post('/group/edit', data);

// 删除  post
export const $groupDel = (data) => resquest.post('/group/del', data);

// 安全模块
export const $securitylist = (params) => resquest.get('/security/list', { params });

// 删除密钥
export const $securitydel = (data) => resquest.post('/security/del', data);

export const $securityadd = (data) => resquest.post('/security/add', data);

export const $securityedit = (data) => resquest.post('/security/edit', data);

export const $measurementlist = (params) => resquest.get('/measurement/list', { params });

export const $measurementadd = (data) => resquest.post('/measurement/add', data);

export const $measurementdel = (data) => resquest.post('/measurement/del', data);

export const $measurementedit = (data) => resquest.post('/measurement/edit', data);

// 登录
export const $login = (data) => resquest.post('/account/login', data);
