var T_K1_key1 = context.get('T_K1_key1') || 0;
var delta_T_key1 = 0;
var tstamp_now = msg.payload.tstamp.$date / 1000;//to change [ms] to [s]

if (T_K1_key1 === 0) {
    delta_T_key1 = 1 / tstamp_now;
} else {
    delta_T_key1 = 1 / (tstamp_now - T_K1_key1);
}

msg.payload.delta_T_key1 = delta_T_key1;
T_K1_key1 = tstamp_now;

context.set('T_K1_key1', T_K1_key1);
context.set('delta_T_key1', delta_T_key1);

console.log(msg.payload.tstamp.$date);
console.log(typeof (msg.payload.tstamp.$date));

return msg;