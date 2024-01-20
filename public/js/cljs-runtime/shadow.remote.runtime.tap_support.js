goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__16858,p__16859){
var map__16860 = p__16858;
var map__16860__$1 = cljs.core.__destructure_map(map__16860);
var svc = map__16860__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16860__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16860__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16860__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__16861 = p__16859;
var map__16861__$1 = cljs.core.__destructure_map(map__16861);
var msg = map__16861__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16861__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16861__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16861__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16861__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__16870,p__16871){
var map__16872 = p__16870;
var map__16872__$1 = cljs.core.__destructure_map(map__16872);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16872__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__16873 = p__16871;
var map__16873__$1 = cljs.core.__destructure_map(map__16873);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16873__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__16878,p__16879){
var map__16880 = p__16878;
var map__16880__$1 = cljs.core.__destructure_map(map__16880);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16880__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16880__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__16881 = p__16879;
var map__16881__$1 = cljs.core.__destructure_map(map__16881);
var msg = map__16881__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16881__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__16885,tid){
var map__16886 = p__16885;
var map__16886__$1 = cljs.core.__destructure_map(map__16886);
var svc = map__16886__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16886__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__16972 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__16973 = null;
var count__16974 = (0);
var i__16975 = (0);
while(true){
if((i__16975 < count__16974)){
var vec__17011 = chunk__16973.cljs$core$IIndexed$_nth$arity$2(null,i__16975);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17011,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17011,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__17072 = seq__16972;
var G__17073 = chunk__16973;
var G__17074 = count__16974;
var G__17075 = (i__16975 + (1));
seq__16972 = G__17072;
chunk__16973 = G__17073;
count__16974 = G__17074;
i__16975 = G__17075;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16972);
if(temp__5804__auto__){
var seq__16972__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16972__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16972__$1);
var G__17076 = cljs.core.chunk_rest(seq__16972__$1);
var G__17077 = c__5568__auto__;
var G__17078 = cljs.core.count(c__5568__auto__);
var G__17079 = (0);
seq__16972 = G__17076;
chunk__16973 = G__17077;
count__16974 = G__17078;
i__16975 = G__17079;
continue;
} else {
var vec__17034 = cljs.core.first(seq__16972__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17034,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17034,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__17080 = cljs.core.next(seq__16972__$1);
var G__17081 = null;
var G__17082 = (0);
var G__17083 = (0);
seq__16972 = G__17080;
chunk__16973 = G__17081;
count__16974 = G__17082;
i__16975 = G__17083;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__16936_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__16936_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__16946_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__16946_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__16947_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__16947_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__16948_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__16948_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__17037){
var map__17038 = p__17037;
var map__17038__$1 = cljs.core.__destructure_map(map__17038);
var svc = map__17038__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17038__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17038__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
