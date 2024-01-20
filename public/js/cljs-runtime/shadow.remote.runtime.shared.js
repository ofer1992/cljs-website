goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__11615){
var map__11616 = p__11615;
var map__11616__$1 = cljs.core.__destructure_map(map__11616);
var runtime = map__11616__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11616__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_11793 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_11793)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__11617 = runtime;
var G__11618 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_11793);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__11617,G__11618) : shadow.remote.runtime.shared.process.call(null,G__11617,G__11618));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__11624,res){
var map__11625 = p__11624;
var map__11625__$1 = cljs.core.__destructure_map(map__11625);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11625__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11625__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__11626 = res;
var G__11626__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11626,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__11626);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11626__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__11626__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__11628 = arguments.length;
switch (G__11628) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__11632,msg,handlers,timeout_after_ms){
var map__11633 = p__11632;
var map__11633__$1 = cljs.core.__destructure_map(map__11633);
var runtime = map__11633__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11633__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___11814 = arguments.length;
var i__5770__auto___11816 = (0);
while(true){
if((i__5770__auto___11816 < len__5769__auto___11814)){
args__5775__auto__.push((arguments[i__5770__auto___11816]));

var G__11820 = (i__5770__auto___11816 + (1));
i__5770__auto___11816 = G__11820;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__11651,ev,args){
var map__11652 = p__11651;
var map__11652__$1 = cljs.core.__destructure_map(map__11652);
var runtime = map__11652__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11652__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__11654 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__11657 = null;
var count__11658 = (0);
var i__11659 = (0);
while(true){
if((i__11659 < count__11658)){
var ext = chunk__11657.cljs$core$IIndexed$_nth$arity$2(null,i__11659);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__11826 = seq__11654;
var G__11827 = chunk__11657;
var G__11828 = count__11658;
var G__11829 = (i__11659 + (1));
seq__11654 = G__11826;
chunk__11657 = G__11827;
count__11658 = G__11828;
i__11659 = G__11829;
continue;
} else {
var G__11831 = seq__11654;
var G__11832 = chunk__11657;
var G__11833 = count__11658;
var G__11834 = (i__11659 + (1));
seq__11654 = G__11831;
chunk__11657 = G__11832;
count__11658 = G__11833;
i__11659 = G__11834;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11654);
if(temp__5804__auto__){
var seq__11654__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11654__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11654__$1);
var G__11848 = cljs.core.chunk_rest(seq__11654__$1);
var G__11849 = c__5568__auto__;
var G__11850 = cljs.core.count(c__5568__auto__);
var G__11851 = (0);
seq__11654 = G__11848;
chunk__11657 = G__11849;
count__11658 = G__11850;
i__11659 = G__11851;
continue;
} else {
var ext = cljs.core.first(seq__11654__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__11852 = cljs.core.next(seq__11654__$1);
var G__11853 = null;
var G__11854 = (0);
var G__11855 = (0);
seq__11654 = G__11852;
chunk__11657 = G__11853;
count__11658 = G__11854;
i__11659 = G__11855;
continue;
} else {
var G__11859 = cljs.core.next(seq__11654__$1);
var G__11860 = null;
var G__11861 = (0);
var G__11862 = (0);
seq__11654 = G__11859;
chunk__11657 = G__11860;
count__11658 = G__11861;
i__11659 = G__11862;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq11643){
var G__11644 = cljs.core.first(seq11643);
var seq11643__$1 = cljs.core.next(seq11643);
var G__11645 = cljs.core.first(seq11643__$1);
var seq11643__$2 = cljs.core.next(seq11643__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11644,G__11645,seq11643__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__11676,p__11677){
var map__11678 = p__11676;
var map__11678__$1 = cljs.core.__destructure_map(map__11678);
var runtime = map__11678__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11678__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__11679 = p__11677;
var map__11679__$1 = cljs.core.__destructure_map(map__11679);
var msg = map__11679__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11679__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__11682 = cljs.core.deref(state_ref);
var map__11682__$1 = cljs.core.__destructure_map(map__11682);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11682__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11682__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__11687,msg){
var map__11688 = p__11687;
var map__11688__$1 = cljs.core.__destructure_map(map__11688);
var runtime = map__11688__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11688__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__11689,key,p__11690){
var map__11691 = p__11689;
var map__11691__$1 = cljs.core.__destructure_map(map__11691);
var state = map__11691__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11691__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__11692 = p__11690;
var map__11692__$1 = cljs.core.__destructure_map(map__11692);
var spec = map__11692__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11692__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__11694,key,spec){
var map__11695 = p__11694;
var map__11695__$1 = cljs.core.__destructure_map(map__11695);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11695__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__11698_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__11698_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__11699_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__11699_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__11701_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__11701_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__11702_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__11702_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__11703_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__11703_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__11724,key){
var map__11725 = p__11724;
var map__11725__$1 = cljs.core.__destructure_map(map__11725);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11725__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__11728,msg){
var map__11729 = p__11728;
var map__11729__$1 = cljs.core.__destructure_map(map__11729);
var runtime = map__11729__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11729__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__11732,p__11733){
var map__11734 = p__11732;
var map__11734__$1 = cljs.core.__destructure_map(map__11734);
var runtime = map__11734__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11734__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__11735 = p__11733;
var map__11735__$1 = cljs.core.__destructure_map(map__11735);
var msg = map__11735__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11735__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11735__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__11742 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__11744 = null;
var count__11745 = (0);
var i__11746 = (0);
while(true){
if((i__11746 < count__11745)){
var map__11767 = chunk__11744.cljs$core$IIndexed$_nth$arity$2(null,i__11746);
var map__11767__$1 = cljs.core.__destructure_map(map__11767);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11767__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__11960 = seq__11742;
var G__11961 = chunk__11744;
var G__11962 = count__11745;
var G__11963 = (i__11746 + (1));
seq__11742 = G__11960;
chunk__11744 = G__11961;
count__11745 = G__11962;
i__11746 = G__11963;
continue;
} else {
var G__11964 = seq__11742;
var G__11965 = chunk__11744;
var G__11966 = count__11745;
var G__11967 = (i__11746 + (1));
seq__11742 = G__11964;
chunk__11744 = G__11965;
count__11745 = G__11966;
i__11746 = G__11967;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11742);
if(temp__5804__auto__){
var seq__11742__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11742__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11742__$1);
var G__11977 = cljs.core.chunk_rest(seq__11742__$1);
var G__11978 = c__5568__auto__;
var G__11979 = cljs.core.count(c__5568__auto__);
var G__11980 = (0);
seq__11742 = G__11977;
chunk__11744 = G__11978;
count__11745 = G__11979;
i__11746 = G__11980;
continue;
} else {
var map__11771 = cljs.core.first(seq__11742__$1);
var map__11771__$1 = cljs.core.__destructure_map(map__11771);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11771__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__11992 = cljs.core.next(seq__11742__$1);
var G__11993 = null;
var G__11995 = (0);
var G__11996 = (0);
seq__11742 = G__11992;
chunk__11744 = G__11993;
count__11745 = G__11995;
i__11746 = G__11996;
continue;
} else {
var G__12002 = cljs.core.next(seq__11742__$1);
var G__12003 = null;
var G__12004 = (0);
var G__12005 = (0);
seq__11742 = G__12002;
chunk__11744 = G__12003;
count__11745 = G__12004;
i__11746 = G__12005;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
