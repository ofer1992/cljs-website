goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17950 = arguments.length;
var i__5770__auto___17951 = (0);
while(true){
if((i__5770__auto___17951 < len__5769__auto___17950)){
args__5775__auto__.push((arguments[i__5770__auto___17951]));

var G__17952 = (i__5770__auto___17951 + (1));
i__5770__auto___17951 = G__17952;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq17373){
var G__17374 = cljs.core.first(seq17373);
var seq17373__$1 = cljs.core.next(seq17373);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17374,seq17373__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__17379 = cljs.core.seq(sources);
var chunk__17380 = null;
var count__17381 = (0);
var i__17382 = (0);
while(true){
if((i__17382 < count__17381)){
var map__17396 = chunk__17380.cljs$core$IIndexed$_nth$arity$2(null,i__17382);
var map__17396__$1 = cljs.core.__destructure_map(map__17396);
var src = map__17396__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17396__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17396__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17396__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17396__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e17401){var e_17953 = e17401;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_17953);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_17953.message)].join('')));
}

var G__17954 = seq__17379;
var G__17955 = chunk__17380;
var G__17956 = count__17381;
var G__17957 = (i__17382 + (1));
seq__17379 = G__17954;
chunk__17380 = G__17955;
count__17381 = G__17956;
i__17382 = G__17957;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17379);
if(temp__5804__auto__){
var seq__17379__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17379__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17379__$1);
var G__17958 = cljs.core.chunk_rest(seq__17379__$1);
var G__17959 = c__5568__auto__;
var G__17960 = cljs.core.count(c__5568__auto__);
var G__17961 = (0);
seq__17379 = G__17958;
chunk__17380 = G__17959;
count__17381 = G__17960;
i__17382 = G__17961;
continue;
} else {
var map__17426 = cljs.core.first(seq__17379__$1);
var map__17426__$1 = cljs.core.__destructure_map(map__17426);
var src = map__17426__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17426__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17426__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17426__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17426__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e17427){var e_17962 = e17427;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_17962);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_17962.message)].join('')));
}

var G__17963 = cljs.core.next(seq__17379__$1);
var G__17964 = null;
var G__17965 = (0);
var G__17966 = (0);
seq__17379 = G__17963;
chunk__17380 = G__17964;
count__17381 = G__17965;
i__17382 = G__17966;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__17434 = cljs.core.seq(js_requires);
var chunk__17435 = null;
var count__17436 = (0);
var i__17437 = (0);
while(true){
if((i__17437 < count__17436)){
var js_ns = chunk__17435.cljs$core$IIndexed$_nth$arity$2(null,i__17437);
var require_str_17967 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_17967);


var G__17968 = seq__17434;
var G__17969 = chunk__17435;
var G__17970 = count__17436;
var G__17971 = (i__17437 + (1));
seq__17434 = G__17968;
chunk__17435 = G__17969;
count__17436 = G__17970;
i__17437 = G__17971;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17434);
if(temp__5804__auto__){
var seq__17434__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17434__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17434__$1);
var G__17972 = cljs.core.chunk_rest(seq__17434__$1);
var G__17973 = c__5568__auto__;
var G__17974 = cljs.core.count(c__5568__auto__);
var G__17975 = (0);
seq__17434 = G__17972;
chunk__17435 = G__17973;
count__17436 = G__17974;
i__17437 = G__17975;
continue;
} else {
var js_ns = cljs.core.first(seq__17434__$1);
var require_str_17976 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_17976);


var G__17977 = cljs.core.next(seq__17434__$1);
var G__17978 = null;
var G__17979 = (0);
var G__17980 = (0);
seq__17434 = G__17977;
chunk__17435 = G__17978;
count__17436 = G__17979;
i__17437 = G__17980;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__17440){
var map__17441 = p__17440;
var map__17441__$1 = cljs.core.__destructure_map(map__17441);
var msg = map__17441__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17441__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17441__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17443(s__17444){
return (new cljs.core.LazySeq(null,(function (){
var s__17444__$1 = s__17444;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17444__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__17452 = cljs.core.first(xs__6360__auto__);
var map__17452__$1 = cljs.core.__destructure_map(map__17452);
var src = map__17452__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17452__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17452__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__17444__$1,map__17452,map__17452__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17441,map__17441__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17443_$_iter__17445(s__17446){
return (new cljs.core.LazySeq(null,((function (s__17444__$1,map__17452,map__17452__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17441,map__17441__$1,msg,info,reload_info){
return (function (){
var s__17446__$1 = s__17446;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__17446__$1);
if(temp__5804__auto____$1){
var s__17446__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17446__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17446__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17448 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17447 = (0);
while(true){
if((i__17447 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__17447);
cljs.core.chunk_append(b__17448,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__17981 = (i__17447 + (1));
i__17447 = G__17981;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17448),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17443_$_iter__17445(cljs.core.chunk_rest(s__17446__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17448),null);
}
} else {
var warning = cljs.core.first(s__17446__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17443_$_iter__17445(cljs.core.rest(s__17446__$2)));
}
} else {
return null;
}
break;
}
});})(s__17444__$1,map__17452,map__17452__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17441,map__17441__$1,msg,info,reload_info))
,null,null));
});})(s__17444__$1,map__17452,map__17452__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17441,map__17441__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17443(cljs.core.rest(s__17444__$1)));
} else {
var G__17982 = cljs.core.rest(s__17444__$1);
s__17444__$1 = G__17982;
continue;
}
} else {
var G__17983 = cljs.core.rest(s__17444__$1);
s__17444__$1 = G__17983;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__17460_17984 = cljs.core.seq(warnings);
var chunk__17461_17985 = null;
var count__17462_17986 = (0);
var i__17463_17987 = (0);
while(true){
if((i__17463_17987 < count__17462_17986)){
var map__17473_17988 = chunk__17461_17985.cljs$core$IIndexed$_nth$arity$2(null,i__17463_17987);
var map__17473_17989__$1 = cljs.core.__destructure_map(map__17473_17988);
var w_17990 = map__17473_17989__$1;
var msg_17991__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17473_17989__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_17992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17473_17989__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_17993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17473_17989__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_17994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17473_17989__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_17994)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_17992),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_17993),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_17991__$1)].join(''));


var G__17995 = seq__17460_17984;
var G__17996 = chunk__17461_17985;
var G__17997 = count__17462_17986;
var G__17998 = (i__17463_17987 + (1));
seq__17460_17984 = G__17995;
chunk__17461_17985 = G__17996;
count__17462_17986 = G__17997;
i__17463_17987 = G__17998;
continue;
} else {
var temp__5804__auto___17999 = cljs.core.seq(seq__17460_17984);
if(temp__5804__auto___17999){
var seq__17460_18000__$1 = temp__5804__auto___17999;
if(cljs.core.chunked_seq_QMARK_(seq__17460_18000__$1)){
var c__5568__auto___18001 = cljs.core.chunk_first(seq__17460_18000__$1);
var G__18002 = cljs.core.chunk_rest(seq__17460_18000__$1);
var G__18003 = c__5568__auto___18001;
var G__18004 = cljs.core.count(c__5568__auto___18001);
var G__18005 = (0);
seq__17460_17984 = G__18002;
chunk__17461_17985 = G__18003;
count__17462_17986 = G__18004;
i__17463_17987 = G__18005;
continue;
} else {
var map__17478_18006 = cljs.core.first(seq__17460_18000__$1);
var map__17478_18007__$1 = cljs.core.__destructure_map(map__17478_18006);
var w_18008 = map__17478_18007__$1;
var msg_18009__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17478_18007__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_18010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17478_18007__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17478_18007__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_18012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17478_18007__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_18012)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18010),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18011),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_18009__$1)].join(''));


var G__18013 = cljs.core.next(seq__17460_18000__$1);
var G__18014 = null;
var G__18015 = (0);
var G__18016 = (0);
seq__17460_17984 = G__18013;
chunk__17461_17985 = G__18014;
count__17462_17986 = G__18015;
i__17463_17987 = G__18016;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__17439_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__17439_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__17479){
var map__17484 = p__17479;
var map__17484__$1 = cljs.core.__destructure_map(map__17484);
var msg = map__17484__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17484__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17484__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__17490 = cljs.core.seq(updates);
var chunk__17492 = null;
var count__17493 = (0);
var i__17494 = (0);
while(true){
if((i__17494 < count__17493)){
var path = chunk__17492.cljs$core$IIndexed$_nth$arity$2(null,i__17494);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__17787_18017 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__17791_18018 = null;
var count__17792_18019 = (0);
var i__17793_18020 = (0);
while(true){
if((i__17793_18020 < count__17792_18019)){
var node_18021 = chunk__17791_18018.cljs$core$IIndexed$_nth$arity$2(null,i__17793_18020);
if(cljs.core.not(node_18021.shadow$old)){
var path_match_18022 = shadow.cljs.devtools.client.browser.match_paths(node_18021.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18022)){
var new_link_18023 = (function (){var G__17856 = node_18021.cloneNode(true);
G__17856.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18022),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__17856;
})();
(node_18021.shadow$old = true);

(new_link_18023.onload = ((function (seq__17787_18017,chunk__17791_18018,count__17792_18019,i__17793_18020,seq__17490,chunk__17492,count__17493,i__17494,new_link_18023,path_match_18022,node_18021,path,map__17484,map__17484__$1,msg,updates,reload_info){
return (function (e){
var seq__17857_18024 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__17859_18025 = null;
var count__17860_18026 = (0);
var i__17861_18027 = (0);
while(true){
if((i__17861_18027 < count__17860_18026)){
var map__17865_18028 = chunk__17859_18025.cljs$core$IIndexed$_nth$arity$2(null,i__17861_18027);
var map__17865_18029__$1 = cljs.core.__destructure_map(map__17865_18028);
var task_18030 = map__17865_18029__$1;
var fn_str_18031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17865_18029__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17865_18029__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18033 = goog.getObjectByName(fn_str_18031,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18032)].join(''));

(fn_obj_18033.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18033.cljs$core$IFn$_invoke$arity$2(path,new_link_18023) : fn_obj_18033.call(null,path,new_link_18023));


var G__18034 = seq__17857_18024;
var G__18035 = chunk__17859_18025;
var G__18036 = count__17860_18026;
var G__18037 = (i__17861_18027 + (1));
seq__17857_18024 = G__18034;
chunk__17859_18025 = G__18035;
count__17860_18026 = G__18036;
i__17861_18027 = G__18037;
continue;
} else {
var temp__5804__auto___18038 = cljs.core.seq(seq__17857_18024);
if(temp__5804__auto___18038){
var seq__17857_18039__$1 = temp__5804__auto___18038;
if(cljs.core.chunked_seq_QMARK_(seq__17857_18039__$1)){
var c__5568__auto___18040 = cljs.core.chunk_first(seq__17857_18039__$1);
var G__18041 = cljs.core.chunk_rest(seq__17857_18039__$1);
var G__18042 = c__5568__auto___18040;
var G__18043 = cljs.core.count(c__5568__auto___18040);
var G__18044 = (0);
seq__17857_18024 = G__18041;
chunk__17859_18025 = G__18042;
count__17860_18026 = G__18043;
i__17861_18027 = G__18044;
continue;
} else {
var map__17866_18045 = cljs.core.first(seq__17857_18039__$1);
var map__17866_18046__$1 = cljs.core.__destructure_map(map__17866_18045);
var task_18047 = map__17866_18046__$1;
var fn_str_18048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17866_18046__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17866_18046__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18050 = goog.getObjectByName(fn_str_18048,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18049)].join(''));

(fn_obj_18050.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18050.cljs$core$IFn$_invoke$arity$2(path,new_link_18023) : fn_obj_18050.call(null,path,new_link_18023));


var G__18051 = cljs.core.next(seq__17857_18039__$1);
var G__18052 = null;
var G__18053 = (0);
var G__18054 = (0);
seq__17857_18024 = G__18051;
chunk__17859_18025 = G__18052;
count__17860_18026 = G__18053;
i__17861_18027 = G__18054;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18021);
});})(seq__17787_18017,chunk__17791_18018,count__17792_18019,i__17793_18020,seq__17490,chunk__17492,count__17493,i__17494,new_link_18023,path_match_18022,node_18021,path,map__17484,map__17484__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18022], 0));

goog.dom.insertSiblingAfter(new_link_18023,node_18021);


var G__18055 = seq__17787_18017;
var G__18056 = chunk__17791_18018;
var G__18057 = count__17792_18019;
var G__18058 = (i__17793_18020 + (1));
seq__17787_18017 = G__18055;
chunk__17791_18018 = G__18056;
count__17792_18019 = G__18057;
i__17793_18020 = G__18058;
continue;
} else {
var G__18059 = seq__17787_18017;
var G__18060 = chunk__17791_18018;
var G__18061 = count__17792_18019;
var G__18062 = (i__17793_18020 + (1));
seq__17787_18017 = G__18059;
chunk__17791_18018 = G__18060;
count__17792_18019 = G__18061;
i__17793_18020 = G__18062;
continue;
}
} else {
var G__18063 = seq__17787_18017;
var G__18064 = chunk__17791_18018;
var G__18065 = count__17792_18019;
var G__18066 = (i__17793_18020 + (1));
seq__17787_18017 = G__18063;
chunk__17791_18018 = G__18064;
count__17792_18019 = G__18065;
i__17793_18020 = G__18066;
continue;
}
} else {
var temp__5804__auto___18067 = cljs.core.seq(seq__17787_18017);
if(temp__5804__auto___18067){
var seq__17787_18068__$1 = temp__5804__auto___18067;
if(cljs.core.chunked_seq_QMARK_(seq__17787_18068__$1)){
var c__5568__auto___18069 = cljs.core.chunk_first(seq__17787_18068__$1);
var G__18070 = cljs.core.chunk_rest(seq__17787_18068__$1);
var G__18071 = c__5568__auto___18069;
var G__18072 = cljs.core.count(c__5568__auto___18069);
var G__18073 = (0);
seq__17787_18017 = G__18070;
chunk__17791_18018 = G__18071;
count__17792_18019 = G__18072;
i__17793_18020 = G__18073;
continue;
} else {
var node_18074 = cljs.core.first(seq__17787_18068__$1);
if(cljs.core.not(node_18074.shadow$old)){
var path_match_18075 = shadow.cljs.devtools.client.browser.match_paths(node_18074.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18075)){
var new_link_18076 = (function (){var G__17867 = node_18074.cloneNode(true);
G__17867.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18075),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__17867;
})();
(node_18074.shadow$old = true);

(new_link_18076.onload = ((function (seq__17787_18017,chunk__17791_18018,count__17792_18019,i__17793_18020,seq__17490,chunk__17492,count__17493,i__17494,new_link_18076,path_match_18075,node_18074,seq__17787_18068__$1,temp__5804__auto___18067,path,map__17484,map__17484__$1,msg,updates,reload_info){
return (function (e){
var seq__17868_18077 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__17870_18078 = null;
var count__17871_18079 = (0);
var i__17872_18080 = (0);
while(true){
if((i__17872_18080 < count__17871_18079)){
var map__17876_18081 = chunk__17870_18078.cljs$core$IIndexed$_nth$arity$2(null,i__17872_18080);
var map__17876_18082__$1 = cljs.core.__destructure_map(map__17876_18081);
var task_18083 = map__17876_18082__$1;
var fn_str_18084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17876_18082__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17876_18082__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18086 = goog.getObjectByName(fn_str_18084,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18085)].join(''));

(fn_obj_18086.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18086.cljs$core$IFn$_invoke$arity$2(path,new_link_18076) : fn_obj_18086.call(null,path,new_link_18076));


var G__18087 = seq__17868_18077;
var G__18088 = chunk__17870_18078;
var G__18089 = count__17871_18079;
var G__18090 = (i__17872_18080 + (1));
seq__17868_18077 = G__18087;
chunk__17870_18078 = G__18088;
count__17871_18079 = G__18089;
i__17872_18080 = G__18090;
continue;
} else {
var temp__5804__auto___18091__$1 = cljs.core.seq(seq__17868_18077);
if(temp__5804__auto___18091__$1){
var seq__17868_18092__$1 = temp__5804__auto___18091__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17868_18092__$1)){
var c__5568__auto___18093 = cljs.core.chunk_first(seq__17868_18092__$1);
var G__18094 = cljs.core.chunk_rest(seq__17868_18092__$1);
var G__18095 = c__5568__auto___18093;
var G__18096 = cljs.core.count(c__5568__auto___18093);
var G__18097 = (0);
seq__17868_18077 = G__18094;
chunk__17870_18078 = G__18095;
count__17871_18079 = G__18096;
i__17872_18080 = G__18097;
continue;
} else {
var map__17877_18098 = cljs.core.first(seq__17868_18092__$1);
var map__17877_18099__$1 = cljs.core.__destructure_map(map__17877_18098);
var task_18100 = map__17877_18099__$1;
var fn_str_18101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17877_18099__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17877_18099__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18103 = goog.getObjectByName(fn_str_18101,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18102)].join(''));

(fn_obj_18103.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18103.cljs$core$IFn$_invoke$arity$2(path,new_link_18076) : fn_obj_18103.call(null,path,new_link_18076));


var G__18104 = cljs.core.next(seq__17868_18092__$1);
var G__18105 = null;
var G__18106 = (0);
var G__18107 = (0);
seq__17868_18077 = G__18104;
chunk__17870_18078 = G__18105;
count__17871_18079 = G__18106;
i__17872_18080 = G__18107;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18074);
});})(seq__17787_18017,chunk__17791_18018,count__17792_18019,i__17793_18020,seq__17490,chunk__17492,count__17493,i__17494,new_link_18076,path_match_18075,node_18074,seq__17787_18068__$1,temp__5804__auto___18067,path,map__17484,map__17484__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18075], 0));

goog.dom.insertSiblingAfter(new_link_18076,node_18074);


var G__18108 = cljs.core.next(seq__17787_18068__$1);
var G__18109 = null;
var G__18110 = (0);
var G__18111 = (0);
seq__17787_18017 = G__18108;
chunk__17791_18018 = G__18109;
count__17792_18019 = G__18110;
i__17793_18020 = G__18111;
continue;
} else {
var G__18112 = cljs.core.next(seq__17787_18068__$1);
var G__18113 = null;
var G__18114 = (0);
var G__18115 = (0);
seq__17787_18017 = G__18112;
chunk__17791_18018 = G__18113;
count__17792_18019 = G__18114;
i__17793_18020 = G__18115;
continue;
}
} else {
var G__18116 = cljs.core.next(seq__17787_18068__$1);
var G__18117 = null;
var G__18118 = (0);
var G__18119 = (0);
seq__17787_18017 = G__18116;
chunk__17791_18018 = G__18117;
count__17792_18019 = G__18118;
i__17793_18020 = G__18119;
continue;
}
}
} else {
}
}
break;
}


var G__18120 = seq__17490;
var G__18121 = chunk__17492;
var G__18122 = count__17493;
var G__18123 = (i__17494 + (1));
seq__17490 = G__18120;
chunk__17492 = G__18121;
count__17493 = G__18122;
i__17494 = G__18123;
continue;
} else {
var G__18124 = seq__17490;
var G__18125 = chunk__17492;
var G__18126 = count__17493;
var G__18127 = (i__17494 + (1));
seq__17490 = G__18124;
chunk__17492 = G__18125;
count__17493 = G__18126;
i__17494 = G__18127;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17490);
if(temp__5804__auto__){
var seq__17490__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17490__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17490__$1);
var G__18128 = cljs.core.chunk_rest(seq__17490__$1);
var G__18129 = c__5568__auto__;
var G__18130 = cljs.core.count(c__5568__auto__);
var G__18131 = (0);
seq__17490 = G__18128;
chunk__17492 = G__18129;
count__17493 = G__18130;
i__17494 = G__18131;
continue;
} else {
var path = cljs.core.first(seq__17490__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__17878_18132 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__17882_18133 = null;
var count__17883_18134 = (0);
var i__17884_18135 = (0);
while(true){
if((i__17884_18135 < count__17883_18134)){
var node_18136 = chunk__17882_18133.cljs$core$IIndexed$_nth$arity$2(null,i__17884_18135);
if(cljs.core.not(node_18136.shadow$old)){
var path_match_18137 = shadow.cljs.devtools.client.browser.match_paths(node_18136.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18137)){
var new_link_18138 = (function (){var G__17910 = node_18136.cloneNode(true);
G__17910.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18137),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__17910;
})();
(node_18136.shadow$old = true);

(new_link_18138.onload = ((function (seq__17878_18132,chunk__17882_18133,count__17883_18134,i__17884_18135,seq__17490,chunk__17492,count__17493,i__17494,new_link_18138,path_match_18137,node_18136,path,seq__17490__$1,temp__5804__auto__,map__17484,map__17484__$1,msg,updates,reload_info){
return (function (e){
var seq__17911_18139 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__17913_18140 = null;
var count__17914_18141 = (0);
var i__17915_18142 = (0);
while(true){
if((i__17915_18142 < count__17914_18141)){
var map__17919_18143 = chunk__17913_18140.cljs$core$IIndexed$_nth$arity$2(null,i__17915_18142);
var map__17919_18144__$1 = cljs.core.__destructure_map(map__17919_18143);
var task_18145 = map__17919_18144__$1;
var fn_str_18146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17919_18144__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17919_18144__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18148 = goog.getObjectByName(fn_str_18146,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18147)].join(''));

(fn_obj_18148.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18148.cljs$core$IFn$_invoke$arity$2(path,new_link_18138) : fn_obj_18148.call(null,path,new_link_18138));


var G__18149 = seq__17911_18139;
var G__18150 = chunk__17913_18140;
var G__18151 = count__17914_18141;
var G__18152 = (i__17915_18142 + (1));
seq__17911_18139 = G__18149;
chunk__17913_18140 = G__18150;
count__17914_18141 = G__18151;
i__17915_18142 = G__18152;
continue;
} else {
var temp__5804__auto___18153__$1 = cljs.core.seq(seq__17911_18139);
if(temp__5804__auto___18153__$1){
var seq__17911_18154__$1 = temp__5804__auto___18153__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17911_18154__$1)){
var c__5568__auto___18155 = cljs.core.chunk_first(seq__17911_18154__$1);
var G__18156 = cljs.core.chunk_rest(seq__17911_18154__$1);
var G__18157 = c__5568__auto___18155;
var G__18158 = cljs.core.count(c__5568__auto___18155);
var G__18159 = (0);
seq__17911_18139 = G__18156;
chunk__17913_18140 = G__18157;
count__17914_18141 = G__18158;
i__17915_18142 = G__18159;
continue;
} else {
var map__17920_18160 = cljs.core.first(seq__17911_18154__$1);
var map__17920_18161__$1 = cljs.core.__destructure_map(map__17920_18160);
var task_18162 = map__17920_18161__$1;
var fn_str_18163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17920_18161__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17920_18161__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18165 = goog.getObjectByName(fn_str_18163,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18164)].join(''));

(fn_obj_18165.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18165.cljs$core$IFn$_invoke$arity$2(path,new_link_18138) : fn_obj_18165.call(null,path,new_link_18138));


var G__18166 = cljs.core.next(seq__17911_18154__$1);
var G__18167 = null;
var G__18168 = (0);
var G__18169 = (0);
seq__17911_18139 = G__18166;
chunk__17913_18140 = G__18167;
count__17914_18141 = G__18168;
i__17915_18142 = G__18169;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18136);
});})(seq__17878_18132,chunk__17882_18133,count__17883_18134,i__17884_18135,seq__17490,chunk__17492,count__17493,i__17494,new_link_18138,path_match_18137,node_18136,path,seq__17490__$1,temp__5804__auto__,map__17484,map__17484__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18137], 0));

goog.dom.insertSiblingAfter(new_link_18138,node_18136);


var G__18170 = seq__17878_18132;
var G__18171 = chunk__17882_18133;
var G__18172 = count__17883_18134;
var G__18173 = (i__17884_18135 + (1));
seq__17878_18132 = G__18170;
chunk__17882_18133 = G__18171;
count__17883_18134 = G__18172;
i__17884_18135 = G__18173;
continue;
} else {
var G__18174 = seq__17878_18132;
var G__18175 = chunk__17882_18133;
var G__18176 = count__17883_18134;
var G__18177 = (i__17884_18135 + (1));
seq__17878_18132 = G__18174;
chunk__17882_18133 = G__18175;
count__17883_18134 = G__18176;
i__17884_18135 = G__18177;
continue;
}
} else {
var G__18178 = seq__17878_18132;
var G__18179 = chunk__17882_18133;
var G__18180 = count__17883_18134;
var G__18181 = (i__17884_18135 + (1));
seq__17878_18132 = G__18178;
chunk__17882_18133 = G__18179;
count__17883_18134 = G__18180;
i__17884_18135 = G__18181;
continue;
}
} else {
var temp__5804__auto___18182__$1 = cljs.core.seq(seq__17878_18132);
if(temp__5804__auto___18182__$1){
var seq__17878_18183__$1 = temp__5804__auto___18182__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17878_18183__$1)){
var c__5568__auto___18184 = cljs.core.chunk_first(seq__17878_18183__$1);
var G__18185 = cljs.core.chunk_rest(seq__17878_18183__$1);
var G__18186 = c__5568__auto___18184;
var G__18187 = cljs.core.count(c__5568__auto___18184);
var G__18188 = (0);
seq__17878_18132 = G__18185;
chunk__17882_18133 = G__18186;
count__17883_18134 = G__18187;
i__17884_18135 = G__18188;
continue;
} else {
var node_18189 = cljs.core.first(seq__17878_18183__$1);
if(cljs.core.not(node_18189.shadow$old)){
var path_match_18190 = shadow.cljs.devtools.client.browser.match_paths(node_18189.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18190)){
var new_link_18191 = (function (){var G__17921 = node_18189.cloneNode(true);
G__17921.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18190),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__17921;
})();
(node_18189.shadow$old = true);

(new_link_18191.onload = ((function (seq__17878_18132,chunk__17882_18133,count__17883_18134,i__17884_18135,seq__17490,chunk__17492,count__17493,i__17494,new_link_18191,path_match_18190,node_18189,seq__17878_18183__$1,temp__5804__auto___18182__$1,path,seq__17490__$1,temp__5804__auto__,map__17484,map__17484__$1,msg,updates,reload_info){
return (function (e){
var seq__17922_18192 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__17924_18193 = null;
var count__17925_18194 = (0);
var i__17926_18195 = (0);
while(true){
if((i__17926_18195 < count__17925_18194)){
var map__17930_18196 = chunk__17924_18193.cljs$core$IIndexed$_nth$arity$2(null,i__17926_18195);
var map__17930_18197__$1 = cljs.core.__destructure_map(map__17930_18196);
var task_18198 = map__17930_18197__$1;
var fn_str_18199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17930_18197__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17930_18197__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18201 = goog.getObjectByName(fn_str_18199,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18200)].join(''));

(fn_obj_18201.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18201.cljs$core$IFn$_invoke$arity$2(path,new_link_18191) : fn_obj_18201.call(null,path,new_link_18191));


var G__18202 = seq__17922_18192;
var G__18203 = chunk__17924_18193;
var G__18204 = count__17925_18194;
var G__18205 = (i__17926_18195 + (1));
seq__17922_18192 = G__18202;
chunk__17924_18193 = G__18203;
count__17925_18194 = G__18204;
i__17926_18195 = G__18205;
continue;
} else {
var temp__5804__auto___18206__$2 = cljs.core.seq(seq__17922_18192);
if(temp__5804__auto___18206__$2){
var seq__17922_18207__$1 = temp__5804__auto___18206__$2;
if(cljs.core.chunked_seq_QMARK_(seq__17922_18207__$1)){
var c__5568__auto___18208 = cljs.core.chunk_first(seq__17922_18207__$1);
var G__18209 = cljs.core.chunk_rest(seq__17922_18207__$1);
var G__18210 = c__5568__auto___18208;
var G__18211 = cljs.core.count(c__5568__auto___18208);
var G__18212 = (0);
seq__17922_18192 = G__18209;
chunk__17924_18193 = G__18210;
count__17925_18194 = G__18211;
i__17926_18195 = G__18212;
continue;
} else {
var map__17931_18213 = cljs.core.first(seq__17922_18207__$1);
var map__17931_18214__$1 = cljs.core.__destructure_map(map__17931_18213);
var task_18215 = map__17931_18214__$1;
var fn_str_18216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931_18214__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931_18214__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18218 = goog.getObjectByName(fn_str_18216,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18217)].join(''));

(fn_obj_18218.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18218.cljs$core$IFn$_invoke$arity$2(path,new_link_18191) : fn_obj_18218.call(null,path,new_link_18191));


var G__18219 = cljs.core.next(seq__17922_18207__$1);
var G__18220 = null;
var G__18221 = (0);
var G__18222 = (0);
seq__17922_18192 = G__18219;
chunk__17924_18193 = G__18220;
count__17925_18194 = G__18221;
i__17926_18195 = G__18222;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18189);
});})(seq__17878_18132,chunk__17882_18133,count__17883_18134,i__17884_18135,seq__17490,chunk__17492,count__17493,i__17494,new_link_18191,path_match_18190,node_18189,seq__17878_18183__$1,temp__5804__auto___18182__$1,path,seq__17490__$1,temp__5804__auto__,map__17484,map__17484__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18190], 0));

goog.dom.insertSiblingAfter(new_link_18191,node_18189);


var G__18223 = cljs.core.next(seq__17878_18183__$1);
var G__18224 = null;
var G__18225 = (0);
var G__18226 = (0);
seq__17878_18132 = G__18223;
chunk__17882_18133 = G__18224;
count__17883_18134 = G__18225;
i__17884_18135 = G__18226;
continue;
} else {
var G__18227 = cljs.core.next(seq__17878_18183__$1);
var G__18228 = null;
var G__18229 = (0);
var G__18230 = (0);
seq__17878_18132 = G__18227;
chunk__17882_18133 = G__18228;
count__17883_18134 = G__18229;
i__17884_18135 = G__18230;
continue;
}
} else {
var G__18231 = cljs.core.next(seq__17878_18183__$1);
var G__18232 = null;
var G__18233 = (0);
var G__18234 = (0);
seq__17878_18132 = G__18231;
chunk__17882_18133 = G__18232;
count__17883_18134 = G__18233;
i__17884_18135 = G__18234;
continue;
}
}
} else {
}
}
break;
}


var G__18235 = cljs.core.next(seq__17490__$1);
var G__18236 = null;
var G__18237 = (0);
var G__18238 = (0);
seq__17490 = G__18235;
chunk__17492 = G__18236;
count__17493 = G__18237;
i__17494 = G__18238;
continue;
} else {
var G__18239 = cljs.core.next(seq__17490__$1);
var G__18240 = null;
var G__18241 = (0);
var G__18242 = (0);
seq__17490 = G__18239;
chunk__17492 = G__18240;
count__17493 = G__18241;
i__17494 = G__18242;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__17932){
var map__17933 = p__17932;
var map__17933__$1 = cljs.core.__destructure_map(map__17933);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__17934,done,error){
var map__17935 = p__17934;
var map__17935__$1 = cljs.core.__destructure_map(map__17935);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17935__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__17936,done,error){
var map__17937 = p__17936;
var map__17937__$1 = cljs.core.__destructure_map(map__17937);
var msg = map__17937__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17937__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17937__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17937__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__17938){
var map__17939 = p__17938;
var map__17939__$1 = cljs.core.__destructure_map(map__17939);
var src = map__17939__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17939__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__17940 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__17940) : done.call(null,G__17940));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__17941){
var map__17942 = p__17941;
var map__17942__$1 = cljs.core.__destructure_map(map__17942);
var msg__$1 = map__17942__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17942__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e17943){var ex = e17943;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__17944){
var map__17945 = p__17944;
var map__17945__$1 = cljs.core.__destructure_map(map__17945);
var env = map__17945__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17945__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__17946){
var map__17947 = p__17946;
var map__17947__$1 = cljs.core.__destructure_map(map__17947);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17947__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17947__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__17948){
var map__17949 = p__17948;
var map__17949__$1 = cljs.core.__destructure_map(map__17949);
var svc = map__17949__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17949__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
