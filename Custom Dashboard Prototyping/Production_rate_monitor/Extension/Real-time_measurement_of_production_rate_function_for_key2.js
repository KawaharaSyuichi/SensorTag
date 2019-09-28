var T_K1_key2 = context.get('T_K1_key2') || 0;
var delta_T_key2 = 0;
var tstamp_now = msg.payload.tstamp.$date / 1000;

if (T_K1_key2 === 0){
    delta_T_key2 = 1/tstamp_now;
}else{
    delta_T_key2 = 1/(tstamp_now-T_K1_key2);
}

msg.payload.delta_T_key2 = delta_T_key2;
T_K1_key2 = tstamp_now;

context.set('T_K1_key2',T_K1_key2);
context.set('delta_T_key2',delta_T_key2);

return msg;