
var localizeGlobalNamespace="undefined"!=typeof process&&"node"===process.release.name?global:window;!function(e,r){e.TabGlobalize=r()}(localizeGlobalNamespace,function(){function e(r){return this instanceof e?(u(r,"locale"),s(r,"locale"),void(this._locale=r)):new e(r)}var r=function(e){return"string"==typeof e?e:"number"==typeof e?""+e:JSON.stringify(e)},t=function(e,t){return e=e.replace(/{[0-9a-zA-Z-_. ]+}/g,function(e){return e=e.replace(/^{([^}]*)}$/,"$1"),r(t[e])})},a=function(){var e=arguments[0],r=[].slice.call(arguments,1);return r.forEach(function(r){var t;for(t in r)e[t]=r[t]}),e},n=function(e,r,n){var o;return r=e+(r?": "+t(r,n):""),o=new Error(r),o.code=e,a(o,n),o},o=function(e){return[].reduce.call(e,function(e,r){var t=r.charCodeAt(0);return e=(e<<5)-e+t,0|e},0)},i=function(e,r,t,a){var n;return a=a||JSON.stringify(t),n=o(e+r+a),n>0?"a"+n:"b"+Math.abs(n)},l=function(e,r,t,a){if(!t)throw n(e,r,a)},u=function(e,r){l("E_MISSING_PARAMETER","Missing required parameter `{name}`.",void 0!==e,{name:r})},c=function(e,r,t,a){l("E_INVALID_PAR_TYPE","Invalid `{name}` parameter ({value}). {expected} expected.",t,{expected:a,name:r,value:e})},s=function(e,r){c(e,r,void 0===e||"string"==typeof e,"a string")},f=function(e){return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")},p=function(e,r,t){var a;for("string"!=typeof e&&(e=String(e)),a=e.length;a<r;a+=1)e=t?e+"0":"0"+e;return e};return e.locale=function(e){return s(e,"locale"),arguments.length&&(this._locale=e),this._locale},e._createError=n,e._formatMessage=t,e._regexpEscape=f,e._runtimeKey=i,e._stringPad=p,e._validateParameterPresence=u,e._validateParameterTypeString=s,e._validateParameterType=c,e}),function(e,r){r(e.TabGlobalize)}(localizeGlobalNamespace,function(e){var r=e._runtimeKey,t=e._validateParameterType,a=function(e){return null!==e&&""+e=="[object Object]"},n=function(e,r){t(e,r,void 0===e||a(e)||Array.isArray(e),"Array or Plain Object")},o=function(e){return function(r){return"number"!=typeof r&&"string"!=typeof r||(r=[].slice.call(arguments,0)),n(r,"variables"),e(r)}};return e._messageFormatterFn=o,e._messageFormat=function(){var e=function(e,r){if(isNaN(e))throw new Error("'"+e+"' isn't a number.");return e-(r||0)},r=function(e,r,t,a,n){if({}.hasOwnProperty.call(a,e))return a[e]();r&&(e-=r);var o=t(e,n);return o in a?a[o]():a.other()},t=function(e,r){return{}.hasOwnProperty.call(r,e)?r[e]():r.other()};return{number:e,plural:r,select:t}}(),e._validateParameterTypeMessageVariables=n,e.messageFormatter=e.prototype.messageFormatter=function(){return e[r("messageFormatter",this._locale,[].slice.call(arguments,0))]},e.formatMessage=e.prototype.formatMessage=function(e){return this.messageFormatter(e).apply({},[].slice.call(arguments,1))},e}),function(e,r){r(e.TabGlobalize)}(localizeGlobalNamespace,function(e){var r=e._runtimeKey,t=e._validateParameterPresence,a=e._validateParameterType,n=function(e,r){a(e,r,void 0===e||"number"==typeof e,"Number")},o=function(e){return function(r){return t(r,"value"),n(r,"value"),e(r)}};return e._pluralGeneratorFn=o,e._validateParameterTypeNumber=n,e.plural=e.prototype.plural=function(e,r){return t(e,"value"),n(e,"value"),this.pluralGenerator(r)(e)},e.pluralGenerator=e.prototype.pluralGenerator=function(t){return t=t||{},e[r("pluralGenerator",this._locale,[t])]},e});

(function( root, factory ) {
  root.Localize = root.Localize || {};
  root.Localize.msg = new root.TabGlobalize('en');
  factory( root.TabGlobalize, root.Localize );
}(localizeGlobalNamespace, function( Globalize ) {
var validateParameterTypeNumber = Globalize._validateParameterTypeNumber;
var validateParameterPresence = Globalize._validateParameterPresence;
var pluralGeneratorFn = Globalize._pluralGeneratorFn;
var validateParameterTypeMessageVariables = Globalize._validateParameterTypeMessageVariables;
var messageFormat = Globalize._messageFormat;
var messageFormatterFn = Globalize._messageFormatterFn;

Globalize.a1662346136 = pluralGeneratorFn(function(n) {
  var s = String(n).split('.'), v0 = !s[1];
  return (n == 1 && v0) ? 'one' : 'other';
});
Globalize.b1412443033 = messageFormatterFn((function(  ) {
  return function (d) { return "Add a snapshot of the view to your comment"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b460221656 = messageFormatterFn((function(  ) {
  return function (d) { return "Comments"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1449788384 = messageFormatterFn((function(  ) {
  return function (d) { return "Close panel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1959032562 = messageFormatterFn((function(  ) {
  return function (d) { return "Add a comment…"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a316360211 = messageFormatterFn((function(  ) {
  return function (d) { return "No comments on this view."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1101965012 = messageFormatterFn((function(  ) {
  return function (d) { return "@Mention someone to notify them."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2052581548 = messageFormatterFn((function(  ) {
  return function (d) { return "Post"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a385752829 = messageFormatterFn((function(  ) {
  return function (d) { return "View"; }
})(), Globalize("en").pluralGenerator({}));
}));
